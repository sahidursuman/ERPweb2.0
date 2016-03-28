/*TMODJS:{"debug":true,"version":209,"md5":"6ba50e7c8b85b0431eaf0894e74df705"}*/
define(function(require) {
    return require("../../../template")("arrange/transitPlan/view/listbusCompleted", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, unifyList = $data.unifyList, $escape = ($data.bus, 
            $data.$index, $data.businfo, $data.buslist, $data.index, $utils.$escape), recordSize = $data.recordSize, $out = "";
            return $out += '<table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr class="bg-blur T-tr-fixed"> <th>车俩信息</th> <th>类型</th> <th>中转信息</th> <th>客人信息</th> <th>抵达时间</th> <th>班次</th> <th>要求</th> <th>操作</th> </tr> </thead> <tbody class="T-busCompleted-list"> ', 
            $line = 15, $each(unifyList, function(bus) {
                $out += " ", $line = 16, $each(bus.busList, function(businfo) {
                    $out += " ", $line = 17, $each(bus.outRemarkList, function(buslist, index) {
                        $out += ' <tr data-id = "', $line = 18, $out += $escape(bus.unifyId), $out += '"> ', 
                        $line = 19, 0 == index && ($out += ' <td class="h-touristGroupInfo" rowspan="', 
                        $line = 20, $out += $escape(bus.outRemarkList.length), $out += '"> <p><span>', $line = 21, 
                        $out += $escape(businfo.busCompanyName), $out += "</span> &nbsp;<span>", $line = 21, 
                        $out += $escape(businfo.licenseNumber), $out += "</span></p> </td> ", $line = 23), 
                        $out += " <td > <span >", $line = 25, 1 == bus.shuttleType ? ($out += " 接团 ", $line = 25) : 2 == bus.shuttleType && ($out += " 送团", 
                        $line = 25), $out += '</span> <input type="hidden" name="shuttleType" value="', 
                        $line = 26, 1 == buslist.shuttleType ? ($out += " 1 ", $line = 26) : 2 == buslist.shuttleType && ($out += " 2", 
                        $line = 26), $out += '" > </td> <td class="h-touristGroupInfo"> <p>中转单号：', $line = 29, 
                        $out += $escape(buslist.orderNumber), $out += "</p> <p><span>&lt;", $line = 30, 
                        $out += $escape(buslist.lineProductName), $out += "&gt;</span></p> <p><span>", $line = 31, 
                        $out += $escape(buslist.startTime), $out += "</span><span>", $line = 31, $out += $escape(buslist.partnerAgencyName), 
                        $out += "</span><span>外链销售：", $line = 31, $out += $escape(buslist.outOPUserName), 
                        $out += "</span></p> <p>收客单号：", $line = 32, $out += $escape(buslist.tgOrderNumber), 
                        $out += "</p> </td> <td> <p>", $line = 35, $out += $escape(buslist.contactMemberName), 
                        $out += "</p> <p>", $line = 36, $out += $escape(buslist.adultCount), $out += "大", 
                        $line = 36, $out += $escape(buslist.childCount), $out += "小</p> </td> <td>", $line = 38, 
                        $out += $escape(buslist.arriveTime), $out += "</td> <td>", $line = 39, $out += $escape(buslist.shift), 
                        $out += "</td> <td>", $line = 40, $out += $escape(buslist.require), $out += "</td> ", 
                        $line = 41, 0 == index && ($out += ' <td rowspan="', $line = 42, $out += $escape(bus.outRemarkList.length), 
                        $out += '"> <a class="cursor T-action T-message">通知</a> <a class="cursor T-plan-busyet T-action"> <label class="padding-right20">|</label> 安排</a> <a class="cursor T-check-bus T-action"> <label class="padding-right20">|</label>查看 </td> ', 
                        $line = 49), $out += " </tr> ", $line = 51;
                    }), $out += " ", $line = 52;
                }), $out += " ", $line = 53;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 58, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<table class="table table-striped table-bordered table-hover T-showHighLight">\r\n    <thead>\r\n        <tr class="bg-blur T-tr-fixed">\r\n            <th>车俩信息</th>\r\n            <th>类型</th>\r\n            <th>中转信息</th>\r\n            <th>客人信息</th>\r\n            <th>抵达时间</th>\r\n            <th>班次</th>\r\n            <th>要求</th>\r\n            <th>操作</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody class="T-busCompleted-list">\r\n	    {{each unifyList as bus}}\r\n	    	{{each bus.busList as businfo }}\r\n	        	{{each bus.outRemarkList as buslist index}}\r\n	    	<tr data-id = "{{bus.unifyId}}">\r\n	    	{{if index == 0}}\r\n	    	<td class="h-touristGroupInfo" rowspan="{{bus.outRemarkList.length}}">\r\n	    	<p><span>{{businfo.busCompanyName}}</span> &nbsp;<span>{{businfo.licenseNumber}}</span></p>\r\n	    	</td>\r\n	    	{{/if}}\r\n	    	 <td >\r\n		        <span >{{if bus.shuttleType == 1}} 接团 {{else if bus.shuttleType == 2}} 送团{{/if}}</span>\r\n		         <input type="hidden" name="shuttleType" value="{{if buslist.shuttleType == 1}} 1 {{else if buslist.shuttleType == 2}} 2{{/if}}" >\r\n	        </td>\r\n	        <td class="h-touristGroupInfo">\r\n	            <p>中转单号：{{buslist.orderNumber}}</p>\r\n	            <p><span>&lt;{{buslist.lineProductName}}&gt;</span></p>\r\n	            <p><span>{{buslist.startTime}}</span><span>{{buslist.partnerAgencyName}}</span><span>外链销售：{{buslist.outOPUserName}}</span></p>\r\n	            <p>收客单号：{{buslist.tgOrderNumber}}</p>\r\n	        </td>\r\n	        <td>\r\n	            <p>{{buslist.contactMemberName}}</p>\r\n	            <p>{{buslist.adultCount}}大{{buslist.childCount}}小</p>\r\n	        </td>\r\n	        <td>{{buslist.arriveTime}}</td>\r\n			<td>{{buslist.shift}}</td>\r\n			<td>{{buslist.require}}</td>\r\n	    	{{if index == 0}}\r\n	        <td rowspan="{{bus.outRemarkList.length}}">\r\n	            <a class="cursor T-action T-message">通知</a>\r\n	            <a class="cursor T-plan-busyet T-action">\r\n	                <label class="padding-right20">|</label> 安排</a>\r\n	            <a class="cursor T-check-bus T-action">\r\n	                <label class="padding-right20">|</label>查看\r\n	        </td>\r\n	        {{/if}}\r\n	    </tr>\r\n	        {{/each}}\r\n	    	{{/each}}\r\n	    {{/each}}\r\n    </tbody>\r\n</table>\r\n<div class="row pageMode">\r\n    <div class="col-xs-6">\r\n        <small>共计 {{recordSize}} 条记录</small>\r\n    </div>\r\n    <div class="col-xs-6">\r\n        <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n        </div>\r\n    </div>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});