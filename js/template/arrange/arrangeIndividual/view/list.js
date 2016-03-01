/*TMODJS:{"debug":true,"version":103,"md5":"f45fbed354e6f2faca1bf326bdf1eb61"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeIndividual/view/list", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, touristGroupList = $data.touristGroupList, $escape = ($data.touristGroupL, 
            $data.$index, $utils.$escape), recordSize = $data.recordSize, $out = "";
            return $out += '<table class="table table-striped table-bordered table-hover globalAdd T-showHighLight table-fixed"> <colgroup> <col style="width:8%;"></col> <col style="width:175px"></col> <col style="width:30%;"></col> <col style="width:25%;"></col> <col style="width:95px"></col> <col style="width:95px"></col> <col style="width:80px;"></col> <col style="width:85px;"></col> <col style="width:10%;"></col> <col style="width:20%;"></col> <col style="width:25%;"></col> <col style="width:100px;"></col> <col style="width:80px;"></col> <col style="width:25%;"></col> <col style="width:100px;"></col> </colgroup> <thead> <tr class="bg-blur"> <th>选择</th> <th>收客单号</th> <th>客户</th> <th>线路产品</th> <th>线路类型</th> <th>针对客源</th> <th>天数</th> <th>出游日期</th> <th>联系人</th> <th>联系电话</th> <th>人数</th> <th>客源地</th> <th>年龄</th> <th>备注</th> <th>查看</th> </tr> </thead> <tbody class="T-arrageVisitor-list"> ', 
            $line = 39, $each(touristGroupList, function(touristGroupL) {
                $out += ' <tr data-value="', $line = 40, $out += $escape(touristGroupL.id), $out += '" data-entity-id="', 
                $line = 41, touristGroupL.lineProduct && ($line = 41, $out += $escape(touristGroupL.lineProduct.id), 
                $line = 41), $out += '" data-entity-partnerAgency="', $line = 42, touristGroupL.partnerAgency && ($out += " ", 
                $line = 42, $out += $escape(touristGroupL.partnerAgency.travelAgencyName), $line = 42), 
                $out += '" data-entity-name="', $line = 43, touristGroupL.lineProduct && ($line = 43, 
                $out += $escape(touristGroupL.lineProduct.name), $line = 43), $out += '" data-entity-type="', 
                $line = 44, touristGroupL.lineProduct && ($line = 44, $out += $escape(touristGroupL.lineProduct.type), 
                $line = 44), $out += '" data-entity-days="', $line = 45, touristGroupL.lineProduct && ($line = 45, 
                $out += $escape(touristGroupL.lineProduct.days), $line = 45), $out += '" data-entity-startTime="', 
                $line = 46, $out += $escape(touristGroupL.startTime), $out += '" data-entity-memberCount="', 
                $line = 47, $out += $escape(touristGroupL.adultCount + touristGroupL.childCount), 
                $out += '" class="tr-', $line = 48, touristGroupL.lineProduct && ($line = 48, $out += $escape(touristGroupL.lineProduct.id), 
                $line = 48), $out += "-", $line = 48, $out += $escape(touristGroupL.startTime), 
                $out += '" data-entity-adultCount = "', $line = 49, $out += $escape(touristGroupL.adultCount), 
                $out += '" data-entity-childCount = "', $line = 50, $out += $escape(touristGroupL.childCount), 
                $out += '" > <td><label class="pos-rel"> <input type="checkbox" class="ace T-touristGroupMergeCheckBox T-cheked"> <span class="lbl"></span> </label></td> <td>', 
                $line = 52, $out += $escape(touristGroupL.orderNumber), $out += "</td> <td>", $line = 53, 
                touristGroupL.partnerAgency && ($line = 53, $out += $escape(touristGroupL.partnerAgency.travelAgencyName), 
                $line = 53), $out += '</td> <td class="T-ctrl-tip" title="', $line = 54, touristGroupL.lineProduct && ($line = 54, 
                $out += $escape(touristGroupL.lineProduct.name), $line = 54), $out += '"><span style="height: 35px">', 
                $line = 54, touristGroupL.lineProduct && ($line = 54, $out += $escape(touristGroupL.lineProduct.name), 
                $line = 54), $out += "</span></td> <td>", $line = 55, touristGroupL.lineProduct && ($line = 55, 
                $out += $escape(touristGroupL.lineProduct.type), $line = 55), $out += "</td> <td> ", 
                $line = 57, 0 == touristGroupL.customerType ? ($out += "散拼 ", $line = 58) : 1 == touristGroupL.customerType ? ($out += "团体 ", 
                $line = 59) : 2 == touristGroupL.customerType && ($out += "转客 ", $line = 60), $out += ' </td> <td class="F-float F-count">', 
                $line = 62, touristGroupL.lineProduct && ($line = 62, $out += $escape(touristGroupL.lineProduct.days), 
                $line = 62), $out += "</td> <td>", $line = 63, $out += $escape($helpers.dateFormat(touristGroupL.startTime, "yyyy-MM-dd")), 
                $out += "</td> ", $line = 64, touristGroupL.contactMember ? ($out += " <td>", $line = 65, 
                $out += $escape(touristGroupL.contactMember.name), $out += "</td> <td>", $line = 66, 
                $out += $escape(touristGroupL.contactMember.mobileNumber), $out += "</td> ", $line = 67) : ($out += " <td></td> <td></td> ", 
                $line = 70), $out += ' <td class="F-float F-count">', $line = 71, $out += $escape(touristGroupL.adultCount), 
                $out += " 大 ", $line = 71, $out += $escape(touristGroupL.childCount), $out += "小</td> <td>", 
                $line = 73, $out += $escape(touristGroupL.areaData), $out += "</td> <td>", $line = 74, 
                $out += $escape(touristGroupL.ageData), $out += '</td> <td class="T-ctrl-tip" title="', 
                $line = 75, $out += $escape(touristGroupL.remark), $out += '"><span style="height: 35px">', 
                $line = 75, $out += $escape(touristGroupL.remark), $out += '</span></td> <td><a class="cursor T-arrageVisitor-view T-action"> 查看 </a></td> </tr> ', 
                $line = 78;
            }), $out += ' </tbody> </table> <div class="row"> <div class="col-xs-12 T-arrangeTouristList"> </div> </div> <div class="col-xs-12 T-arrangeTouristMergeList"> <div> <button class="btn btn-sm btn-success T-start-touristGroup-merge R-right" data-right="1130004"> <i class="ace-icon fa fa-user-plus"></i> 开始并团 </button> </div> <div class="space-10"></div> <div class="list"> </div> </div> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 102, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<table class="table table-striped table-bordered table-hover globalAdd T-showHighLight table-fixed">\r\n    <colgroup>\r\n    	<col style="width:8%;"></col>\r\n    	<col style="width:175px"></col>\r\n    	<col style="width:30%;"></col>\r\n    	<col style="width:25%;"></col>\r\n    	<col style="width:95px"></col>\r\n    	<col style="width:95px"></col>\r\n    	<col style="width:80px;"></col>\r\n    	<col style="width:85px;"></col>\r\n    	<col style="width:10%;"></col>\r\n	 	<col style="width:20%;"></col>\r\n 	 	<col style="width:25%;"></col>\r\n 	 	<col style="width:100px;"></col>\r\n 	 	<col style="width:80px;"></col>\r\n 	 	<col style="width:25%;"></col>\r\n 	 	<col style="width:100px;"></col>\r\n    </colgroup>\r\n	<thead>\r\n		<tr class="bg-blur">\r\n			<th>选择</th>\r\n			<th>收客单号</th>\r\n			<th>客户</th>\r\n			<th>线路产品</th>\r\n			<th>线路类型</th>\r\n			<th>针对客源</th>\r\n			<th>天数</th>\r\n			<th>出游日期</th>\r\n			<th>联系人</th>\r\n			<th>联系电话</th>\r\n			<th>人数</th>\r\n			<th>客源地</th>\r\n			<th>年龄</th>\r\n			<th>备注</th>\r\n			<th>查看</th>\r\n		</tr>\r\n	</thead>\r\n	<tbody class="T-arrageVisitor-list">\r\n		{{each touristGroupList as touristGroupL}}\r\n			<tr data-value="{{touristGroupL.id}}"\r\n			 data-entity-id="{{if !!touristGroupL.lineProduct}}{{touristGroupL.lineProduct.id}}{{/if}}"\r\n			 data-entity-partnerAgency="{{if !!touristGroupL.partnerAgency}} {{touristGroupL.partnerAgency.travelAgencyName}}{{/if}}"\r\n			 data-entity-name="{{if !!touristGroupL.lineProduct}}{{touristGroupL.lineProduct.name}}{{/if}}" \r\n			 data-entity-type="{{if !!touristGroupL.lineProduct}}{{touristGroupL.lineProduct.type}}{{/if}}"\r\n			 data-entity-days="{{if !!touristGroupL.lineProduct}}{{touristGroupL.lineProduct.days}}{{/if}}"\r\n			 data-entity-startTime="{{touristGroupL.startTime}}"\r\n			 data-entity-memberCount="{{touristGroupL.adultCount +touristGroupL.childCount}}"\r\n			 class="tr-{{if !!touristGroupL.lineProduct}}{{touristGroupL.lineProduct.id}}{{/if}}-{{touristGroupL.startTime}}"\r\n			 data-entity-adultCount = "{{touristGroupL.adultCount}}"\r\n			 data-entity-childCount = "{{touristGroupL.childCount}}" >\r\n			    <td><label class="pos-rel"> <input type="checkbox" class="ace T-touristGroupMergeCheckBox T-cheked"> <span class="lbl"></span> </label></td>\r\n			    <td>{{touristGroupL.orderNumber}}</td>\r\n				<td>{{if !!touristGroupL.partnerAgency}}{{touristGroupL.partnerAgency.travelAgencyName}}{{/if}}</td>\r\n				<td class="T-ctrl-tip" title="{{if !!touristGroupL.lineProduct}}{{touristGroupL.lineProduct.name}}{{/if}}"><span style="height: 35px">{{if !!touristGroupL.lineProduct}}{{touristGroupL.lineProduct.name}}{{/if}}</span></td>\r\n				<td>{{if !!touristGroupL.lineProduct}}{{touristGroupL.lineProduct.type}}{{/if}}</td>\r\n				<td>\r\n					{{if touristGroupL.customerType == 0}}散拼\r\n					    {{else if touristGroupL.customerType == 1}}团体\r\n					    {{else if touristGroupL.customerType == 2}}转客\r\n					{{/if}} \r\n				</td>\r\n				<td class="F-float F-count">{{if !!touristGroupL.lineProduct}}{{touristGroupL.lineProduct.days}}{{/if}}</td>\r\n				<td>{{touristGroupL.startTime | dateFormat: \'yyyy-MM-dd\' }}</td>\r\n				{{if !!touristGroupL.contactMember}}\r\n				<td>{{touristGroupL.contactMember.name}}</td>\r\n				<td>{{touristGroupL.contactMember.mobileNumber}}</td>\r\n				{{else}}\r\n				<td></td>\r\n				<td></td>\r\n				{{/if}}\r\n				<td class="F-float F-count">{{touristGroupL.adultCount}} 大 {{touristGroupL.childCount}}小</td>\r\n					\r\n				<td>{{touristGroupL.areaData}}</td>\r\n				<td>{{touristGroupL.ageData}}</td>\r\n				<td class="T-ctrl-tip" title="{{touristGroupL.remark}}"><span style="height: 35px">{{touristGroupL.remark}}</span></td>\r\n				<td><a class="cursor T-arrageVisitor-view T-action"> 查看 </a></td>\r\n			</tr>\r\n		{{/each}}\r\n	</tbody>\r\n</table>\r\n\r\n<div class="row">\r\n	<div class="col-xs-12 T-arrangeTouristList">\r\n	</div>\r\n</div>\r\n<div class="col-xs-12 	T-arrangeTouristMergeList">\r\n	<div>\r\n		<button class="btn btn-sm btn-success T-start-touristGroup-merge R-right" data-right="1130004">\r\n			<i class="ace-icon fa fa-user-plus"></i>\r\n			开始并团\r\n		</button>\r\n	</div>\r\n	<div class="space-10"></div>\r\n	<div class="list">\r\n\r\n	</div>\r\n</div>\r\n\r\n\r\n<div class="row pageMode">\r\n	<div class="col-xs-6">\r\n		<small>共计 {{recordSize}} 条记录</small>\r\n	</div>\r\n	<div class="col-xs-6">\r\n		<div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n		</div>\r\n	</div>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});