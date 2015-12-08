/*TMODJS:{"debug":true,"version":10,"md5":"ef51276288831ac0cfc9ba8d82fd5d10"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeTourist/view/listTransfer", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, touristGroupList = $data.touristGroupList, $escape = ($data.$index, 
            $utils.$escape), recordSize = $data.recordSize, $out = "";
            return $out += '<table class="table table-striped table-bordered table-hover globalAdd T-showHighLight"> <thead> <tr class="bg-blur"> <th class="R-right" data-right="1130004">选择</th> <th>来源</th> <th>线路产品</th> <th>线路类型</th> <th>应用范围</th> <th>天数</th> <th>出游日期</th> <th>联系人</th> <th>联系电话</th> <th>人数</th> <th>客源地</th> <th>年龄</th> <th>备注</th> <th>查看</th> </tr> </thead> <tbody class="T-arrageTransfer-list"> ', 
            $line = 21, $each(touristGroupList, function(touristGroupList) {
                $out += " <tr data-value=", $line = 22, $out += $escape(touristGroupList.id), $out += " data-entity-adultCount = ", 
                $line = 22, $out += $escape(touristGroupList.adultCount), $out += " data-entity-childCount = ", 
                $line = 22, $out += $escape(touristGroupList.childCount), $out += '> <td><label class="pos-rel"> <input type="checkbox" class="ace T-transferCheckBox T-cheked"> <span class="lbl"></span> </label></td> <td>', 
                $line = 24, null != touristGroupList.partnerAgency && ($line = 24, $out += $escape(touristGroupList.partnerAgency.travelAgencyName), 
                $line = 24), $out += "</td> <td>", $line = 25, null != touristGroupList.lineProduct && ($line = 25, 
                $out += $escape(touristGroupList.lineProduct.name), $line = 25), $out += "</td> <td>", 
                $line = 26, null != touristGroupList.lineProduct && ($line = 26, $out += $escape(touristGroupList.lineProduct.type), 
                $line = 26), $out += "</td> <td> ", $line = 28, null != touristGroupList.lineProduct && ($out += " ", 
                $line = 29, 0 == touristGroupList.lineProduct.customerType ? ($out += "散拼 ", $line = 30) : 1 == touristGroupList.lineProduct.customerType ? ($out += "团体 ", 
                $line = 31) : 2 == touristGroupList.lineProduct.customerType && ($out += "转客 ", 
                $line = 32), $out += " ", $line = 33), $out += " </td> <td>", $line = 35, null != touristGroupList.lineProduct && ($line = 35, 
                $out += $escape(touristGroupList.lineProduct.days), $line = 35), $out += "</td> <td>", 
                $line = 36, $out += $escape($helpers.dateFormat(touristGroupList.startTime, "yyyy-MM-dd")), 
                $out += "</td> <td>", $line = 37, $out += $escape(touristGroupList.contactMember.name), 
                $out += "</td> <td>", $line = 38, $out += $escape(touristGroupList.contactMember.mobileNumber), 
                $out += "</td> <td>", $line = 39, $out += $escape(touristGroupList.adultCount), 
                $out += " 大 ", $line = 39, $out += $escape(touristGroupList.childCount), $out += "小</td> <td>", 
                $line = 41, $out += $escape(touristGroupList.ageData), $out += "</td> <td>", $line = 42, 
                $out += $escape(touristGroupList.ageData), $out += "</td> <td>", $line = 43, $out += $escape(touristGroupList.remark), 
                $out += '</td> <td><a class="cursor T-arrageTransfer-view T-action"> 查看 </a></td> </tr> ', 
                $line = 46;
            }), $out += ' </tbody> </table> <form class="form-horizontal" role="form" onsubmit="return false" style="margin-top:25px;"> <div class="form-group col-sm-12" style="text-align: center;"> <button class="btn btn-sm btn-success T-arrageTransfer-inner R-right"> <i class="ace-icon fa fa-user-plus"></i> 内转 </button> <button class="btn btn-sm btn-success T-arrageTransfer-out R-right"> <i class="ace-icon fa fa-user-plus"></i> 外转 </button> </div> </form> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 68, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<table class="table table-striped table-bordered table-hover globalAdd T-showHighLight">\r\n	<thead>\r\n		<tr class="bg-blur">\r\n			<th class="R-right" data-right="1130004">选择</th>\r\n			<th>来源</th>\r\n			<th>线路产品</th>\r\n			<th>线路类型</th>\r\n			<th>应用范围</th>\r\n			<th>天数</th>\r\n			<th>出游日期</th>\r\n			<th>联系人</th>\r\n			<th>联系电话</th>\r\n			<th>人数</th>\r\n			<th>客源地</th>\r\n			<th>年龄</th>\r\n			<th>备注</th>\r\n			<th>查看</th>\r\n		</tr>\r\n	</thead>\r\n	<tbody class="T-arrageTransfer-list">\r\n		{{each touristGroupList as touristGroupList}}\r\n			<tr data-value={{touristGroupList.id}} data-entity-adultCount = {{touristGroupList.adultCount}}  data-entity-childCount = {{touristGroupList.childCount}}>\r\n			    <td><label class="pos-rel"> <input type="checkbox" class="ace T-transferCheckBox T-cheked"> <span class="lbl"></span> </label></td>\r\n				<td>{{if touristGroupList.partnerAgency!=null}}{{touristGroupList.partnerAgency.travelAgencyName}}{{/if}}</td>\r\n				<td>{{if touristGroupList.lineProduct!=null}}{{touristGroupList.lineProduct.name}}{{/if}}</td>\r\n				<td>{{if touristGroupList.lineProduct!=null}}{{touristGroupList.lineProduct.type}}{{/if}}</td>\r\n				<td>\r\n				{{if touristGroupList.lineProduct!=null}}\r\n					{{if touristGroupList.lineProduct.customerType == 0}}散拼\r\n					    {{else if touristGroupList.lineProduct.customerType == 1}}团体\r\n					    {{else if touristGroupList.lineProduct.customerType == 2}}转客\r\n					{{/if}} \r\n				{{/if}}\r\n				</td>\r\n				<td>{{if touristGroupList.lineProduct!=null}}{{touristGroupList.lineProduct.days}}{{/if}}</td>\r\n				<td>{{touristGroupList.startTime | dateFormat: \'yyyy-MM-dd\' }}</td>\r\n				<td>{{touristGroupList.contactMember.name}}</td>\r\n				<td>{{touristGroupList.contactMember.mobileNumber}}</td>\r\n				<td>{{touristGroupList.adultCount}} 大 {{touristGroupList.childCount}}小</td>\r\n					\r\n				<td>{{touristGroupList.ageData}}</td>\r\n				<td>{{touristGroupList.ageData}}</td>\r\n				<td>{{touristGroupList.remark}}</td>\r\n				<td><a class="cursor T-arrageTransfer-view T-action"> 查看 </a></td>\r\n			</tr>\r\n		{{/each}}\r\n	</tbody>\r\n</table>\r\n\r\n\r\n<form class="form-horizontal" role="form" onsubmit="return false" style="margin-top:25px;">\r\n	<div class="form-group col-sm-12" style="text-align: center;"> \r\n		<button class="btn btn-sm btn-success T-arrageTransfer-inner R-right">\r\n			<i class="ace-icon fa fa-user-plus"></i>\r\n			内转\r\n		</button>\r\n		<button class="btn btn-sm btn-success T-arrageTransfer-out R-right">\r\n			<i class="ace-icon fa fa-user-plus"></i>\r\n			外转\r\n		</button>\r\n	</div>\r\n</form>\r\n\r\n\r\n\r\n<div class="row pageMode">\r\n	<div class="col-xs-6">\r\n		<small>共计 {{recordSize}} 条记录</small>\r\n	</div>\r\n	<div class="col-xs-6">\r\n		<div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n		</div>\r\n	</div>\r\n</div>\r\n\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});