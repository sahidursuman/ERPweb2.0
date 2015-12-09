/*TMODJS:{"debug":true,"version":9,"md5":"9ebb8a0ba51e3fb5bc81621bf65b22c2"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeTourist/view/listGroup", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, touristGroupList = $data.touristGroupList, $escape = ($data.$index, 
            $utils.$escape), recordSize = $data.recordSize, $out = "";
            return $out += '<table class="table table-striped table-bordered table-hover globalAdd T-showHighLight"> <thead> <tr class="bg-blur"> <th class="R-right" data-right="1130004">选择</th> <th>来源</th> <th>线路产品</th> <th>线路类型</th> <th>应用范围</th> <th>天数</th> <th>出游日期</th> <th>联系人</th> <th>联系电话</th> <th>人数</th> <th>客源地</th> <th>年龄</th> <th>备注</th> <th>查看</th> </tr> </thead> <tbody class="T-arrageGroup-list"> ', 
            $line = 21, $each(touristGroupList, function(touristGroupList) {
                $out += " <tr data-value=", $line = 22, $out += $escape(touristGroupList.id), $out += " data-entity-adultCount = ", 
                $line = 22, $out += $escape(touristGroupList.adultCount), $out += " data-entity-childCount = ", 
                $line = 22, $out += $escape(touristGroupList.childCount), $out += '> <td> <label class="pos-rel"> <input type="radio" class="ace T-arrageGroupCheckBox T-cheked" name="form-field-radio"> <span class="lbl"></span> </label> </td> <td>', 
                $line = 26, null != touristGroupList.partnerAgency && ($line = 26, $out += $escape(touristGroupList.partnerAgency.travelAgencyName), 
                $line = 26), $out += "</td> <td>", $line = 27, $out += $escape(touristGroupList.lineProduct.name), 
                $out += "</td> <td>", $line = 28, $out += $escape(touristGroupList.lineProduct.type), 
                $out += "</td> <td> ", $line = 30, 0 == touristGroupList.lineProduct.customerType ? ($out += "散拼 ", 
                $line = 31) : 1 == touristGroupList.lineProduct.customerType ? ($out += "团体 ", $line = 32) : 2 == touristGroupList.lineProduct.customerType && ($out += "转客 ", 
                $line = 33), $out += " </td> <td>", $line = 35, $out += $escape(touristGroupList.lineProduct.days), 
                $out += "</td> <td>", $line = 36, $out += $escape($helpers.dateFormat(touristGroupList.startTime, "yyyy-MM-dd")), 
                $out += "</td> <td>", $line = 37, $out += $escape(touristGroupList.contactMember.name), 
                $out += "</td> <td>", $line = 38, $out += $escape(touristGroupList.contactMember.mobileNumber), 
                $out += "</td> <td>", $line = 39, $out += $escape(touristGroupList.adultCount), 
                $out += " 大 ", $line = 39, $out += $escape(touristGroupList.childCount), $out += "小</td> <td>", 
                $line = 41, $out += $escape(touristGroupList.ageData), $out += "</td> <td>", $line = 42, 
                $out += $escape(touristGroupList.ageData), $out += "</td> <td>", $line = 43, $out += $escape(touristGroupList.remark), 
                $out += '</td> <td><a class="cursor T-arrageGroup-view T-action"> 查看 </a></td> </tr> ', 
                $line = 46;
            }), $out += ' </tbody> </table> <div class="row"> <div class="col-xs-12 T-arrangeTouristList"> </div> </div> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 56, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> <div class="col-xs-12 T-arrangeTouristMergeList" style="margin-top:20px;"> <div> <button class="btn btn-sm btn-success T-createTripPlan R-right"> <i class="ace-icon fa fa-user-plus"></i> 生成计划 </button> </div> <div class="space-10"></div> <div class="list"> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<table class="table table-striped table-bordered table-hover globalAdd T-showHighLight">\r\n	<thead>\r\n		<tr class="bg-blur">\r\n			<th class="R-right" data-right="1130004">选择</th>\r\n			<th>来源</th>\r\n			<th>线路产品</th>\r\n			<th>线路类型</th>\r\n			<th>应用范围</th>\r\n			<th>天数</th>\r\n			<th>出游日期</th>\r\n			<th>联系人</th>\r\n			<th>联系电话</th>\r\n			<th>人数</th>\r\n			<th>客源地</th>\r\n			<th>年龄</th>\r\n			<th>备注</th>\r\n			<th>查看</th>\r\n		</tr>\r\n	</thead>\r\n	<tbody class="T-arrageGroup-list">\r\n		{{each touristGroupList as touristGroupList}}\r\n			<tr data-value={{touristGroupList.id}} data-entity-adultCount = {{touristGroupList.adultCount}}  data-entity-childCount = {{touristGroupList.childCount}}>\r\n			    <td>\r\n			      <label class="pos-rel"> <input type="radio" class="ace T-arrageGroupCheckBox T-cheked" name="form-field-radio"> <span class="lbl"></span> </label>\r\n			    </td>\r\n				<td>{{if touristGroupList.partnerAgency!=null}}{{touristGroupList.partnerAgency.travelAgencyName}}{{/if}}</td>\r\n				<td>{{touristGroupList.lineProduct.name}}</td>\r\n				<td>{{touristGroupList.lineProduct.type}}</td>\r\n				<td>\r\n					{{if touristGroupList.lineProduct.customerType == 0}}散拼\r\n					    {{else if touristGroupList.lineProduct.customerType == 1}}团体\r\n					    {{else if touristGroupList.lineProduct.customerType == 2}}转客\r\n					{{/if}}\r\n				</td>\r\n				<td>{{touristGroupList.lineProduct.days}}</td>\r\n				<td>{{touristGroupList.startTime | dateFormat: \'yyyy-MM-dd\' }}</td>\r\n				<td>{{touristGroupList.contactMember.name}}</td>\r\n				<td>{{touristGroupList.contactMember.mobileNumber}}</td>\r\n				<td>{{touristGroupList.adultCount}} 大 {{touristGroupList.childCount}}小</td>\r\n					\r\n				<td>{{touristGroupList.ageData}}</td>\r\n				<td>{{touristGroupList.ageData}}</td>\r\n				<td>{{touristGroupList.remark}}</td>\r\n				<td><a class="cursor T-arrageGroup-view T-action"> 查看 </a></td>\r\n			</tr>\r\n		{{/each}}\r\n	</tbody>\r\n</table>\r\n<div class="row">\r\n	<div class="col-xs-12 T-arrangeTouristList">\r\n	</div>\r\n</div>\r\n\r\n<div class="row pageMode">\r\n	<div class="col-xs-6">\r\n		<small>共计 {{recordSize}} 条记录</small>\r\n	</div>\r\n	<div class="col-xs-6">\r\n		<div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n		</div>\r\n	</div>\r\n</div>\r\n\r\n<div class="col-xs-12 	T-arrangeTouristMergeList" style="margin-top:20px;">\r\n	<div>\r\n		<button class="btn btn-sm btn-success T-createTripPlan R-right">\r\n			<i class="ace-icon fa fa-user-plus"></i>\r\n			生成计划\r\n		</button>\r\n	</div>\r\n	<div class="space-10"></div>\r\n	<div class="list">\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});