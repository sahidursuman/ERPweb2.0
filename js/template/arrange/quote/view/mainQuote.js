/*TMODJS:{"debug":true,"version":8,"md5":"f18123d0561a0a102fe9b0628ea66fc4"}*/
define(function(require) {
    return require("../../../template")("arrange/quote/view/mainQuote", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, a = $data.a, $out = "";
            return $out += '<div class="row col-xs-12"> <div class="tabbable"> <ul class="nav nav-tabs" id="quoteTab"> <li class="active"> <a data-toggle="tab" href="#quoteContent-', 
            $line = 5, $out += $escape(a), $out += '" class="quoteContent" aria-expanded="false" data-value="1"> 报价详情 </a> </li> <li> <a data-toggle="tab" href="#inquiryContent-', 
            $line = 10, $out += $escape(a), $out += '" class="inquiryContent" aria-expanded="true" data-value="2"> 询价状态 </a> </li> </ul> <div class="tab-content" style="position:relative;top: -2px">  <div id="quoteContent-', 
            $line = 17, $out += $escape(a), $out += '" class="tab-pane fade active in clearfix"> </div>  <div id="inquiryContent-', 
            $line = 21, $out += $escape(a), $out += '" class="tab-pane fade clearfix"> </div> </div> </div> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row col-xs-12">\r\n	<div class="tabbable">\r\n		<ul class="nav nav-tabs" id="quoteTab">\r\n			<li class="active">\r\n				<a data-toggle="tab" href="#quoteContent-{{a}}" class="quoteContent" aria-expanded="false" data-value="1">\r\n					报价详情\r\n				</a>\r\n			</li>\r\n			<li>\r\n				<a data-toggle="tab" href="#inquiryContent-{{a}}" class="inquiryContent" aria-expanded="true" data-value="2">\r\n					询价状态\r\n				</a>\r\n			</li>\r\n		</ul>\r\n		<div class="tab-content" style="position:relative;top: -2px">\r\n			<!--报价详情-->\r\n			<div id="quoteContent-{{a}}" class="tab-pane fade active in clearfix">\r\n				\r\n			</div>\r\n			<!--询价状态-->\r\n			<div id="inquiryContent-{{a}}" class="tab-pane fade clearfix">\r\n				\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});