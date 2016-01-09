/*TMODJS:{"debug":true,"version":64,"md5":"0184410ec6700411d97fcb849566fa49"}*/
define(function(require) {
    return require("../../../template")("resource/touristGroup/view/lineproductSearchList", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, lineProductList = $data.lineProductList, $escape = ($data.lineProduct, 
            $data.$index, $utils.$escape), $out = "";
            return $line = 1, $each(lineProductList, function(lineProduct) {
                $out += ' <tr data-quote-id="', $line = 2, $out += $escape(lineProduct.quoteId), 
                $out += '" data-id="', $line = 2, $out += $escape(lineProduct.id), $out += '"> <td name="travelLine-select" data-travelLine-Id="', 
                $line = 3, $out += $escape(lineProduct.id), $out += '"> ', $line = 4, $out += $escape(lineProduct.name), 
                $out += " </td> <td> ", $line = 8, $out += $escape(lineProduct.days), $out += " </td> <td> ", 
                $line = 12, $out += $escape(lineProduct.type), $out += " </td> <td> ", $line = 16, 
                0 == lineProduct.customerType ? ($out += " 散客 ", $line = 18) : 1 == lineProduct.customerType && ($out += " 团体 ", 
                $line = 20), $out += ' </td> <td> <label class="choice-TravelLine-click"> <input type="radio" class="ace" value="123" name="choice-TravelLine" index="0"> <span class="lbl"> </span> </label> </td> </tr> ', 
                $line = 31;
            }), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '{{each lineProductList as lineProduct}}\r\n	<tr data-quote-id="{{lineProduct.quoteId}}" data-id="{{lineProduct.id}}">\r\n		<td name="travelLine-select" data-travelLine-Id="{{lineProduct.id}}">\r\n			{{lineProduct.name}}\r\n		</td>\r\n\r\n		<td>\r\n			{{lineProduct.days}}\r\n		</td>\r\n\r\n		<td>\r\n			{{lineProduct.type}}\r\n		</td>\r\n\r\n		<td>\r\n			{{if lineProduct.customerType==0}}\r\n			散客\r\n			{{else if lineProduct.customerType==1}}\r\n			团体\r\n			{{/if}}\r\n		</td>\r\n		<td>\r\n			<label class="choice-TravelLine-click">\r\n				<input type="radio" class="ace" value="123" name="choice-TravelLine" index="0">\r\n					<span class="lbl">\r\n						\r\n					</span>\r\n			</label>\r\n		</td>\r\n	</tr>\r\n{{/each}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});