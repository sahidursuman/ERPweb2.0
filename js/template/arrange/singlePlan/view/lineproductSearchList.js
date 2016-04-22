/*TMODJS:{"debug":true,"version":12,"md5":"f200a913f15b8045d963e76c24de4adf"}*/
define(function(require) {
    return require("../../../template")("arrange/singlePlan/view/lineproductSearchList", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, lineProductList = $data.lineProductList, $escape = ($data.lineProduct, 
            $data.$index, $utils.$escape), $out = "";
            return $line = 1, $each(lineProductList, function(lineProduct) {
                $out += ' <tr data-id="', $line = 2, $out += $escape(lineProduct.id), $out += '"> <td name="lineName" data-travelLine-Id="', 
                $line = 3, $out += $escape(lineProduct.id), $out += '"> ', $line = 4, $out += $escape(lineProduct.name), 
                $out += " </td> <td> ", $line = 7, $out += $escape(lineProduct.type), $out += " </td> <td> ", 
                $line = 10, 0 == lineProduct.customerType ? ($out += " 散客 ", $line = 12) : 1 == lineProduct.customerType && ($out += " 团体 ", 
                $line = 14), $out += " </td> <td> ", $line = 17, $out += $escape(lineProduct.days), 
                $out += " </td> <td>", $line = 19, lineProduct.businessGroup && ($line = 19, $out += $escape(lineProduct.businessGroup.name), 
                $line = 19), $out += '</td> <td> <label class="choice-TravelLine-click"> <input type="radio" class="ace" name="choice-TravelLine" index="0"> <span class="lbl"></span> </label> </td> </tr> ', 
                $line = 27;
            }), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '{{each lineProductList as lineProduct}}\r\n	<tr data-id="{{lineProduct.id}}">\r\n		<td name="lineName" data-travelLine-Id="{{lineProduct.id}}">\r\n			{{lineProduct.name}}\r\n		</td>\r\n		<td>\r\n			{{lineProduct.type}}\r\n		</td>\r\n		<td>\r\n			{{if lineProduct.customerType==0}}\r\n			散客\r\n			{{else if lineProduct.customerType==1}}\r\n			团体\r\n			{{/if}}\r\n		</td>\r\n		<td>\r\n			{{lineProduct.days}}\r\n		</td>\r\n		<td>{{if !!lineProduct.businessGroup}}{{lineProduct.businessGroup.name}}{{/if}}</td>\r\n		<td>\r\n			<label class="choice-TravelLine-click">\r\n				<input type="radio" class="ace" name="choice-TravelLine" index="0">\r\n					<span class="lbl"></span>\r\n			</label>\r\n		</td>\r\n	</tr>\r\n{{/each}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});