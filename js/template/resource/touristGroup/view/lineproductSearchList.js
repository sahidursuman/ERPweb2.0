/*TMODJS:{"debug":true,"version":34,"md5":"76debcc1ab614728cc643dc22edac5eb"}*/
define(function(require) {
    return require("../../../template")("resource/touristGroup/view/lineproductSearchList", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, lineProductList = $data.lineProductList, $escape = ($data.lineProduct, 
            $data.$index, $utils.$escape), quote = $data.quote, $out = "";
            return $line = 1, $each(lineProductList, function(lineProduct) {
                $out += ' <tr data-quote-id="', $line = 2, $out += $escape(lineProduct.quoteId), 
                $out += '" data-id="', $line = 2, $out += $escape(lineProduct.id), $out += '"> <td name="travelLine-select" data-travelLine-Id="', 
                $line = 3, $out += $escape(lineProduct.id), $out += '"> ', $line = 4, $out += $escape(lineProduct.name), 
                $out += " </td> ", $line = 6, quote && ($out += " <td>", $line = 7, $out += $escape($helpers.dateFormat(lineProduct.startTime, "yyyy-MM-dd")), 
                $out += "</td> ", $line = 8), $out += " <td> ", $line = 10, $out += $escape(lineProduct.days), 
                $out += " </td> <td> ", $line = 13, $out += $escape(lineProduct.type), $out += " </td> ", 
                $line = 15, quote && ($out += " <td> ", $line = 17, $out += $escape(lineProduct.adultCount), 
                $out += "大", $line = 17, $out += $escape(lineProduct.childCount), $out += "小 </td> ", 
                $line = 19), $out += " <td> ", $line = 21, 0 == lineProduct.customerType ? ($out += " 散客 ", 
                $line = 23) : 1 == lineProduct.customerType && ($out += " 团体 ", $line = 25), $out += " </td> <!-- <td> ", 
                $line = 28, 0 == lineProduct.status ? ($out += " 未启用 ", $line = 30) : 1 == lineProduct.status && ($out += " 已启用 ", 
                $line = 32), $out += " </td> --> ", $line = 34, quote && ($out += " <td>", $line = 35, 
                $out += $escape(lineProduct.travelAgencyName), $out += "</td> <td>", $line = 36, 
                $out += $escape(lineProduct.contactRealname), $out += "</td> <td>", $line = 37, 
                $out += $escape(lineProduct.createTime), $out += "</td> ", $line = 38), $out += ' <td> <label class="choice-TravelLine-click"> <input type="radio" class="ace" value="123" name="choice-TravelLine" index="0"> <span class="lbl"> </span> </label> </td> </tr> ', 
                $line = 48;
            }), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '{{each lineProductList as lineProduct}}\r\n	<tr data-quote-id="{{lineProduct.quoteId}}" data-id="{{lineProduct.id}}">\r\n		<td name="travelLine-select" data-travelLine-Id="{{lineProduct.id}}">\r\n			{{lineProduct.name}}\r\n		</td>\r\n		{{if !!quote}}\r\n		<td>{{lineProduct.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n		{{/if}}\r\n		<td>\r\n			{{lineProduct.days}}\r\n		</td>\r\n		<td>\r\n			{{lineProduct.type}}\r\n		</td>\r\n		{{if !!quote}}\r\n		<td>\r\n			{{lineProduct.adultCount}}大{{lineProduct.childCount}}小\r\n		</td>\r\n		{{/if}}\r\n		<td>\r\n			{{if lineProduct.customerType==0}}\r\n			散客\r\n			{{else if lineProduct.customerType==1}}\r\n			团体\r\n			{{/if}}\r\n		</td>\r\n		<!-- <td>\r\n			{{if lineProduct.status==0}}\r\n			未启用\r\n			{{else if lineProduct.status==1}}\r\n			已启用\r\n			{{/if}}\r\n		</td> -->\r\n		{{if !!quote}}\r\n		<td>{{lineProduct.travelAgencyName}}</td>\r\n		<td>{{lineProduct.contactRealname}}</td>\r\n		<td>{{lineProduct.createTime}}</td>\r\n		{{/if}}\r\n		<td>\r\n			<label class="choice-TravelLine-click">\r\n				<input type="radio" class="ace" value="123" name="choice-TravelLine" index="0">\r\n					<span class="lbl">\r\n						\r\n					</span>\r\n			</label>\r\n		</td>\r\n	</tr>\r\n{{/each}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});