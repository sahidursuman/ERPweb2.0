/*TMODJS:{"debug":true,"version":248,"md5":"b3982f2971b999adea7f434e81eff385"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeGroupTransfer/view/listTransfer", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, touristGroupList = $data.touristGroupList, $escape = ($data.group, 
            $data.$index, $utils.$escape), recordSize = $data.recordSize, $out = "";
            return $out += '<table class="table table-striped table-bordered table-hover globalAdd T-showHighLight"> <col style="width:4%;"></col> <col style="width:15%"></col> <col style="width:10%;"></col> <col style="width:5%;"></col> <col style="width:10%"></col> <col style="width:10%"></col> <col style="width:10%"></col> <col style="width:10%;"></col> <col style="width:10%;"></col> <col style="width:10%;"></col> <col style="width:10%;"></col> <col style="width:10%"></col> <col style="width:4%"></col> <col style="width:10%;"></col> <col style="width:10%;"></col> </colgroup> <thead> <tr class="bg-blur"> <th>选择</th> <th>收客单号</th> <th>线路类型</th> <th>天数</th> <th>出游日期</th> <th>联系人</th> <th>联系电话</th> <th>人数</th> <th>客源地</th> <th>年龄</th> <th>备注</th> <th style="width:150px;">查看</th> </tr> </thead> <tbody class="T-arrageTransfer-list"> ', 
            $line = 36, $each(touristGroupList, function(group) {
                $out += " <tr data-value=", $line = 37, $out += $escape(group.id), $out += " data-entity-adultCount = ", 
                $line = 37, $out += $escape(group.adultCount), $out += " data-entity-childCount = ", 
                $line = 37, $out += $escape(group.childCount), $out += '> <td><label class="pos-rel"> <input type="checkbox" class="ace T-transferCheckBox T-cheked"> <span class="lbl"></span> </label></td> <td> <p> <span>', 
                $line = 41, $out += $escape(group.orderNumber), $out += "</span> <span>", $line = 42, 
                null != group.lineProduct && ($out += " ", $line = 43, 0 == group.lineProduct.customerType ? ($out += "散客 ", 
                $line = 44) : 1 == group.lineProduct.customerType ? ($out += "团体 ", $line = 45) : 2 == group.lineProduct.customerType && ($out += "转客 ", 
                $line = 46), $out += " ", $line = 47), $out += "</span> </p> ", $line = 49, group.lineProduct ? ($out += ' <p class="T-ctrl-tip" title="', 
                $line = 50, $out += $escape(group.lineProduct.name), $out += '"><span style="height: 35px">', 
                $line = 50, $out += $escape(group.lineProduct.name), $out += "</span></p> ", $line = 51) : ($out += " <p>", 
                $line = 52, null != group.partnerAgency && ($line = 52, $out += $escape(group.partnerAgency.travelAgencyName), 
                $line = 52), $out += "</p> </td> ", $line = 54), $out += " <td>", $line = 55, null != group.lineProduct && ($line = 55, 
                $out += $escape(group.lineProduct.type), $line = 55), $out += '</td> <td class="F-float F-count">', 
                $line = 56, null != group.lineProduct && ($line = 56, $out += $escape(group.lineProduct.days), 
                $line = 56), $out += "</td> <td>", $line = 57, $out += $escape($helpers.dateFormat(group.startTime, "yyyy-MM-dd")), 
                $out += "</td> ", $line = 58, group.contactMember && ($out += " <td>", $line = 59, 
                $out += $escape(group.contactMember.name), $out += "</td> <td>", $line = 60, $out += $escape(group.contactMember.mobileNumber), 
                $out += "</td> ", $line = 61), $out += " <td>", $line = 62, $out += $escape(group.adultCount), 
                $out += " 大 ", $line = 62, $out += $escape(group.childCount), $out += "小</td> <td>", 
                $line = 63, $out += $escape(group.areaData), $out += "</td> <td>", $line = 64, $out += $escape(group.ageData), 
                $out += '</td> <td class="T-ctrl-tip" title="', $line = 65, $out += $escape(group.remark), 
                $out += '"><span style="height: 35px">', $line = 65, $out += $escape(group.remark), 
                $out += '</span></td> <td><a class="cursor T-arrageTransfer-view T-action"> 查看 </a></td> </tr> ', 
                $line = 68;
            }), $out += ' </tbody> </table> <form class="form-horizontal" role="form" onsubmit="return false" style="margin-top:25px;"> <div class="form-group col-sm-12" style="text-align: center;"> <button class="btn btn-sm btn-success T-arrageTransfer-inner R-right" data-right="1130005"> <i class="ace-icon fa fa-user-plus"></i> 内转 </button> <button class="btn btn-sm btn-success T-arrageTransfer-out R-right" data-right="1130003"> <i class="ace-icon fa fa-user-plus"></i> 外转 </button> </div> </form> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 90, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<table class="table table-striped table-bordered table-hover globalAdd T-showHighLight">\r\n   \r\n    	<col style="width:4%;"></col>\r\n    	<col style="width:15%"></col> \r\n    	<col style="width:10%;"></col>\r\n    	<col style="width:5%;"></col>\r\n    	<col style="width:10%"></col>\r\n    	<col style="width:10%"></col>\r\n    	<col style="width:10%"></col>\r\n    	<col style="width:10%;"></col>\r\n    	<col style="width:10%;"></col>\r\n	 	<col style="width:10%;"></col>\r\n 	 	<col style="width:10%;"></col>\r\n 	 	<col style="width:10%"></col>\r\n 	 	<col style="width:4%"></col>\r\n 	 	<col style="width:10%;"></col>\r\n 	 	<col style="width:10%;"></col>\r\n    </colgroup>\r\n	<thead>\r\n		<tr class="bg-blur">\r\n			<th>选择</th>\r\n			<th>收客单号</th>\r\n			<th>线路类型</th>\r\n			<th>天数</th>\r\n			<th>出游日期</th>\r\n			<th>联系人</th>\r\n			<th>联系电话</th>\r\n			<th>人数</th>\r\n			<th>客源地</th>\r\n			<th>年龄</th>\r\n			<th>备注</th>\r\n			<th style="width:150px;">查看</th>\r\n		</tr>\r\n	</thead>\r\n	<tbody class="T-arrageTransfer-list">\r\n		{{each touristGroupList as group}}\r\n			<tr data-value={{group.id}} data-entity-adultCount = {{group.adultCount}}  data-entity-childCount = {{group.childCount}}>\r\n			    <td><label class="pos-rel"> <input type="checkbox" class="ace T-transferCheckBox T-cheked"> <span class="lbl"></span> </label></td>\r\n			    <td>\r\n			    <p>\r\n			    <span>{{group.orderNumber}}</span>\r\n			    <span>{{if group.lineProduct != null}}\r\n					{{if group.lineProduct.customerType == 0}}散客\r\n					    {{else if group.lineProduct.customerType == 1}}团体\r\n					    {{else if group.lineProduct.customerType == 2}}转客\r\n					{{/if}} \r\n				{{/if}}</span>\r\n			    </p>\r\n				{{if !!group.lineProduct}} \r\n				<p class="T-ctrl-tip" title="{{group.lineProduct.name}}"><span style="height: 35px">{{group.lineProduct.name}}</span></p>\r\n				{{else}}\r\n				<p>{{if group.partnerAgency != null}}{{group.partnerAgency.travelAgencyName}}{{/if}}</p>\r\n			    </td>\r\n				{{/if}}\r\n				<td>{{if group.lineProduct != null}}{{group.lineProduct.type}}{{/if}}</td>\r\n				<td class="F-float F-count">{{if group.lineProduct != null}}{{group.lineProduct.days}}{{/if}}</td>\r\n				<td>{{group.startTime | dateFormat: \'yyyy-MM-dd\' }}</td>\r\n				{{if !!group.contactMember}}\r\n				<td>{{group.contactMember.name}}</td>\r\n				<td>{{group.contactMember.mobileNumber}}</td>\r\n				{{/if}}\r\n				<td>{{group.adultCount}} 大 {{group.childCount}}小</td>\r\n				<td>{{group.areaData}}</td>\r\n				<td>{{group.ageData}}</td>\r\n				<td class="T-ctrl-tip" title="{{group.remark}}"><span style="height: 35px">{{group.remark}}</span></td>\r\n				<td><a class="cursor T-arrageTransfer-view T-action"> 查看 </a></td>\r\n			</tr>\r\n		{{/each}}\r\n	</tbody>\r\n</table>\r\n\r\n\r\n<form class="form-horizontal" role="form" onsubmit="return false" style="margin-top:25px;">\r\n	<div class="form-group col-sm-12" style="text-align: center;"> \r\n		<button class="btn btn-sm btn-success T-arrageTransfer-inner R-right" data-right="1130005">\r\n			<i class="ace-icon fa fa-user-plus"></i>\r\n			内转\r\n		</button>\r\n		<button class="btn btn-sm btn-success T-arrageTransfer-out R-right" data-right="1130003">\r\n			<i class="ace-icon fa fa-user-plus"></i>\r\n			外转\r\n		</button>\r\n	</div>\r\n</form>\r\n\r\n\r\n\r\n<div class="row pageMode">\r\n	<div class="col-xs-6">\r\n		<small>共计 {{recordSize}} 条记录</small>\r\n	</div>\r\n	<div class="col-xs-6">\r\n		<div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n		</div>\r\n	</div>\r\n</div>\r\n\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});