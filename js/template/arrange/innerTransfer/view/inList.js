/*TMODJS:{"debug":true,"version":135,"md5":"e69dbe01ba0fb10401f14c299fc38751"}*/
define(function(require) {
    return require("../../../template")("arrange/innerTransfer/view/inList", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, resultList = $data.resultList, $escape = ($data.list, 
            $data.$index, $utils.$escape), searchParam = $data.searchParam, $out = "";
            return $out += '<table class="table table-striped table-bordered table-hover T-NotShowHighLight"> <thead> <tr class="bg-blur"> <th>线路产品</th> <th>天数</th> <th>出游日期</th> <th>游客</th> <th>人数</th> <th>部门</th> <th>联系人</th> <th>联系电话</th> <th>应收</th> <th>已收</th> <th>我方状态</th> <th width="143">操作</th> </tr> </thead> <tbody class="T-transferIn-list">', 
            $line = 18, $each(resultList, function(list) {
                $out += ' <tr data-value="', $line = 19, $out += $escape(list.id), $out += '"> <td>', 
                $line = 20, $out += $escape(list.lineProduct.name), $out += "</td> <td>", $line = 21, 
                $out += $escape(list.lineProduct.days), $out += "天</td> <td>", $line = 22, $out += $escape($helpers.dateFormat(list.touristGroup.startTime, "yyyy-MM-dd")), 
                $out += "</td> <td>", $line = 23, null != list.touristGroup.contactMember && ($line = 23, 
                $out += $escape(list.touristGroup.contactMember.name), $line = 23), $out += "</td> <td>", 
                $line = 24, $out += $escape(list.touristGroup.adultCount), $out += "大", $line = 24, 
                $out += $escape(list.touristGroup.childCount), $out += "小</td> <td>", $line = 25, 
                $out += $escape(list.fromBusinessGroup.name), $out += "</td> <td>", $line = 26, 
                $out += $escape(list.user.realName), $out += "</td> <td>", $line = 27, $out += $escape(list.user.mobileNumber), 
                $out += "</td> <td>", $line = 28, $out += $escape(list.transNeedPayMoney), $out += "</td> <td>", 
                $line = 29, $out += $escape(list.transPayedMoney), $out += "</td> <td>", $line = 30, 
                0 == list.status ? ($out += '<span style="color:#D2691E;">未确认</span>', $line = 30) : 1 == list.status && ($out += '<span style="color: green;">已确认</span>', 
                $line = 30), $out += '</td> <td> <div class="hidden-sm hidden-xs btn-group"> <a class="cursor ', 
                $line = 33, 1 != list.status && ($out += "T-TransferIn-save", $line = 33), $out += ' R-right T-action" data-right="1340004" ', 
                $line = 33, 1 == list.status && ($out += 'style="color:#bbb"', $line = 33), $out += '> 确认 <label style="padding-left:10px;">|</label> </a> <a class="cursor T-TransferIn-view T-action"> 查看 </a> <a class="cursor ', 
                $line = 40, 1 != list.status && ($out += "T-TransferIn-refuse", $line = 40), $out += ' R-right T-action" data-right="1340005" ', 
                $line = 40, 1 == list.status && ($out += 'style="color:#bbb"', $line = 40), $out += '> <label class="padding-right20">|</label> 拒绝 </a> </div> </td> </tr> ', 
                $line = 48;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计&nbsp;', 
            $line = 53, $out += $escape(searchParam.totalCount), $out += '&nbsp;条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<table class="table table-striped table-bordered table-hover T-NotShowHighLight">\r\n	<thead>\r\n		<tr class="bg-blur">\r\n		    <th>线路产品</th> \r\n			<th>天数</th>\r\n			<th>出游日期</th>\r\n			<th>游客</th>\r\n			<th>人数</th>\r\n			<th>部门</th>\r\n			<th>联系人</th>\r\n			<th>联系电话</th>\r\n			<th>应收</th>\r\n			<th>已收</th>\r\n			<th>我方状态</th>\r\n			<th width="143">操作</th>\r\n		</tr>\r\n	</thead>\r\n	<tbody class="T-transferIn-list">{{each resultList as list}}\r\n		<tr data-value="{{list.id}}">\r\n			<td>{{list.lineProduct.name}}</td>\r\n			<td>{{list.lineProduct.days}}天</td>\r\n			<td>{{list.touristGroup.startTime | dateFormat:\'yyyy-MM-dd\'}}</td>\r\n			<td>{{if list.touristGroup.contactMember != null}}{{list.touristGroup.contactMember.name}}{{/if}}</td>\r\n			<td>{{list.touristGroup.adultCount}}大{{list.touristGroup.childCount}}小</td>\r\n			<td>{{list.fromBusinessGroup.name}}</td>\r\n			<td>{{list.user.realName}}</td>\r\n			<td>{{list.user.mobileNumber}}</td>\r\n			<td>{{list.transNeedPayMoney}}</td>\r\n			<td>{{list.transPayedMoney}}</td>\r\n			<td>{{if list.status == 0}}<span style="color:#D2691E;">未确认</span>{{else if list.status == 1}}<span style="color: green;">已确认</span>{{/if}}</td>\r\n			<td>\r\n				<div class="hidden-sm hidden-xs btn-group">\r\n					<a class="cursor  {{if list.status != 1}}T-TransferIn-save{{/if}} R-right T-action" data-right="1340004" {{if list.status == 1}}style="color:#bbb"{{/if}}>\r\n						确认\r\n						<label style="padding-left:10px;">|</label>\r\n					</a>\r\n					<a class="cursor T-TransferIn-view T-action">\r\n						查看\r\n					</a>\r\n					<a class="cursor {{if list.status != 1}}T-TransferIn-refuse{{/if}} R-right T-action" data-right="1340005" {{if list.status == 1}}style="color:#bbb"{{/if}}>\r\n						<label class="padding-right20">|</label>\r\n						拒绝\r\n					</a>\r\n\r\n				</div>  \r\n			</td>\r\n		</tr>\r\n		{{/each}}\r\n	</tbody>\r\n</table>\r\n<div class="row pageMode">\r\n	<div class="col-xs-6">\r\n		<small>共计&nbsp;{{searchParam.totalCount}}&nbsp;条记录</small>\r\n	</div>\r\n	<div class="col-xs-6">\r\n		<div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});