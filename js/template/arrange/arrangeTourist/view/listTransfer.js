/*TMODJS:{"debug":true,"version":121,"md5":"b192b5b435bb327154d0a5b8d89da62d"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeTourist/view/listTransfer", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, touristGroupList = $data.touristGroupList, $escape = ($data.group, 
            $data.$index, $utils.$escape), recordSize = $data.recordSize, $out = "";
            return $out += '<table class="table table-striped table-bordered table-hover globalAdd T-showHighLight table-fixed"> <colgroup> <col style="width:8%;"></col> <col style="width:20%;"></col> <col style="width:25%;"></col> <col style="width:95px"></col> <col style="width:95px"></col> <col style="width:80px;"></col> <col style="width:15%;"></col> <col style="width:10%;"></col> <col style="width:15%;"></col> <col style="width:10%;"></col> <col style="width:100px;"></col> <col style="width:80px;"></col> <col style="width:25%;"></col> <col style="width:100px;"></col> </colgroup> <thead> <tr class="bg-blur"> <th>选择</th> <th>来源</th> <th>线路产品</th> <th>线路类型</th> <th>应用范围</th> <th>天数</th> <th>出游日期</th> <th>联系人</th> <th>联系电话</th> <th>人数</th> <th>客源地</th> <th>年龄</th> <th>备注</th> <th>查看</th> </tr> </thead> <tbody class="T-arrageTransfer-list"> ', 
            $line = 37, $each(touristGroupList, function(group) {
                $out += " <tr data-value=", $line = 38, $out += $escape(group.id), $out += " data-entity-adultCount = ", 
                $line = 38, $out += $escape(group.adultCount), $out += " data-entity-childCount = ", 
                $line = 38, $out += $escape(group.childCount), $out += '> <td><label class="pos-rel"> <input type="checkbox" class="ace T-transferCheckBox T-cheked"> <span class="lbl"></span> </label></td> <td>', 
                $line = 40, null != group.partnerAgency && ($line = 40, $out += $escape(group.partnerAgency.travelAgencyName), 
                $line = 40), $out += "</span></td> ", $line = 41, group.lineProduct ? ($out += ' <td class="T-ctrl-tip" title="', 
                $line = 42, $out += $escape(group.lineProduct.name), $out += '"><span style="height: 35px">', 
                $line = 42, $out += $escape(group.lineProduct.name), $out += "</span></td> ", $line = 43) : ($out += " <td></td> ", 
                $line = 45), $out += " <td>", $line = 46, null != group.lineProduct && ($line = 46, 
                $out += $escape(group.lineProduct.type), $line = 46), $out += "</td> <td> ", $line = 48, 
                null != group.lineProduct && ($out += " ", $line = 49, 0 == group.lineProduct.customerType ? ($out += "散拼 ", 
                $line = 50) : 1 == group.lineProduct.customerType ? ($out += "团体 ", $line = 51) : 2 == group.lineProduct.customerType && ($out += "转客 ", 
                $line = 52), $out += " ", $line = 53), $out += " </td> <td>", $line = 55, null != group.lineProduct && ($line = 55, 
                $out += $escape(group.lineProduct.days), $line = 55), $out += "</td> <td>", $line = 56, 
                $out += $escape($helpers.dateFormat(group.startTime, "yyyy-MM-dd")), $out += "</td> ", 
                $line = 57, group.contactMember ? ($out += " <td>", $line = 58, $out += $escape(group.contactMember.name), 
                $out += "</td> <td>", $line = 59, $out += $escape(group.contactMember.mobileNumber), 
                $out += "</td> ", $line = 60) : ($out += " <td></td> <td></td> ", $line = 63), $out += " <td>", 
                $line = 64, $out += $escape(group.adultCount), $out += " 大 ", $line = 64, $out += $escape(group.childCount), 
                $out += "小</td> <td>", $line = 66, $out += $escape(group.areaData), $out += "</td> <td>", 
                $line = 67, $out += $escape(group.ageData), $out += '</td> <td class="T-ctrl-tip" title="', 
                $line = 68, $out += $escape(group.remark), $out += '"><span style="height: 35px">', 
                $line = 68, $out += $escape(group.remark), $out += '</span></td> <td><a class="cursor T-arrageTransfer-view T-action"> 查看 </a></td> </tr> ', 
                $line = 71;
            }), $out += ' </tbody> </table> <form class="form-horizontal" role="form" onsubmit="return false" style="margin-top:25px;"> <div class="form-group col-sm-12" style="text-align: center;"> <button class="btn btn-sm btn-success T-arrageTransfer-inner R-right" data-right="1130005"> <i class="ace-icon fa fa-user-plus"></i> 内转 </button> <button class="btn btn-sm btn-success T-arrageTransfer-out R-right" data-right="1130003"> <i class="ace-icon fa fa-user-plus"></i> 外转 </button> </div> </form> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 93, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<table class="table table-striped table-bordered table-hover globalAdd T-showHighLight table-fixed">\r\n     <colgroup>\r\n    	<col style="width:8%;"></col>\r\n    	<col style="width:20%;"></col>\r\n    	<col style="width:25%;"></col>\r\n    	<col style="width:95px"></col>\r\n    	<col style="width:95px"></col>\r\n    	<col style="width:80px;"></col>\r\n    	<col style="width:15%;"></col>\r\n    	<col style="width:10%;"></col>\r\n	 	<col style="width:15%;"></col>\r\n 	 	<col style="width:10%;"></col>\r\n 	 	<col style="width:100px;"></col>\r\n 	 	<col style="width:80px;"></col>\r\n 	 	<col style="width:25%;"></col>\r\n 	 	<col style="width:100px;"></col>\r\n    </colgroup>\r\n	<thead>\r\n		<tr class="bg-blur">\r\n			<th>选择</th>\r\n			<th>来源</th>\r\n			<th>线路产品</th>\r\n			<th>线路类型</th>\r\n			<th>应用范围</th>\r\n			<th>天数</th>\r\n			<th>出游日期</th>\r\n			<th>联系人</th>\r\n			<th>联系电话</th>\r\n			<th>人数</th>\r\n			<th>客源地</th>\r\n			<th>年龄</th>\r\n			<th>备注</th>\r\n			<th>查看</th>\r\n		</tr>\r\n	</thead>\r\n	<tbody class="T-arrageTransfer-list">\r\n		{{each touristGroupList as group}}\r\n			<tr data-value={{group.id}} data-entity-adultCount = {{group.adultCount}}  data-entity-childCount = {{group.childCount}}>\r\n			    <td><label class="pos-rel"> <input type="checkbox" class="ace T-transferCheckBox T-cheked"> <span class="lbl"></span> </label></td>\r\n				<td>{{if group.partnerAgency != null}}{{group.partnerAgency.travelAgencyName}}{{/if}}</span></td>\r\n				{{if !!group.lineProduct}} \r\n				<td class="T-ctrl-tip" title="{{group.lineProduct.name}}"><span style="height: 35px">{{group.lineProduct.name}}</span></td>\r\n				{{else}}\r\n				<td></td>\r\n				{{/if}}\r\n				<td>{{if group.lineProduct != null}}{{group.lineProduct.type}}{{/if}}</td>\r\n				<td>\r\n				{{if group.lineProduct != null}}\r\n					{{if group.lineProduct.customerType == 0}}散拼\r\n					    {{else if group.lineProduct.customerType == 1}}团体\r\n					    {{else if group.lineProduct.customerType == 2}}转客\r\n					{{/if}} \r\n				{{/if}}\r\n				</td>\r\n				<td>{{if group.lineProduct != null}}{{group.lineProduct.days}}{{/if}}</td>\r\n				<td>{{group.startTime | dateFormat: \'yyyy-MM-dd\' }}</td>\r\n				{{if !!group.contactMember}}\r\n				<td>{{group.contactMember.name}}</td>\r\n				<td>{{group.contactMember.mobileNumber}}</td>\r\n				{{else}}\r\n				<td></td>\r\n				<td></td>\r\n				{{/if}}\r\n				<td>{{group.adultCount}} 大 {{group.childCount}}小</td>\r\n					\r\n				<td>{{group.areaData}}</td>\r\n				<td>{{group.ageData}}</td>\r\n				<td class="T-ctrl-tip" title="{{group.remark}}"><span style="height: 35px">{{group.remark}}</span></td>\r\n				<td><a class="cursor T-arrageTransfer-view T-action"> 查看 </a></td>\r\n			</tr>\r\n		{{/each}}\r\n	</tbody>\r\n</table>\r\n\r\n\r\n<form class="form-horizontal" role="form" onsubmit="return false" style="margin-top:25px;">\r\n	<div class="form-group col-sm-12" style="text-align: center;"> \r\n		<button class="btn btn-sm btn-success T-arrageTransfer-inner R-right" data-right="1130005">\r\n			<i class="ace-icon fa fa-user-plus"></i>\r\n			内转\r\n		</button>\r\n		<button class="btn btn-sm btn-success T-arrageTransfer-out R-right" data-right="1130003">\r\n			<i class="ace-icon fa fa-user-plus"></i>\r\n			外转\r\n		</button>\r\n	</div>\r\n</form>\r\n\r\n\r\n\r\n<div class="row pageMode">\r\n	<div class="col-xs-6">\r\n		<small>共计 {{recordSize}} 条记录</small>\r\n	</div>\r\n	<div class="col-xs-6">\r\n		<div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n		</div>\r\n	</div>\r\n</div>\r\n\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});