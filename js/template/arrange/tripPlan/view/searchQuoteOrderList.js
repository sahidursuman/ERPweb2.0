/*TMODJS:{"debug":true,"version":13,"md5":"d6abf179737e79d405184509c6fd5b59"}*/
define(function(require) {
    return require("../../../template")("arrange/tripPlan/view/searchQuoteOrderList", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, lineProductList = $data.lineProductList, $escape = ($data.rs, 
            $data.$index, $utils.$escape), $out = "";
            return $line = 1, $each(lineProductList, function(rs) {
                $out += ' <tr data-quote-id="', $line = 2, $out += $escape(rs.id), $out += '" data-line-id="', 
                $line = 3, rs.lineProduct && ($line = 3, $out += $escape(rs.lineProduct.id), $line = 3), 
                $out += '"> <td name="quoteNumber">', $line = 4, $out += $escape(rs.quoteNumber), 
                $out += '</td> <td name="lineName">', $line = 5, null != rs.lineProduct && ($line = 5, 
                $out += $escape(rs.lineProduct.name), $line = 5), $out += "</td> <td>", $line = 6, 
                null != rs.lineProduct && ($line = 6, $out += $escape(rs.lineProduct.type), $line = 6), 
                $out += "</td> <td> ", $line = 8, null != rs.lineProduct && ($out += " ", $line = 9, 
                0 == rs.lineProduct.customerType ? ($out += " 散客 ", $line = 11) : ($out += " 团体 ", 
                $line = 13), $out += " ", $line = 14), $out += ' </td> <td class="F-float F-count">', 
                $line = 16, $out += $escape(rs.adultCount), $out += "大", $line = 16, $out += $escape(rs.childCount), 
                $out += "小</td> <td>", $line = 17, null != rs.lineProduct && ($line = 17, $out += $escape(rs.lineProduct.days), 
                $line = 17), $out += '</td> <td class="F-float F-count">', $line = 18, $out += $escape(rs.createTime), 
                $out += "</td> <td>", $line = 19, null != rs.partnerAgency && ($line = 19, $out += $escape(rs.partnerAgency.travelAgencyName), 
                $line = 19), $out += "</td> <td>", $line = 20, null != rs.partnerAgencyContact && ($line = 20, 
                $out += $escape(rs.partnerAgencyContact.contactRealname), $line = 20), $out += "</td> <td>", 
                $line = 21, $out += $escape(rs.startTime), $out += '</td> <td> <label class="T-quote-line"> <input type="radio" class="ace" value="123" name="choice-TravelLine" index="0"> <span class="lbl"></span> </label> </td> </tr> ', 
                $line = 29;
            }), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '{{each lineProductList as rs}}\r\n<tr data-quote-id="{{rs.id}}" \r\n	data-line-id="{{if !!rs.lineProduct}}{{rs.lineProduct.id}}{{/if}}">\r\n		<td name="quoteNumber">{{rs.quoteNumber}}</td>\r\n		<td name="lineName">{{if rs.lineProduct != null}}{{rs.lineProduct.name}}{{/if}}</td>\r\n		<td>{{if rs.lineProduct != null}}{{rs.lineProduct.type}}{{/if}}</td>\r\n		<td>\r\n			{{if rs.lineProduct != null}}    \r\n				{{if rs.lineProduct.customerType==0}}\r\n					  散客\r\n				{{else}}             \r\n					  团体\r\n				{{/if}}  \r\n			{{/if}}\r\n		</td>\r\n		<td class="F-float F-count">{{rs.adultCount}}大{{rs.childCount}}小</td>\r\n		<td>{{if rs.lineProduct !=null }}{{rs.lineProduct.days}}{{/if}}</td>\r\n		<td class="F-float F-count">{{rs.createTime}}</td>\r\n		<td>{{if rs.partnerAgency !=null }}{{rs.partnerAgency.travelAgencyName}}{{/if}}</td>\r\n		<td>{{if rs.partnerAgencyContact !=null }}{{rs.partnerAgencyContact.contactRealname}}{{/if}}</td>\r\n		<td>{{rs.startTime}}</td>\r\n		<td>\r\n			<label class="T-quote-line">\r\n				<input type="radio" class="ace" value="123" name="choice-TravelLine" index="0">\r\n					<span class="lbl"></span>\r\n			</label>\r\n		</td>\r\n	</tr>\r\n{{/each}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});