/*TMODJS:{"debug":true,"version":46,"md5":"4456bccca7e9c7ea571e59276aadde46"}*/
define(function(require) {
    return require("../../../template")("resource/subsection/view/lineproductSearchList", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, lineProductList = $data.lineProductList, $escape = ($data.lineProduct, 
            $data.$index, $utils.$escape), $out = "";
            return $line = 1, $each(lineProductList, function(lineProduct) {
                $out += ' <tr data-id="', $line = 2, $out += $escape(lineProduct.id), $out += '" data-name="', 
                $line = 2, $out += $escape(lineProduct.name), $out += '" data-customerType="', $line = 3, 
                0 == lineProduct.customerType ? ($out += "散客", $line = 3) : 1 == lineProduct.customerType && ($out += "团体", 
                $line = 3), $out += '" data-days="', $line = 3, $out += $escape(lineProduct.days), 
                $out += '"> <td> ', $line = 5, $out += $escape(lineProduct.name), $out += " </td> <td> ", 
                $line = 8, 0 == lineProduct.customerType ? ($out += " 散客 ", $line = 10) : 1 == lineProduct.customerType && ($out += " 团体 ", 
                $line = 12), $out += " </td> <td> ", $line = 15, $out += $escape(lineProduct.days), 
                $out += " </td> <td>", $line = 17, $out += $escape(lineProduct.businessGroupName), 
                $out += '</td> <td> <label class="choice-TravelLine-click"> <input type="radio" class="ace T-choice-ProLine" name="choice-TravelLine-click" index="0"> <span class="lbl"></span> </label> </td> </tr> ', 
                $line = 24;
            }), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '{{each lineProductList as lineProduct}}\r\n	<tr data-id="{{lineProduct.id}}" data-name="{{lineProduct.name}}" \r\n	data-customerType="{{if lineProduct.customerType==0}}散客{{else if lineProduct.customerType==1}}团体{{/if}}" data-days="{{lineProduct.days}}">\r\n		<td>\r\n			{{lineProduct.name}}\r\n		</td>\r\n		<td>\r\n			{{if lineProduct.customerType==0}}\r\n			散客\r\n			{{else if lineProduct.customerType==1}}\r\n			团体\r\n			{{/if}}\r\n		</td>\r\n		<td>\r\n			{{lineProduct.days}}\r\n		</td>\r\n		<td>{{lineProduct.businessGroupName}}</td>\r\n		<td>\r\n			<label class="choice-TravelLine-click">\r\n			  <input type="radio" class="ace T-choice-ProLine" name="choice-TravelLine-click" index="0"> <span class="lbl"></span>\r\n			</label> \r\n		</td>\r\n	</tr>\r\n{{/each}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});