/*TMODJS:{"debug":true,"version":33,"md5":"9d2db8fe3719efcd872a0391880b7731"}*/
define(function(require) {
    return require("../../../template")("arrange/quote/view/inquiryResult", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, a = $data.a, tag = $data.tag, $out = "";
            return $out += '<div class="row col-xs-12 globalAdd"> <div class="tabbable"> <button class="T-refresh-status btn btn-sm pull-right btn-success" style="z-index: +1;"><i class="fa fa-refresh ace-icon"></i>刷新</button> <ul class="nav nav-tabs" id="inquiryTab"> <li class="active"> <a data-toggle="tab" href="#busInquiryResult-', 
            $line = 7, $out += $escape(a), $line = 7, tag && ($out += "-", $line = 7, $out += $escape(tag), 
            $line = 7), $out += '" class="busInquiryResult stateQuoteStyle" aria-expanded="false" data-value="1"> 车 </a> </li> <li> <a data-toggle="tab" href="#hotelInquiryContent-', 
            $line = 12, $out += $escape(a), $line = 12, tag && ($out += "-", $line = 12, $out += $escape(tag), 
            $line = 12), $out += '" class="hotelInquiryContent stateQuoteStyle" aria-expanded="true" data-value="2"> 房 </a> </li> </ul> <div class="tab-content" style="position:relative;top: -2px">  <div id="busInquiryResult-', 
            $line = 19, $out += $escape(a), $line = 19, tag && ($out += "-", $line = 19, $out += $escape(tag), 
            $line = 19), $out += '" class="tab-pane fade active in clearfix"> </div>  <div id="hotelInquiryContent-', 
            $line = 22, $out += $escape(a), $line = 22, tag && ($out += "-", $line = 22, $out += $escape(tag), 
            $line = 22), $out += '" class="tab-pane fade clearfix"> </div> </div> </div> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row col-xs-12 globalAdd">\r\n	<div class="tabbable">\r\n		<button class="T-refresh-status btn btn-sm pull-right btn-success" style="z-index: +1;"><i class="fa fa-refresh ace-icon"></i>刷新</button>\r\n\r\n		<ul class="nav nav-tabs" id="inquiryTab">\r\n			<li class="active">\r\n				<a data-toggle="tab" href="#busInquiryResult-{{a}}{{if !!tag}}-{{tag}}{{/if}}" class="busInquiryResult stateQuoteStyle" aria-expanded="false" data-value="1">\r\n					车\r\n				</a>\r\n			</li>\r\n			<li>\r\n				<a data-toggle="tab" href="#hotelInquiryContent-{{a}}{{if !!tag}}-{{tag}}{{/if}}" class="hotelInquiryContent stateQuoteStyle" aria-expanded="true" data-value="2">\r\n					房\r\n				</a>\r\n			</li>\r\n		</ul>\r\n		<div class="tab-content" style="position:relative;top: -2px">\r\n			<!--车 询价状态-->\r\n			<div id="busInquiryResult-{{a}}{{if !!tag}}-{{tag}}{{/if}}" class="tab-pane fade active in clearfix">\r\n			</div>\r\n			<!--房 询价状态-->\r\n			<div id="hotelInquiryContent-{{a}}{{if !!tag}}-{{tag}}{{/if}}" class="tab-pane fade clearfix">\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n\r\n\r\n\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});