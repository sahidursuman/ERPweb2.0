/*TMODJS:{"debug":true,"version":121,"md5":"b491ed70f2ea23e6bc6bed0b022232e4"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeIndividual/view/list", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, touristGroupList = $data.touristGroupList, $escape = ($data.touristGroupL, 
            $data.$index, $utils.$escape), recordSize = $data.recordSize, $out = "";
            return $out += '<table class="table table-striped table-bordered table-hover globalAdd T-showHighLight table-fixed"> <colgroup> <col style="width:8%;"></col> <col style="width:30%"></col> <col style="width:10%;"></col> <col style="width:25%;"></col> <col style="width:10%;"></col> <col style="width:20%;"></col> <col style="width:25%;"></col> <col style="width:100px;"></col> <col style="width:80px;"></col> <col style="width:35%;"></col> <col style="width:100px;"></col> </colgroup> <thead> <tr class="bg-blur"> <th>选择</th> <th>收客单号</th> <th>天数</th> <th>出游日期</th> <th>联系人</th> <th>联系电话</th> <th>人数</th> <th>客源地</th> <th>年龄</th> <th>备注</th> <th>查看</th> </tr> </thead> <tbody class="T-arrageVisitor-list"> ', 
            $line = 31, $each(touristGroupList, function(touristGroupL) {
                $out += ' <tr data-value="', $line = 32, $out += $escape(touristGroupL.id), $out += '" data-entity-id="', 
                $line = 33, touristGroupL.lineProduct && ($line = 33, $out += $escape(touristGroupL.lineProduct.id), 
                $line = 33), $out += '" data-entity-partnerAgency="', $line = 34, touristGroupL.partnerAgency && ($out += " ", 
                $line = 34, $out += $escape(touristGroupL.partnerAgency.travelAgencyName), $line = 34), 
                $out += '" data-entity-name="', $line = 35, touristGroupL.lineProduct && ($line = 35, 
                $out += $escape(touristGroupL.lineProduct.name), $line = 35), $out += '" data-entity-type="', 
                $line = 36, touristGroupL.lineProduct && ($line = 36, $out += $escape(touristGroupL.lineProduct.type), 
                $line = 36), $out += '" data-entity-days="', $line = 37, touristGroupL.lineProduct && ($line = 37, 
                $out += $escape(touristGroupL.lineProduct.days), $line = 37), $out += '" data-entity-startTime="', 
                $line = 38, $out += $escape(touristGroupL.startTime), $out += '" data-entity-memberCount="', 
                $line = 39, $out += $escape(touristGroupL.adultCount + touristGroupL.childCount), 
                $out += '" class="tr-', $line = 40, touristGroupL.lineProduct && ($line = 40, $out += $escape(touristGroupL.lineProduct.id), 
                $line = 40), $out += "-", $line = 40, $out += $escape(touristGroupL.startTime), 
                $out += '" data-entity-adultCount = "', $line = 41, $out += $escape(touristGroupL.adultCount), 
                $out += '" data-entity-childCount = "', $line = 42, $out += $escape(touristGroupL.childCount), 
                $out += '" > <td style="vertical-align:middle"><label class="pos-rel"> <input type="checkbox" class="ace T-touristGroupMergeCheckBox T-cheked"> <span class="lbl"></span> </label></td> <td class="h-touristGroupInfo"> <p class="h-orderNumber">', 
                $line = 45, $out += $escape(touristGroupL.orderNumber), $out += '</p> <p class="h-orderNumber">', 
                $line = 46, touristGroupL.partnerAgency && ($line = 46, $out += $escape(touristGroupL.partnerAgency.travelAgencyName), 
                $line = 46), $out += '</p> <p class="h-lineName"title="', $line = 47, touristGroupL.lineProduct && ($line = 47, 
                $out += $escape(touristGroupL.lineProduct.name), $line = 47), $out += '">', $line = 47, 
                touristGroupL.lineProduct && ($line = 47, $out += $escape(touristGroupL.lineProduct.name), 
                $line = 47), $out += '</p> <p class="h-startTime">', $line = 48, touristGroupL.lineProduct && ($line = 48, 
                $out += $escape(touristGroupL.lineProduct.type), $line = 48), $out += ' </p> <p class="h-memberName"> ', 
                $line = 50, 0 == touristGroupL.customerType ? ($out += "散拼 ", $line = 51) : 1 == touristGroupL.customerType ? ($out += "团体 ", 
                $line = 52) : 2 == touristGroupL.customerType && ($out += "转客 ", $line = 53), $out += ' </p> </td> <td class="F-float F-count" style="vertical-align:middle">', 
                $line = 56, touristGroupL.lineProduct && ($line = 56, $out += $escape(touristGroupL.lineProduct.days), 
                $line = 56), $out += '</td> <td style="vertical-align:middle">', $line = 57, $out += $escape($helpers.dateFormat(touristGroupL.startTime, "yyyy-MM-dd")), 
                $out += "</td> ", $line = 58, touristGroupL.contactMember ? ($out += ' <td style="vertical-align:middle">', 
                $line = 59, $out += $escape(touristGroupL.contactMember.name), $out += '</td> <td style="vertical-align:middle">', 
                $line = 60, $out += $escape(touristGroupL.contactMember.mobileNumber), $out += "</td> ", 
                $line = 61) : ($out += " <td></td> <td></td> ", $line = 64), $out += ' <td class="F-float F-count" style="vertical-align:middle">', 
                $line = 65, $out += $escape(touristGroupL.adultCount), $out += " 大 ", $line = 65, 
                $out += $escape(touristGroupL.childCount), $out += '小</td> <td style="vertical-align:middle">', 
                $line = 67, $out += $escape(touristGroupL.areaData), $out += '</td> <td style="vertical-align:middle">', 
                $line = 68, $out += $escape(touristGroupL.ageData), $out += '</td> <td class="T-ctrl-tip" title="', 
                $line = 69, $out += $escape(touristGroupL.remark), $out += '" style="vertical-align:middle"><span style="height: 35px">', 
                $line = 69, $out += $escape(touristGroupL.remark), $out += '</span></td> <td style="vertical-align:middle"><a class="cursor T-arrageVisitor-view T-action"> 查看 </a></td> </tr> ', 
                $line = 72;
            }), $out += ' </tbody> </table> <div class="row"> <div class="col-xs-12 T-arrangeTouristList"> </div> </div> <div class="col-xs-12 T-arrangeTouristMergeList"> <div> <button class="btn btn-sm btn-success T-start-touristGroup-merge R-right" data-right="1130004"> <i class="ace-icon fa fa-user-plus"></i> 开始并团 </button> </div> <div class="space-10"></div> <div class="list"> </div> </div> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 96, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<table class="table table-striped table-bordered table-hover globalAdd T-showHighLight table-fixed">\r\n    <colgroup>\r\n    	<col style="width:8%;"></col>\r\n    	<col style="width:30%"></col>\r\n    	<col style="width:10%;"></col>\r\n    	<col style="width:25%;"></col>\r\n    	<col style="width:10%;"></col>\r\n	 	<col style="width:20%;"></col>\r\n 	 	<col style="width:25%;"></col>\r\n 	 	<col style="width:100px;"></col>\r\n 	 	<col style="width:80px;"></col>\r\n 	 	<col style="width:35%;"></col>\r\n 	 	<col style="width:100px;"></col>\r\n    </colgroup>\r\n	<thead>\r\n		<tr class="bg-blur">\r\n			<th>选择</th>\r\n			<th>收客单号</th>\r\n			<th>天数</th>\r\n			<th>出游日期</th>\r\n			<th>联系人</th>\r\n			<th>联系电话</th>\r\n			<th>人数</th>\r\n			<th>客源地</th>\r\n			<th>年龄</th>\r\n			<th>备注</th>\r\n			<th>查看</th>\r\n		</tr>\r\n	</thead>\r\n	<tbody class="T-arrageVisitor-list">\r\n		{{each touristGroupList as touristGroupL}}\r\n			<tr data-value="{{touristGroupL.id}}"\r\n			 data-entity-id="{{if !!touristGroupL.lineProduct}}{{touristGroupL.lineProduct.id}}{{/if}}"\r\n			 data-entity-partnerAgency="{{if !!touristGroupL.partnerAgency}} {{touristGroupL.partnerAgency.travelAgencyName}}{{/if}}"\r\n			 data-entity-name="{{if !!touristGroupL.lineProduct}}{{touristGroupL.lineProduct.name}}{{/if}}" \r\n			 data-entity-type="{{if !!touristGroupL.lineProduct}}{{touristGroupL.lineProduct.type}}{{/if}}"\r\n			 data-entity-days="{{if !!touristGroupL.lineProduct}}{{touristGroupL.lineProduct.days}}{{/if}}"\r\n			 data-entity-startTime="{{touristGroupL.startTime}}"\r\n			 data-entity-memberCount="{{touristGroupL.adultCount +touristGroupL.childCount}}"\r\n			 class="tr-{{if !!touristGroupL.lineProduct}}{{touristGroupL.lineProduct.id}}{{/if}}-{{touristGroupL.startTime}}"\r\n			 data-entity-adultCount = "{{touristGroupL.adultCount}}"\r\n			 data-entity-childCount = "{{touristGroupL.childCount}}" >\r\n			    <td style="vertical-align:middle"><label class="pos-rel"> <input type="checkbox" class="ace T-touristGroupMergeCheckBox T-cheked"> <span class="lbl"></span> </label></td>\r\n				 <td class="h-touristGroupInfo">\r\n				 	<p class="h-orderNumber">{{touristGroupL.orderNumber}}</p>\r\n                    <p class="h-orderNumber">{{if !!touristGroupL.partnerAgency}}{{touristGroupL.partnerAgency.travelAgencyName}}{{/if}}</p>\r\n                    <p class="h-lineName"title="{{if !!touristGroupL.lineProduct}}{{touristGroupL.lineProduct.name}}{{/if}}">{{if !!touristGroupL.lineProduct}}{{touristGroupL.lineProduct.name}}{{/if}}</p>\r\n                    <p class="h-startTime">{{if !!touristGroupL.lineProduct}}{{touristGroupL.lineProduct.type}}{{/if}} </p>\r\n                    <p class="h-memberName">\r\n                    	{{if touristGroupL.customerType == 0}}散拼\r\n					    {{else if touristGroupL.customerType == 1}}团体\r\n					    {{else if touristGroupL.customerType == 2}}转客\r\n						{{/if}} \r\n					</p>\r\n                </td>\r\n				<td class="F-float F-count" style="vertical-align:middle">{{if !!touristGroupL.lineProduct}}{{touristGroupL.lineProduct.days}}{{/if}}</td>\r\n				<td style="vertical-align:middle">{{touristGroupL.startTime | dateFormat: \'yyyy-MM-dd\' }}</td>\r\n				{{if !!touristGroupL.contactMember}}\r\n				<td style="vertical-align:middle">{{touristGroupL.contactMember.name}}</td>\r\n				<td style="vertical-align:middle">{{touristGroupL.contactMember.mobileNumber}}</td>\r\n				{{else}}\r\n				<td></td>\r\n				<td></td>\r\n				{{/if}}\r\n				<td class="F-float F-count" style="vertical-align:middle">{{touristGroupL.adultCount}} 大 {{touristGroupL.childCount}}小</td>\r\n					\r\n				<td style="vertical-align:middle">{{touristGroupL.areaData}}</td>\r\n				<td style="vertical-align:middle">{{touristGroupL.ageData}}</td>\r\n				<td class="T-ctrl-tip" title="{{touristGroupL.remark}}" style="vertical-align:middle"><span style="height: 35px">{{touristGroupL.remark}}</span></td>\r\n				<td style="vertical-align:middle"><a class="cursor T-arrageVisitor-view T-action"> 查看 </a></td>\r\n			</tr>\r\n		{{/each}}\r\n	</tbody>\r\n</table>\r\n\r\n<div class="row">\r\n	<div class="col-xs-12 T-arrangeTouristList">\r\n	</div>\r\n</div>\r\n<div class="col-xs-12 	T-arrangeTouristMergeList">\r\n	<div>\r\n		<button class="btn btn-sm btn-success T-start-touristGroup-merge R-right" data-right="1130004">\r\n			<i class="ace-icon fa fa-user-plus"></i>\r\n			开始并团\r\n		</button>\r\n	</div>\r\n	<div class="space-10"></div>\r\n	<div class="list">\r\n\r\n	</div>\r\n</div>\r\n\r\n\r\n<div class="row pageMode">\r\n	<div class="col-xs-6">\r\n		<small>共计 {{recordSize}} 条记录</small>\r\n	</div>\r\n	<div class="col-xs-6">\r\n		<div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n		</div>\r\n	</div>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});