/*TMODJS:{"debug":true,"version":43,"md5":"1e735b4c34c99d7d09770d03768965ea"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeGroupTransfer/view/listTransfer", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, touristGroupList = $data.touristGroupList, $escape = ($data.group, 
            $data.$index, $utils.$escape), recordSize = $data.recordSize, $out = "";
            return $out += '<table class="table table-striped table-bordered table-hover globalAdd T-showHighLight table-fixed"> <colgroup> <col style="width:4%;"></col> <col style="width:35%"></col> <col style="width:6%;"></col> <col style="width:15%;"></col> <col style="width:10%;"></col> <col style="width:18%;"></col> <col style="width:13%;"></col> <col style="width:15%;"></col> <col style="width:5%;"></col> <col style="width:25%;"></col> <col style="width:10%;"></col> </colgroup> <thead> <tr class="bg-blur"> <th>选择</th> <th>收客信息</th> <th>天数</th> <th>出游日期</th> <th>联系人</th> <th>联系电话</th> <th>人数</th> <th>客源地</th> <th>年龄</th> <th>备注</th> <th>查看</th> </tr> </thead> <tbody class="T-arrageTransfer-list"> ', 
            $line = 31, $each(touristGroupList, function(group) {
                $out += " <tr data-value=", $line = 32, $out += $escape(group.id), $out += " data-entity-adultCount = ", 
                $line = 32, $out += $escape(group.adultCount), $out += " data-entity-childCount = ", 
                $line = 32, $out += $escape(group.childCount), $out += '> <td style="vertical-align:middle;padding: 3px;"><label class="pos-rel"> <input type="checkbox" class="ace T-transferCheckBox T-cheked"> <span class="lbl"></span> </label></td> <td class="h-touristGroupInfo" style="vertical-align:middle"> <p class="h-orderNumber">收客单号：', 
                $line = 35, $out += $escape(group.orderNumber), $out += '</p> <p class="h-orderNumber">客户：', 
                $line = 36, null != group.partnerAgency && ($line = 36, $out += $escape(group.partnerAgency.travelAgencyName), 
                $line = 36), $out += "</p> ", $line = 37, group.lineProduct && ($out += ' <p class="h-lineName">', 
                $line = 38, $out += $escape(group.lineProduct.name), $out += "</p> ", $line = 39), 
                $out += ' <p class="h-startTime">', $line = 40, null != group.lineProduct && ($line = 40, 
                $out += $escape(group.lineProduct.type), $line = 40), $out += ' </p> <p class="h-memberName">针对客源： ', 
                $line = 42, null != group.lineProduct && ($out += " ", $line = 43, 0 == group.lineProduct.customerType ? ($out += "散客 ", 
                $line = 44) : 1 == group.lineProduct.customerType ? ($out += "团体 ", $line = 45) : 2 == group.lineProduct.customerType && ($out += "转客 ", 
                $line = 46), $out += " ", $line = 47), $out += ' </p> </td> <td class="F-float F-count" style="vertical-align:middle">', 
                $line = 50, null != group.lineProduct && ($line = 50, $out += $escape(group.lineProduct.days), 
                $line = 50), $out += '</td> <td style="vertical-align:middle">', $line = 51, $out += $escape($helpers.dateFormat(group.startTime, "yyyy-MM-dd")), 
                $out += "</td> ", $line = 52, group.contactMember ? ($out += ' <td style="vertical-align:middle">', 
                $line = 53, $out += $escape(group.contactMember.name), $out += '</td> <td style="vertical-align:middle">', 
                $line = 54, $out += $escape(group.contactMember.mobileNumber), $out += "</td> ", 
                $line = 55) : ($out += " <td></td> <td></td> ", $line = 58), $out += ' <td style="vertical-align:middle">', 
                $line = 59, $out += $escape(group.adultCount), $out += " 大 ", $line = 59, $out += $escape(group.childCount), 
                $out += '小</td> <td style="vertical-align:middle">', $line = 61, $out += $escape(group.areaData), 
                $out += '</td> <td style="vertical-align:middle">', $line = 62, $out += $escape(group.ageData), 
                $out += '</td> <td class="T-ctrl-tip" title="', $line = 63, $out += $escape(group.remark), 
                $out += '" style="vertical-align:middle"><span style="height: 35px">', $line = 63, 
                $out += $escape(group.remark), $out += '</span></td> <td style="vertical-align:middle"><a class="cursor T-arrageTransfer-view T-action"> 查看 </a></td> </tr> ', 
                $line = 66;
            }), $out += ' </tbody> </table> <form class="form-horizontal" role="form" onsubmit="return false" style="margin-top:25px;"> <div class="form-group col-sm-12" style="text-align: center;"> <button class="btn btn-sm btn-success T-arrageTransfer-inner R-right" data-right="1130005"> <i class="ace-icon fa fa-user-plus"></i> 内转 </button> <button class="btn btn-sm btn-success T-arrageTransfer-out R-right" data-right="1130003"> <i class="ace-icon fa fa-user-plus"></i> 外转 </button> </div> </form> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 88, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<table class="table table-striped table-bordered table-hover globalAdd T-showHighLight table-fixed">\r\n     <colgroup>\r\n    	<col style="width:4%;"></col>\r\n    	<col style="width:35%"></col>	\r\n 		<col style="width:6%;"></col>\r\n    	<col style="width:15%;"></col>\r\n    	<col style="width:10%;"></col>\r\n	 	<col style="width:18%;"></col>\r\n 	 	<col style="width:13%;"></col>\r\n 	 	<col style="width:15%;"></col>\r\n 	 	<col style="width:5%;"></col>\r\n 	 	<col style="width:25%;"></col>\r\n 	 	<col style="width:10%;"></col>\r\n    </colgroup>\r\n	<thead>\r\n		<tr class="bg-blur">\r\n			<th>选择</th>\r\n			<th>收客信息</th>\r\n			<th>天数</th>\r\n			<th>出游日期</th>\r\n			<th>联系人</th>\r\n			<th>联系电话</th>\r\n			<th>人数</th>\r\n			<th>客源地</th>\r\n			<th>年龄</th>\r\n			<th>备注</th>\r\n			<th>查看</th>\r\n		</tr>\r\n	</thead>\r\n	<tbody class="T-arrageTransfer-list">\r\n		{{each touristGroupList as group}}\r\n			<tr data-value={{group.id}} data-entity-adultCount = {{group.adultCount}}  data-entity-childCount = {{group.childCount}}>\r\n			    <td style="vertical-align:middle;padding: 3px;"><label class="pos-rel"> <input type="checkbox" class="ace T-transferCheckBox T-cheked"> <span class="lbl"></span> </label></td>\r\n			    <td class="h-touristGroupInfo" style="vertical-align:middle">\r\n				 	<p class="h-orderNumber">收客单号：{{group.orderNumber}}</p>\r\n                    <p class="h-orderNumber">客户：{{if group.partnerAgency != null}}{{group.partnerAgency.travelAgencyName}}{{/if}}</p>\r\n                    {{if !!group.lineProduct}} \r\n                    <p class="h-lineName">{{group.lineProduct.name}}</p>\r\n                    {{/if}}\r\n                    <p class="h-startTime">{{if group.lineProduct != null}}{{group.lineProduct.type}}{{/if}} </p>\r\n                    <p class="h-memberName">针对客源：\r\n                    	{{if group.lineProduct != null}}\r\n						{{if group.lineProduct.customerType == 0}}散客\r\n					    {{else if group.lineProduct.customerType == 1}}团体\r\n					    {{else if group.lineProduct.customerType == 2}}转客\r\n						{{/if}} \r\n						{{/if}} \r\n					</p>\r\n                </td>\r\n				<td class="F-float F-count" style="vertical-align:middle">{{if group.lineProduct != null}}{{group.lineProduct.days}}{{/if}}</td>\r\n				<td style="vertical-align:middle">{{group.startTime | dateFormat: \'yyyy-MM-dd\' }}</td>\r\n				{{if !!group.contactMember}}\r\n				<td style="vertical-align:middle">{{group.contactMember.name}}</td>\r\n				<td style="vertical-align:middle">{{group.contactMember.mobileNumber}}</td>\r\n				{{else}}\r\n				<td></td>\r\n				<td></td>\r\n				{{/if}}\r\n				<td style="vertical-align:middle">{{group.adultCount}} 大 {{group.childCount}}小</td>\r\n					\r\n				<td style="vertical-align:middle">{{group.areaData}}</td>\r\n				<td style="vertical-align:middle">{{group.ageData}}</td>\r\n				<td class="T-ctrl-tip" title="{{group.remark}}" style="vertical-align:middle"><span style="height: 35px">{{group.remark}}</span></td>\r\n				<td style="vertical-align:middle"><a class="cursor T-arrageTransfer-view T-action"> 查看 </a></td>\r\n			</tr>\r\n		{{/each}}\r\n	</tbody>\r\n</table>\r\n\r\n\r\n<form class="form-horizontal" role="form" onsubmit="return false" style="margin-top:25px;">\r\n	<div class="form-group col-sm-12" style="text-align: center;"> \r\n		<button class="btn btn-sm btn-success T-arrageTransfer-inner R-right" data-right="1130005">\r\n			<i class="ace-icon fa fa-user-plus"></i>\r\n			内转\r\n		</button>\r\n		<button class="btn btn-sm btn-success T-arrageTransfer-out R-right" data-right="1130003">\r\n			<i class="ace-icon fa fa-user-plus"></i>\r\n			外转\r\n		</button>\r\n	</div>\r\n</form>\r\n\r\n\r\n\r\n<div class="row pageMode">\r\n	<div class="col-xs-6">\r\n		<small>共计 {{recordSize}} 条记录</small>\r\n	</div>\r\n	<div class="col-xs-6">\r\n		<div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n		</div>\r\n	</div>\r\n</div>\r\n\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});