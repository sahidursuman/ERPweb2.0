/*TMODJS:{"debug":true,"version":67,"md5":"afea263b1db62eae4e009eb9302abb17"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeGroupTransfer/view/listTransfer", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, touristGroupList = $data.touristGroupList, $escape = ($data.group, 
            $data.$index, $utils.$escape), recordSize = $data.recordSize, $out = "";
            return $out += '<table class="table table-striped table-bordered table-hover globalAdd T-showHighLight"> <colgroup> <col style="width: 45px;"> <col style="width: 300px;"> <col> <col> <col> <col> <col> <col> <col> <col> <col> <col> </colgroup> <thead> <tr class="bg-blur T-tr-fixed"> <th>选择</th> <th>收客信息</th> <th>天数</th> <th>出游日期</th> <th>联系人</th> <th>联系电话</th> <th>人数</th> <th>客源地</th> <th>年龄</th> <th>备注</th> <th>操作</th> </tr> </thead> <tbody class="T-arrageTransfer-list"> ', 
            $line = 32, $each(touristGroupList, function(group) {
                $out += " <tr data-value=", $line = 33, $out += $escape(group.id), $out += " data-entity-adultCount = ", 
                $line = 33, $out += $escape(group.adultCount), $out += " data-entity-childCount = ", 
                $line = 33, $out += $escape(group.childCount), $out += '> <td><label class="pos-rel"> <input type="checkbox" class="ace T-transferCheckBox T-cheked"> <span class="lbl"></span> </label></td> <td class="h-touristGroupInfo"> <p> ', 
                $line = 37, group.orderNumber && ($out += '<span class="h-orderNumber">收客单号：', $line = 37, 
                $out += $escape(group.orderNumber), $out += "</span>", $line = 37), $out += ' <span class="h-agencyName">', 
                $line = 38, null != group.lineProduct && ($out += " ", $line = 39, 0 == group.lineProduct.customerType ? ($out += "散客 ", 
                $line = 40) : 1 == group.lineProduct.customerType ? ($out += "团体 ", $line = 41) : 2 == group.lineProduct.customerType && ($out += "转客 ", 
                $line = 42), $out += " ", $line = 43), $out += "</span> </p> ", $line = 45, group.lineProduct && ($out += ' <p class="T-ctrl-tip h-lineName" title="', 
                $line = 46, $out += $escape(group.lineProduct.name), $out += '"> <span>', $line = 47, 
                $out += $escape(group.lineProduct.name), $out += "</span> <span>(", $line = 48, 
                $out += $escape(group.lineProduct.type), $out += ")</span> </p> ", $line = 50), 
                $out += " <p>", $line = 51, null != group.partnerAgency && ($line = 51, $out += $escape(group.partnerAgency.travelAgencyName), 
                $line = 51), $out += '</p> </td> <td class="F-float F-count">', $line = 53, null != group.lineProduct && ($line = 53, 
                $out += $escape(group.lineProduct.days), $line = 53), $out += "</td> <td>", $line = 54, 
                $out += $escape($helpers.dateFormat(group.startTime, "yyyy-MM-dd")), $out += "</td> ", 
                $line = 55, group.contactMember && ($out += " <td>", $line = 56, $out += $escape(group.contactMember.name), 
                $out += "</td> <td>", $line = 57, $out += $escape(group.contactMember.mobileNumber), 
                $out += "</td> ", $line = 58), $out += " <td>", $line = 59, $out += $escape(group.adultCount), 
                $out += " 大 ", $line = 59, $out += $escape(group.childCount), $out += "小</td> <td>", 
                $line = 60, $out += $escape(group.areaData), $out += "</td> <td>", $line = 61, $out += $escape(group.ageData), 
                $out += '</td> <td class="T-ctrl-tip" title="', $line = 62, $out += $escape(group.remark), 
                $out += '"><span style="height: 35px">', $line = 62, $out += $escape(group.remark), 
                $out += '</span></td> <td><a class="cursor T-arrageTransfer-view T-action"> 查看 </a></td> </tr> ', 
                $line = 65;
            }), $out += ' </tbody> </table> <div class="text-center clearfix"> <label class="pull-left control-label no-padding-right" style="color:#D2691E; ">已选人数 <span class="T-chosenAdultAndChildCount" style="color:#D2691E;">大人 0 小孩 0 </span></label> <button class="btn btn-sm btn-success T-arrageTransfer-inner R-right" data-right="1130005"> <i class="ace-icon fa fa-user-plus"></i> 内转 </button> <button class="btn btn-sm btn-primary T-arrageTransfer-out R-right" data-right="1130003"> <i class="ace-icon fa fa-user-plus"></i> 外转 </button> </div> <div class="row pageMode"> <div class="col-xs-5"> <small>共计 ', 
            $line = 82, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-7"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<table class="table table-striped table-bordered table-hover globalAdd T-showHighLight">\r\n	<colgroup>\r\n		<col style="width: 45px;">\r\n		<col style="width: 300px;">\r\n		<col>\r\n		<col>\r\n		<col>\r\n		<col>\r\n		<col>\r\n		<col>\r\n		<col>\r\n		<col>\r\n		<col>\r\n		<col>\r\n	</colgroup>\r\n	<thead>\r\n		<tr class="bg-blur T-tr-fixed">\r\n			<th>选择</th>\r\n			<th>收客信息</th>\r\n			<th>天数</th>\r\n			<th>出游日期</th>\r\n			<th>联系人</th>\r\n			<th>联系电话</th>\r\n			<th>人数</th>\r\n			<th>客源地</th>\r\n			<th>年龄</th>\r\n			<th>备注</th>\r\n			<th>操作</th>\r\n		</tr>\r\n	</thead>\r\n	<tbody class="T-arrageTransfer-list">\r\n		{{each touristGroupList as group}}\r\n			<tr data-value={{group.id}} data-entity-adultCount = {{group.adultCount}}  data-entity-childCount = {{group.childCount}}>\r\n			    <td><label class="pos-rel"> <input type="checkbox" class="ace T-transferCheckBox T-cheked"> <span class="lbl"></span> </label></td>\r\n			    <td class="h-touristGroupInfo">\r\n				    <p>\r\n				    {{if group.orderNumber}}<span class="h-orderNumber">收客单号：{{group.orderNumber}}</span>{{/if}}\r\n				    <span class="h-agencyName">{{if group.lineProduct != null}}\r\n						{{if group.lineProduct.customerType == 0}}散客\r\n						    {{else if group.lineProduct.customerType == 1}}团体\r\n						    {{else if group.lineProduct.customerType == 2}}转客\r\n						{{/if}} \r\n					{{/if}}</span>\r\n				    </p>\r\n					{{if !!group.lineProduct}} \r\n						<p class="T-ctrl-tip h-lineName" title="{{group.lineProduct.name}}">\r\n							<span>{{group.lineProduct.name}}</span>\r\n							<span>({{group.lineProduct.type}})</span>\r\n						</p>\r\n					{{/if}}\r\n					<p>{{if group.partnerAgency != null}}{{group.partnerAgency.travelAgencyName}}{{/if}}</p>\r\n			    </td>\r\n				<td class="F-float F-count">{{if group.lineProduct != null}}{{group.lineProduct.days}}{{/if}}</td>\r\n				<td>{{group.startTime | dateFormat: \'yyyy-MM-dd\' }}</td>\r\n				{{if !!group.contactMember}}\r\n				<td>{{group.contactMember.name}}</td>\r\n				<td>{{group.contactMember.mobileNumber}}</td>\r\n				{{/if}}\r\n				<td>{{group.adultCount}} 大 {{group.childCount}}小</td>\r\n				<td>{{group.areaData}}</td>\r\n				<td>{{group.ageData}}</td>\r\n				<td class="T-ctrl-tip" title="{{group.remark}}"><span style="height: 35px">{{group.remark}}</span></td>\r\n				<td><a class="cursor T-arrageTransfer-view T-action"> 查看 </a></td>\r\n			</tr>\r\n		{{/each}}\r\n	</tbody>\r\n</table>\r\n<div class="text-center clearfix"> \r\n 	<label class="pull-left control-label no-padding-right" style="color:#D2691E; ">已选人数 <span class="T-chosenAdultAndChildCount" style="color:#D2691E;">大人 0 小孩 0 </span></label>\r\n	<button class="btn btn-sm btn-success T-arrageTransfer-inner R-right" data-right="1130005">\r\n		<i class="ace-icon fa fa-user-plus"></i>\r\n		内转\r\n	</button>\r\n	<button class="btn btn-sm btn-primary T-arrageTransfer-out R-right" data-right="1130003">\r\n		<i class="ace-icon fa fa-user-plus"></i>\r\n		外转\r\n	</button>\r\n</div>\r\n\r\n<div class="row pageMode">\r\n	<div class="col-xs-5">\r\n		<small>共计 {{recordSize}} 条记录</small>\r\n	</div>\r\n	<div class="col-xs-7">\r\n		<div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n		</div>\r\n	</div>\r\n</div>\r\n\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});