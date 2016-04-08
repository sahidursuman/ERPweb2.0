/*TMODJS:{"debug":true,"version":208,"md5":"4b23f581f16f8e0a95432c8ef7221b4b"}*/
define(function(require) {
    return require("../../../template")("businessAnalyst/employeePerfor/view/listDept", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), isChildGroup = $data.isChildGroup, $each = $utils.$each, result = $data.result, $escape = ($data.deptL, 
            $data.$index, $utils.$escape), getAdultCount = $data.getAdultCount, getChildCount = $data.getChildCount, getNotDirectAdultCount = $data.getNotDirectAdultCount, getNotDirectChildCount = $data.getNotDirectChildCount, tripCount = $data.tripCount, adultCount = $data.adultCount, childCount = $data.childCount, transAdultCount = $data.transAdultCount, transChildCount = $data.transChildCount, innerAdultCount = $data.innerAdultCount, innerChildCount = $data.innerChildCount, orderCount = $data.orderCount, $out = "";
            return $out += '<table class="table table-striped table-bordered table-hover T-showHighLight table-fixed"> <thead> <tr class="bg-blur"> <th>部门</th> ', 
            $line = 5, isChildGroup && ($out += " <th>子部门</th> ", $line = 7), $out += " <th>收客量</th> <th>内转收客量</th> <th>发团量</th> <th>发客量</th> <th>外转转出量</th> <th>内转转出量</th> <th>代订订单量</th> </tr> </thead> <tbody> ", 
            $line = 18, $each(result, function(deptL) {
                $out += " <tr> <td>", $line = 20, $out += $escape(deptL.name), $out += "</td> ", 
                $line = 21, isChildGroup && ($out += ' <td class="text-bold">', $line = 22, $out += $escape(deptL.childName), 
                $out += "</td> ", $line = 23), $out += " <td>", $line = 24, $out += $escape(deptL.getAdultCount), 
                $out += "大", $line = 24, $out += $escape(deptL.getChildCount), $out += '小</td> <span class="hidden"> ', 
                $line = 26, $out += $escape(getAdultCount += deptL.getAdultCount), $out += " ", 
                $line = 27, $out += $escape(getChildCount += deptL.getChildCount), $out += " </span> <td>", 
                $line = 29, $out += $escape(deptL.getNotDirectAdultCount), $out += "大", $line = 29, 
                $out += $escape(deptL.getNotDirectChildCount), $out += '小</td> <span class="hidden"> ', 
                $line = 31, $out += $escape(getNotDirectAdultCount += deptL.getNotDirectAdultCount), 
                $out += " ", $line = 32, $out += $escape(getNotDirectChildCount += deptL.getNotDirectChildCount), 
                $out += " </span> <td>", $line = 34, $out += $escape(deptL.tripCount), $out += '</td> <span class="hidden"> ', 
                $line = 36, $out += $escape(tripCount += deptL.tripCount), $out += " </span> <td>", 
                $line = 38, $out += $escape(deptL.adultCount), $out += "大", $line = 38, $out += $escape(deptL.childCount), 
                $out += '小</td> <span class="hidden"> ', $line = 40, $out += $escape(adultCount += deptL.adultCount), 
                $out += " ", $line = 41, $out += $escape(childCount += deptL.childCount), $out += " </span> <td>", 
                $line = 43, $out += $escape(deptL.transAdultCount), $out += "大", $line = 43, $out += $escape(deptL.transChildCount), 
                $out += '小</td> <span class="hidden"> ', $line = 45, $out += $escape(transAdultCount += deptL.transAdultCount), 
                $out += " ", $line = 46, $out += $escape(transChildCount += deptL.transChildCount), 
                $out += " </span> <td>", $line = 48, $out += $escape(deptL.innerAdultCount), $out += "大", 
                $line = 48, $out += $escape(deptL.innerChildCount), $out += '小</td> <span class="hidden"> ', 
                $line = 50, $out += $escape(innerAdultCount += deptL.innerAdultCount), $out += " ", 
                $line = 51, $out += $escape(innerChildCount += deptL.innerChildCount), $out += " </span> <td>", 
                $line = 53, $out += $escape(deptL.orderCount), $out += '</td> <span class="hidden"> ', 
                $line = 55, $out += $escape(orderCount += deptL.orderCount), $out += " </span> </tr> ", 
                $line = 58;
            }), $out += ' <tr style="background-color:#effef4"> <td class="text-bold" ', $line = 61, 
            isChildGroup && ($out += 'colspan="2" ', $line = 61), $out += ">合计</td> <td>", $line = 62, 
            $out += $escape(getAdultCount + getChildCount), $out += "</td> <td>", $line = 63, 
            $out += $escape(getNotDirectAdultCount + getNotDirectChildCount), $out += "</td> <td>", 
            $line = 64, $out += $escape(tripCount), $out += "</td> <td>", $line = 65, $out += $escape(adultCount + childCount), 
            $out += "</td> <td>", $line = 66, $out += $escape(transAdultCount + transChildCount), 
            $out += "</td> <td>", $line = 67, $out += $escape(innerAdultCount + innerChildCount), 
            $out += "</td> <td>", $line = 68, $out += $escape(orderCount), $out += "</td> </tr> </tbody> </table>", 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<table class="table table-striped table-bordered table-hover T-showHighLight table-fixed">\r\n	<thead>\r\n		<tr class="bg-blur">\r\n			<th>部门</th>\r\n			{{if isChildGroup}}\r\n			<th>子部门</th>\r\n			{{/if}}\r\n			<th>收客量</th>\r\n			<th>内转收客量</th>\r\n			<th>发团量</th>\r\n			<th>发客量</th>\r\n			<th>外转转出量</th>\r\n			<th>内转转出量</th>\r\n			<th>代订订单量</th>\r\n		</tr>\r\n	</thead>\r\n	<tbody>\r\n		{{each result as deptL}}\r\n		   <tr>\r\n	   		    <td>{{deptL.name}}</td>\r\n	   		    {{if isChildGroup}}\r\n	   		    <td class="text-bold">{{deptL.childName}}</td>\r\n	   		    {{/if}}\r\n	   			<td>{{deptL.getAdultCount}}大{{deptL.getChildCount}}小</td>\r\n	   			<span class="hidden">\r\n                    {{getAdultCount+= deptL.getAdultCount}}\r\n                    {{getChildCount+= deptL.getChildCount}}\r\n                </span>\r\n	   			<td>{{deptL.getNotDirectAdultCount}}大{{deptL.getNotDirectChildCount}}小</td>\r\n	   			<span class="hidden">\r\n                    {{getNotDirectAdultCount += deptL.getNotDirectAdultCount}}\r\n                    {{getNotDirectChildCount += deptL.getNotDirectChildCount}}\r\n                </span>\r\n	   			<td>{{deptL.tripCount}}</td>\r\n	   			<span class="hidden">\r\n                    {{tripCount += deptL.tripCount}}\r\n                </span>\r\n	   			<td>{{deptL.adultCount}}大{{deptL.childCount}}小</td>\r\n	   			<span class="hidden">\r\n                    {{adultCount += deptL.adultCount}}\r\n                    {{childCount += deptL.childCount}}\r\n                </span>\r\n	   			<td>{{deptL.transAdultCount}}大{{deptL.transChildCount}}小</td>\r\n	   			<span class="hidden">\r\n                    {{transAdultCount += deptL.transAdultCount}}\r\n                    {{transChildCount += deptL.transChildCount}}\r\n                </span>\r\n	   			<td>{{deptL.innerAdultCount}}大{{deptL.innerChildCount}}小</td>\r\n	   			<span class="hidden">\r\n                    {{innerAdultCount += deptL.innerAdultCount}}\r\n                    {{innerChildCount += deptL.innerChildCount}}\r\n                </span>\r\n	   			<td>{{deptL.orderCount}}</td>\r\n	   			<span class="hidden">\r\n                    {{orderCount += deptL.orderCount}}\r\n                </span>\r\n		   	</tr>\r\n		{{/each}}\r\n\r\n		<tr style="background-color:#effef4">\r\n			<td class="text-bold" {{if isChildGroup}}colspan="2" {{/if}}>合计</td>\r\n			<td>{{getAdultCount+getChildCount}}</td>\r\n			<td>{{getNotDirectAdultCount+getNotDirectChildCount}}</td>\r\n			<td>{{tripCount}}</td>\r\n			<td>{{adultCount+childCount}}</td>\r\n			<td>{{transAdultCount+transChildCount}}</td>\r\n			<td>{{innerAdultCount+innerChildCount}}</td>\r\n			<td>{{orderCount}}</td>\r\n		</tr>\r\n	</tbody>\r\n</table>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});