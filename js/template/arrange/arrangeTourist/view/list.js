/*TMODJS:{"debug":true,"version":356,"md5":"46f8329dfa164d4990442c362c93df6c"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeTourist/view/list", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, touristGroupList = $data.touristGroupList, $escape = ($data.$index, 
            $utils.$escape), recordSize = $data.recordSize, $out = "";
            return $out += '<table class="table table-striped table-bordered table-hover globalAdd T-showHighLight table-fixed"> <colgroup> <col style="width:8%;"></col> <col style="width:20%;"></col> <col style="width:25%;"></col> <col style="width:95px"></col> <col style="width:95px"></col> <col style="width:80px;"></col> <col style="width:15%;"></col> <col style="width:10%;"></col> <col style="width:15%;"></col> <col style="width:10%;"></col> <col style="width:100px;"></col> <col style="width:80px;"></col> <col style="width:25%;"></col> <col style="width:100px;"></col> </colgroup> <thead> <tr class="bg-blur"> <th>选择</th> <th>客户</th> <th>线路产品</th> <th>线路类型</th> <th>针对客源</th> <th>天数</th> <th>出游日期</th> <th>联系人</th> <th>联系电话</th> <th>人数</th> <th>客源地</th> <th>年龄</th> <th>备注</th> <th>查看</th> </tr> </thead> <tbody class="T-arrageVisitor-list"> ', 
            $line = 37, $each(touristGroupList, function(touristGroupList) {
                $out += " <tr data-value=", $line = 38, $out += $escape(touristGroupList.id), $out += " data-entity-id =", 
                $line = 39, $out += $escape(touristGroupList.lineProduct.id), $out += " data-entity-partnerAgency=", 
                $line = 40, touristGroupList.partnerAgency && ($out += " ", $line = 40, $out += $escape(touristGroupList.partnerAgency.travelAgencyName), 
                $line = 40), $out += " data-entity-name=", $line = 41, $out += $escape(touristGroupList.lineProduct.name), 
                $out += " data-entity-type = ", $line = 41, $out += $escape(touristGroupList.lineProduct.type), 
                $out += " data-entity-days = ", $line = 42, $out += $escape(touristGroupList.lineProduct.days), 
                $out += " data-entity-startTime = ", $line = 43, $out += $escape(touristGroupList.startTime), 
                $out += " data-entity-memberCount=", $line = 44, $out += $escape(touristGroupList.adultCount + touristGroupList.childCount), 
                $out += ' class="tr-', $line = 44, $out += $escape(touristGroupList.lineProduct.id), 
                $out += "-", $line = 44, $out += $escape(touristGroupList.startTime), $out += '" data-entity-adultCount = ', 
                $line = 44, $out += $escape(touristGroupList.adultCount), $out += " data-entity-childCount = ", 
                $line = 44, $out += $escape(touristGroupList.childCount), $out += ' > <td><label class="pos-rel"> <input type="checkbox" class="ace T-touristGroupMergeCheckBox T-cheked"> <span class="lbl"></span> </label></td> <td>', 
                $line = 46, touristGroupList.partnerAgency && ($line = 46, $out += $escape(touristGroupList.partnerAgency.travelAgencyName), 
                $line = 46), $out += '</td> <td class="T-ctrl-tip" title="', $line = 47, $out += $escape(touristGroupList.lineProduct.name), 
                $out += '"><span style="height: 35px">', $line = 47, $out += $escape(touristGroupList.lineProduct.name), 
                $out += "</span></td> <td>", $line = 48, $out += $escape(touristGroupList.lineProduct.type), 
                $out += "</td> <td> ", $line = 50, 0 == touristGroupList.customerType ? ($out += "散拼 ", 
                $line = 51) : 1 == touristGroupList.customerType ? ($out += "团体 ", $line = 52) : 2 == touristGroupList.customerType && ($out += "转客 ", 
                $line = 53), $out += ' </td> <td class="F-float F-count">', $line = 55, $out += $escape(touristGroupList.lineProduct.days), 
                $out += "</td> <td>", $line = 56, $out += $escape($helpers.dateFormat(touristGroupList.startTime, "yyyy-MM-dd")), 
                $out += "</td> ", $line = 57, touristGroupList.contactMember ? ($out += " <td>", 
                $line = 58, $out += $escape(touristGroupList.contactMember.name), $out += "</td> <td>", 
                $line = 59, $out += $escape(touristGroupList.contactMember.mobileNumber), $out += "</td> ", 
                $line = 60) : ($out += " <td></td> <td></td> ", $line = 63), $out += ' <td class="F-float F-count">', 
                $line = 64, $out += $escape(touristGroupList.adultCount), $out += " 大 ", $line = 64, 
                $out += $escape(touristGroupList.childCount), $out += "小</td> <td>", $line = 66, 
                $out += $escape(touristGroupList.areaData), $out += "</td> <td>", $line = 67, $out += $escape(touristGroupList.ageData), 
                $out += '</td> <td class="T-ctrl-tip" title="', $line = 68, $out += $escape(touristGroupList.remark), 
                $out += '"><span style="height: 35px">', $line = 68, $out += $escape(touristGroupList.remark), 
                $out += '</span></td> <td><a class="cursor T-arrageVisitor-view T-action"> 查看 </a></td> </tr> ', 
                $line = 71;
            }), $out += ' </tbody> </table> <div class="row"> <div class="col-xs-12 T-arrangeTouristList"> </div> </div> <div class="col-xs-12 T-arrangeTouristMergeList"> <div> <button class="btn btn-sm btn-success T-start-touristGroup-merge R-right" data-right="1130004"> <i class="ace-icon fa fa-user-plus"></i> 开始并团 </button> </div> <div class="space-10"></div> <div class="list"> </div> </div> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 95, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<table class="table table-striped table-bordered table-hover globalAdd T-showHighLight table-fixed">\r\n    <colgroup>\r\n    	<col style="width:8%;"></col>\r\n    	<col style="width:20%;"></col>\r\n    	<col style="width:25%;"></col>\r\n    	<col style="width:95px"></col>\r\n    	<col style="width:95px"></col>\r\n    	<col style="width:80px;"></col>\r\n    	<col style="width:15%;"></col>\r\n    	<col style="width:10%;"></col>\r\n	 	<col style="width:15%;"></col>\r\n 	 	<col style="width:10%;"></col>\r\n 	 	<col style="width:100px;"></col>\r\n 	 	<col style="width:80px;"></col>\r\n 	 	<col style="width:25%;"></col>\r\n 	 	<col style="width:100px;"></col>\r\n    </colgroup>\r\n	<thead>\r\n		<tr class="bg-blur">\r\n			<th>选择</th>\r\n			<th>客户</th>\r\n			<th>线路产品</th>\r\n			<th>线路类型</th>\r\n			<th>针对客源</th>\r\n			<th>天数</th>\r\n			<th>出游日期</th>\r\n			<th>联系人</th>\r\n			<th>联系电话</th>\r\n			<th>人数</th>\r\n			<th>客源地</th>\r\n			<th>年龄</th>\r\n			<th>备注</th>\r\n			<th>查看</th>\r\n		</tr>\r\n	</thead>\r\n	<tbody class="T-arrageVisitor-list">\r\n		{{each touristGroupList as touristGroupList}}\r\n			<tr data-value={{touristGroupList.id}}\r\n			 data-entity-id ={{touristGroupList.lineProduct.id}}\r\n			 data-entity-partnerAgency={{if !!touristGroupList.partnerAgency}} {{touristGroupList.partnerAgency.travelAgencyName}}{{/if}}\r\n			 data-entity-name={{touristGroupList.lineProduct.name}} data-entity-type = {{touristGroupList.lineProduct.type}}  \r\n			 data-entity-days = {{touristGroupList.lineProduct.days}}  \r\n			 data-entity-startTime = {{touristGroupList.startTime}}\r\n			 data-entity-memberCount={{touristGroupList.adultCount +touristGroupList.childCount}} class="tr-{{touristGroupList.lineProduct.id}}-{{touristGroupList.startTime}}" data-entity-adultCount = {{touristGroupList.adultCount}}  data-entity-childCount = {{touristGroupList.childCount}} >\r\n			    <td><label class="pos-rel"> <input type="checkbox" class="ace T-touristGroupMergeCheckBox T-cheked"> <span class="lbl"></span> </label></td>\r\n				<td>{{if !!touristGroupList.partnerAgency}}{{touristGroupList.partnerAgency.travelAgencyName}}{{/if}}</td>\r\n				<td class="T-ctrl-tip" title="{{touristGroupList.lineProduct.name}}"><span style="height: 35px">{{touristGroupList.lineProduct.name}}</span></td>\r\n				<td>{{touristGroupList.lineProduct.type}}</td>\r\n				<td>\r\n					{{if touristGroupList.customerType == 0}}散拼\r\n					    {{else if touristGroupList.customerType == 1}}团体\r\n					    {{else if touristGroupList.customerType == 2}}转客\r\n					{{/if}} \r\n				</td>\r\n				<td class="F-float F-count">{{touristGroupList.lineProduct.days}}</td>\r\n				<td>{{touristGroupList.startTime | dateFormat: \'yyyy-MM-dd\' }}</td>\r\n				{{if !!touristGroupList.contactMember}}\r\n				<td>{{touristGroupList.contactMember.name}}</td>\r\n				<td>{{touristGroupList.contactMember.mobileNumber}}</td>\r\n				{{else}}\r\n				<td></td>\r\n				<td></td>\r\n				{{/if}}\r\n				<td class="F-float F-count">{{touristGroupList.adultCount}} 大 {{touristGroupList.childCount}}小</td>\r\n					\r\n				<td>{{touristGroupList.areaData}}</td>\r\n				<td>{{touristGroupList.ageData}}</td>\r\n				<td class="T-ctrl-tip" title="{{touristGroupList.remark}}"><span style="height: 35px">{{touristGroupList.remark}}</span></td>\r\n				<td><a class="cursor T-arrageVisitor-view T-action"> 查看 </a></td>\r\n			</tr>\r\n		{{/each}}\r\n	</tbody>\r\n</table>\r\n\r\n<div class="row">\r\n	<div class="col-xs-12 T-arrangeTouristList">\r\n	</div>\r\n</div>\r\n<div class="col-xs-12 	T-arrangeTouristMergeList">\r\n	<div>\r\n		<button class="btn btn-sm btn-success T-start-touristGroup-merge R-right" data-right="1130004">\r\n			<i class="ace-icon fa fa-user-plus"></i>\r\n			开始并团\r\n		</button>\r\n	</div>\r\n	<div class="space-10"></div>\r\n	<div class="list">\r\n\r\n	</div>\r\n</div>\r\n\r\n\r\n<div class="row pageMode">\r\n	<div class="col-xs-6">\r\n		<small>共计 {{recordSize}} 条记录</small>\r\n	</div>\r\n	<div class="col-xs-6">\r\n		<div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n		</div>\r\n	</div>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});