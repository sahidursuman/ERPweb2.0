/*TMODJS:{"debug":true,"version":41,"md5":"d85843849a512c88d3e5efe4ac72de56"}*/
define(function(require) {
    return require("../../../template")("financial/replace/view/billImages", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, images = $data.images, $escape = ($data.image, 
            $data.$index, $utils.$escape), $out = "";
            return $out += ' <div id="layer-photos-financial-count" class="imgs" style="margin: 0px auto;"> <ul class="ace-thumbnails clearfix"> ', 
            $line = 3, $each(images, function(image) {
                $out += ' <li> <a href="', $line = 5, $out += $escape(image.WEB_IMG_URL_BIG), $out += '" data-rel="colorbox"> <img width="150" height="150" alt="150x150" src="', 
                $line = 6, $out += $escape(image.WEB_IMG_URL_SMALL), $out += '" /> </a> </li> ', 
                $line = 9;
            }), $out += " </ul> </div> <style> html{background-color:#E3E3E3; font-size:14px; color:#000; font-family:'微软雅黑'} pre{font-family:'微软雅黑'} .box{padding:20px; background-color:#fff; margin:50px 100px; border-radius:5px;} #about_hide{display:none} .layer_text{background-color:#fff; padding:20px;} .layer_text p{margin-bottom: 10px; text-indent: 2em; line-height: 23px;} #layer-photos-demo img{width:150px;padding:0 30px 30px;} </style>", 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '	<div id="layer-photos-financial-count" class="imgs" style="margin: 0px auto;">\r\n		<ul class="ace-thumbnails clearfix">\r\n			{{each images as image}}\r\n				<li>\r\n					<a href="{{image.WEB_IMG_URL_BIG}}" data-rel="colorbox"> \r\n						<img width="150" height="150" alt="150x150" src="{{image.WEB_IMG_URL_SMALL}}" />\r\n					</a>\r\n				</li>\r\n			{{/each}}\r\n		</ul>\r\n	</div>\r\n<style>\r\nhtml{background-color:#E3E3E3; font-size:14px; color:#000; font-family:\'微软雅黑\'}\r\npre{font-family:\'微软雅黑\'}   \r\n.box{padding:20px; background-color:#fff; margin:50px 100px; border-radius:5px;}\r\n#about_hide{display:none}\r\n.layer_text{background-color:#fff; padding:20px;}\r\n.layer_text p{margin-bottom: 10px; text-indent: 2em; line-height: 23px;}\r\n#layer-photos-demo img{width:150px;padding:0 30px 30px;}   \r\n</style>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});