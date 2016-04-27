/*TMODJS:{"debug":true,"version":113,"md5":"d2a56745e63afc60a1e707709d512080"}*/
define(function(require) {
    return require("../../../template")("financial/count/view/billImage", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, images = $data.images, $escape = ($data.image, 
            $data.$index, $utils.$escape), $out = "";
            return $out += '<!-- <div id="layer-photos-financial-count" class="imgs" style="margin: 0px auto;"> <ul class="ace-thumbnails clearfix"> ', 
            $line = 3, $each(images, function(image) {
                $out += ' <li><a href="', $line = 4, $out += $escape(image.WEB_IMG_URL_BIG), $out += '" data-rel="colorbox"> <img width="150" height="150" alt="150x150" src="', 
                $line = 5, $out += $escape(image.WEB_IMG_URL_SMALL), $out += '" /> </a></li> ', 
                $line = 7;
            }), $out += " </ul> </div> <style> html{background-color:#E3E3E3; font-size:14px; color:#000; font-family:'微软雅黑'} pre{font-family:'微软雅黑'} .box{padding:20px; background-color:#fff; margin:50px 100px; border-radius:5px;} #about_hide{display:none} .layer_text{background-color:#fff; padding:20px;} .layer_text p{margin-bottom: 10px; text-indent: 2em; line-height: 23px;} #layer-photos-demo img{width:150px;padding:0 30px 30px;} </style> --> <ul class=\"billImageDowebok\"> ", 
            $line = 21, $each(images, function(image) {
                $out += ' <li><span></span><img data-original="', $line = 22, $out += $escape(image.WEB_IMG_URL_BIG), 
                $out += '" src="', $line = 22, $out += $escape(image.WEB_IMG_URL_SMALL), $out += '"></li> ', 
                $line = 23;
            }), $out += " </ul> ", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<!-- <div id="layer-photos-financial-count" class="imgs" style="margin: 0px auto;">\r\n    <ul class="ace-thumbnails clearfix">\r\n        {{each images as image}}\r\n        <li><a href="{{image.WEB_IMG_URL_BIG}}" data-rel="colorbox"> \r\n        <img width="150" height="150" alt="150x150" src="{{image.WEB_IMG_URL_SMALL}}" />\r\n        </a></li>\r\n        {{/each}}\r\n    </ul>\r\n    \r\n</div>\r\n<style>\r\nhtml{background-color:#E3E3E3; font-size:14px; color:#000; font-family:\'微软雅黑\'}\r\npre{font-family:\'微软雅黑\'}\r\n.box{padding:20px; background-color:#fff; margin:50px 100px; border-radius:5px;}\r\n#about_hide{display:none}\r\n.layer_text{background-color:#fff; padding:20px;}\r\n.layer_text p{margin-bottom: 10px; text-indent: 2em; line-height: 23px;}\r\n#layer-photos-demo img{width:150px;padding:0 30px 30px;}\r\n</style> -->\r\n<ul class="billImageDowebok">\r\n    {{each images as image}}\r\n    <li><span></span><img data-original="{{image.WEB_IMG_URL_BIG}}" src="{{image.WEB_IMG_URL_SMALL}}"></li>\r\n    {{/each}}\r\n</ul>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});