/*TMODJS:{"debug":true,"version":15,"md5":"3c1cd0c5073e16f6df63cdf43c4e4b5b"}*/
define(function(require) {
    return require("../../../template")("arrange/innerTransfer/view/outList", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, resultList = $data.resultList, $escape = ($data.list, 
            $data.$index, $utils.$escape), searchParam = $data.searchParam, $out = "";
            return $out += '<table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr class="bg-blur"> <th>接收部门</th> <th>出游日期</th> <th>游客</th> <th>联系电话</th> <th>人数</th> <th>应付款</th> <th>转客人</th> <th>转客时间</th> <th>对方状态</th> <th>操作</th> </tr> </thead> <tbody class="T-transferOut-list">', 
            $line = 16, $each(resultList, function(list) {
                $out += ' <tr data-value="', $line = 17, $out += $escape(list.id), $out += '"> <td>', 
                $line = 18, $out += $escape(list.toBusinessGroup.name), $out += "</td> <td>", $line = 19, 
                list.touristGroup && ($line = 19, $out += $escape($helpers.dateFormat(list.touristGroup.startTime, "yyyy-MM-dd")), 
                $line = 19), $out += "</td> <td>", $line = 20, null != list.touristGroup.contactMember && ($line = 20, 
                $out += $escape(list.touristGroup.contactMember.name), $line = 20), $out += "</td> <td>", 
                $line = 21, null != list.touristGroup.contactMember && ($line = 21, $out += $escape(list.touristGroup.contactMember.mobileNumber), 
                $line = 21), $out += '</td> <td><span class=" F-float F-count">', $line = 22, $out += $escape(list.touristGroup.adultCount), 
                $out += '</span>大<span class=" F-float F-money">', $line = 22, $out += $escape(list.touristGroup.childCount), 
                $out += '</span>小</td> <td><span class=" F-float F-money">', $line = 23, $out += $escape(list.transNeedPayMoney), 
                $out += "</span></td> <td>", $line = 24, $out += $escape(list.user.realName), $out += "</td> <td>", 
                $line = 25, $out += $escape(list.createTime), $out += "</td> <td> ", $line = 27, 
                0 == list.status ? ($out += '<span style="color:#D2691E;">未确认</span> ', $line = 28) : 1 == list.status ? ($out += '<span style="color: green;">已确认</span> ', 
                $line = 29) : 2 == list.status ? ($out += '<span style="color: red;">已拒收</span> ', 
                $line = 30) : 4 == list.status && ($out += '<span style="color: red;">已退回</span> ', 
                $line = 31), $out += '</td> <td> <div class="btn-group"> <a class="cursor ', $line = 34, 
                1 != list.status && 4 != list.status && 2 != list.status && ($out += "T-TransferOut-edit", 
                $line = 34), $out += ' R-right T-action" data-right="1340002" ', $line = 34, (1 == list.status || 2 == list.status || 4 == list.status) && ($out += 'style="color:#bbb"', 
                $line = 34), $out += '> 编辑 <label style="padding-left:10px;">|</label> </a> <a class="cursor T-TransferOut-view T-action"> 查看 </a> <a class="cursor ', 
                $line = 41, 1 != list.status && 4 != list.status && ($out += "T-TransferOut-delete", 
                $line = 41), $out += ' R-right T-action" data-right="1340003" ', $line = 41, (1 == list.status || 4 == list.status) && ($out += 'style="color:#bbb"', 
                $line = 41), $out += '> <label class="padding-right20">|</label> 撤销 </a> <a class="cursor ', 
                $line = 46, 4 == list.status && ($out += "T-returnTransferOut-delete", $line = 46), 
                $out += ' R-right T-action" data-right="1340003" ', $line = 46, 4 != list.status && ($out += 'style="color:#bbb"', 
                $line = 46), $out += '> <label class="padding-right20">|</label> 确认退回 </a> </div> </td> </tr> ', 
                $line = 54;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计&nbsp;', 
            $line = 59, $out += $escape(searchParam.totalCount), $out += '&nbsp;条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<table class="table table-striped table-bordered table-hover T-showHighLight">\r\n	<thead>\r\n		<tr class="bg-blur">\r\n		    <th>接收部门</th>\r\n		    <th>出游日期</th>\r\n			<th>游客</th>\r\n			<th>联系电话</th>\r\n			<th>人数</th>\r\n			<th>应付款</th>\r\n			<th>转客人</th>\r\n			<th>转客时间</th>\r\n			<th>对方状态</th>\r\n			<th>操作</th>\r\n		</tr>\r\n	</thead>\r\n	<tbody class="T-transferOut-list">{{each resultList as list}}\r\n		<tr data-value="{{list.id}}">\r\n			<td>{{list.toBusinessGroup.name}}</td>\r\n			<td>{{if !!list.touristGroup}}{{list.touristGroup.startTime | dateFormat: \'yyyy-MM-dd\' }}{{/if}}</td>\r\n			<td>{{if list.touristGroup.contactMember != null}}{{list.touristGroup.contactMember.name}}{{/if}}</td>\r\n			<td>{{if list.touristGroup.contactMember != null}}{{list.touristGroup.contactMember.mobileNumber}}{{/if}}</td>\r\n			<td><span class=" F-float F-count">{{list.touristGroup.adultCount}}</span>大<span class=" F-float F-money">{{list.touristGroup.childCount}}</span>小</td>\r\n			<td><span class=" F-float F-money">{{list.transNeedPayMoney}}</span></td>\r\n            <td>{{list.user.realName}}</td>\r\n			<td>{{list.createTime}}</td>\r\n			<td>\r\n			{{if list.status == 0}}<span style="color:#D2691E;">未确认</span>\r\n			{{else if list.status == 1}}<span style="color: green;">已确认</span>\r\n			{{else if list.status == 2}}<span style="color: red;">已拒收</span>\r\n			{{else if list.status == 4}}<span style="color: red;">已退回</span>\r\n			{{/if}}</td>\r\n			<td>\r\n				<div class="btn-group">\r\n					<a class="cursor {{if list.status != 1  && list.status != 4 && list.status!=2}}T-TransferOut-edit{{/if}} R-right T-action" data-right="1340002" {{if list.status == 1 || list.status == 2 || list.status == 4}}style="color:#bbb"{{/if}}>\r\n						编辑\r\n						<label style="padding-left:10px;">|</label>\r\n					</a>\r\n					<a class="cursor  T-TransferOut-view T-action">\r\n						查看\r\n					</a>\r\n					<a class="cursor {{if list.status != 1 && list.status != 4}}T-TransferOut-delete{{/if}} R-right T-action" data-right="1340003" {{if list.status == 1 || list.status == 4}}style="color:#bbb"{{/if}}>\r\n						<label class="padding-right20">|</label>\r\n						撤销\r\n					</a>\r\n\r\n					<a class="cursor {{if list.status== 4}}T-returnTransferOut-delete{{/if}} R-right T-action" data-right="1340003" {{if list.status != 4}}style="color:#bbb"{{/if}}>\r\n						<label class="padding-right20">|</label>\r\n						确认退回\r\n					</a>\r\n\r\n				</div>  \r\n			</td>\r\n		</tr>\r\n		{{/each}}\r\n	</tbody>\r\n</table>\r\n<div class="row pageMode">\r\n	<div class="col-xs-6">\r\n		<small>共计&nbsp;{{searchParam.totalCount}}&nbsp;条记录</small>\r\n	</div>\r\n	<div class="col-xs-6">\r\n		<div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});