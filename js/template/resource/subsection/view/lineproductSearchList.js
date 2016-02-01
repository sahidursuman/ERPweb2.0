/*TMODJS:{"debug":true,"version":26,"md5":"646da2701615d24e93fb060f2795eba6"}*/
define(function(require) {
    return require("../../../template")("resource/subsection/view/lineproductSearchList", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, lineProductList = $data.lineProductList, $escape = ($data.lineProduct, 
            $data.$index, $utils.$escape), $out = "";
            return $line = 1, $each(lineProductList, function(lineProduct) {
                $out += ' <tr data-id="', $line = 2, $out += $escape(lineProduct.id), $out += '" data-name="', 
                $line = 2, $out += $escape(lineProduct.name), $out += '" data-customerType="', $line = 2, 
                $out += $escape(lineProduct.customerType), $out += '" data-days="', $line = 2, $out += $escape(lineProduct.days), 
                $out += '"> <td> ', $line = 4, $out += $escape(lineProduct.name), $out += " </td> <td> ", 
                $line = 7, 0 == lineProduct.customerType ? ($out += " 散客 ", $line = 9) : 1 == lineProduct.customerType && ($out += " 团体 ", 
                $line = 11), $out += " </td> <td> ", $line = 14, $out += $escape(lineProduct.days), 
                $out += ' </td> <td> <label class="choice-TravelLine-click"> <input type="radio" class="ace" name="T-choice-ProLine" index="0"> <span class="lbl"></span> </label> </td> </tr> ', 
                $line = 23;
            }), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '{{each lineProductList as lineProduct}}\r\n	<tr data-id="{{lineProduct.id}}" data-name="{{lineProduct.name}}" data-customerType="{{lineProduct.customerType}}" data-days="{{lineProduct.days}}">\r\n		<td>\r\n			{{lineProduct.name}}\r\n		</td>\r\n		<td>\r\n			{{if lineProduct.customerType==0}}\r\n			散客\r\n			{{else if lineProduct.customerType==1}}\r\n			团体\r\n			{{/if}}\r\n		</td>\r\n		<td>\r\n			{{lineProduct.days}}\r\n		</td>\r\n		<td>\r\n			<label class="choice-TravelLine-click">\r\n				<input type="radio" class="ace" name="T-choice-ProLine" index="0">\r\n					<span class="lbl"></span>\r\n			</label>\r\n		</td>\r\n	</tr>\r\n{{/each}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});