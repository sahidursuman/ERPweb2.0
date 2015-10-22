/*TMODJS:{"debug":true,"version":48,"md5":"25541d45a2cafaa3cf8e7f61d0622860"}*/
define(function(require) {
    return require("../../../template")("arrange/innerTransfer/view/inList", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, resultList = $data.resultList, $escape = ($data.list, 
            $data.$index, $utils.$escape), searchParam = $data.searchParam, $out = "";
            return $out += '<table class="table table-striped table-bordered table-hover"> <thead> <tr class="bg-blur"> <th>线路产品</th> <th>天数</th> <th>出游日期</th> <th>游客</th> <th>人数</th> <th>部门</th> <th>联系人</th> <th>联系电话</th> <th>应收</th> <th>已收</th> <th>我方状态</th> <th>操作</th> </tr> </thead> <tbody>', 
            $line = 18, $each(resultList, function(list) {
                $out += ' <tr data-entity-id="', $line = 19, $out += $escape(list.id), $out += '"> <td>', 
                $line = 20, $out += $escape(list.lineProduct.name), $out += "</td> <td>", $line = 21, 
                $out += $escape(list.lineProduct.days), $out += "天</td> <td>", $line = 22, $out += $escape(list.touristGroup.startTime), 
                $out += "</td> <td>", $line = 23, null != list.touristGroup.contactMember && ($line = 23, 
                $out += $escape(list.touristGroup.contactMember.name), $line = 23), $out += "</td> <td>", 
                $line = 24, $out += $escape(list.touristGroup.adultCount), $out += "大", $line = 24, 
                $out += $escape(list.touristGroup.childCount), $out += "小</td> <td>", $line = 25, 
                $out += $escape(list.fromBusinessGroup.name), $out += "</td> <td>", $line = 26, 
                $out += $escape(list.user.realName), $out += "</td> <td>", $line = 27, $out += $escape(list.user.mobileNumber), 
                $out += "</td> <td>", $line = 28, $out += $escape(list.touristGroup.transNeedPayMoney), 
                $out += "</td> <td>", $line = 29, $out += $escape(list.touristGroup.transPayedMoney), 
                $out += "</td> <td>", $line = 30, 0 == list.status ? ($out += "未确认", $line = 30) : 1 == list.status && ($out += "已确认", 
                $line = 30), $out += '</td> <td> <div class="hidden-sm hidden-xs btn-group" style="width:120px;"> <a class="cursor ', 
                $line = 33, 1 != list.status && ($out += "btn-TransferIn-save", $line = 33), $out += '" ', 
                $line = 33, 1 == list.status && ($out += 'style="color:#bbb"', $line = 33), $out += '> 确认</a> <a href="" class="cursor"> |</a> <a class="cursor btn-TransferIn-view"> 查看</a> <a href="" class="cursor"> |</a> <a class="cursor ', 
                $line = 41, 1 != list.status && ($out += "btn-TransferIn-refuse", $line = 41), $out += '" ', 
                $line = 41, 1 == list.status && ($out += 'style="color:#bbb"', $line = 41), $out += "> 拒绝</a> </div> </td> </tr> ", 
                $line = 47;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <div class="dataTables_info" id="dynamic-table_info" role="status" aria-live="polite">共计 ', 
            $line = 52, $out += $escape(searchParam.totalCount), $out += ' 条记录</div> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers" id="dynamic-table_paginate"> <ul class="pagination"> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="first" href="javascript:void(0)">首页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="previous"href="javascript:void(0)">上一页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"> <a href="javascript:void(0)"> ', 
            $line = 61, 0 == searchParam.totalPage ? ($out += " 0/0 ", $line = 63) : ($out += " ", 
            $line = 64, $out += $escape(searchParam.pageNo + 1), $out += "/", $line = 64, $out += $escape(searchParam.totalPage), 
            $out += " ", $line = 65), $out += ' </a> </li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="next" href="javascript:void(0)">下一页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="last" href="javascript:void(0)">尾页</a></li> </ul> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<table class="table table-striped table-bordered table-hover">\r\n	<thead>\r\n		<tr class="bg-blur">\r\n		    <th>线路产品</th> \r\n			<th>天数</th>\r\n			<th>出游日期</th>\r\n			<th>游客</th>\r\n			<th>人数</th>\r\n			<th>部门</th>\r\n			<th>联系人</th>\r\n			<th>联系电话</th>\r\n			<th>应收</th>\r\n			<th>已收</th>\r\n			<th>我方状态</th>\r\n			<th>操作</th>\r\n		</tr>\r\n	</thead>\r\n	<tbody>{{each resultList as list}}\r\n		<tr data-entity-id="{{list.id}}">\r\n			<td>{{list.lineProduct.name}}</td>\r\n			<td>{{list.lineProduct.days}}天</td>\r\n			<td>{{list.touristGroup.startTime}}</td>\r\n			<td>{{if list.touristGroup.contactMember != null}}{{list.touristGroup.contactMember.name}}{{/if}}</td>\r\n			<td>{{list.touristGroup.adultCount}}大{{list.touristGroup.childCount}}小</td>\r\n			<td>{{list.fromBusinessGroup.name}}</td>\r\n			<td>{{list.user.realName}}</td>\r\n			<td>{{list.user.mobileNumber}}</td>\r\n			<td>{{list.touristGroup.transNeedPayMoney}}</td>\r\n			<td>{{list.touristGroup.transPayedMoney}}</td>\r\n			<td>{{if list.status == 0}}未确认{{else if list.status == 1}}已确认{{/if}}</td>\r\n			<td>\r\n				<div class="hidden-sm hidden-xs btn-group" style="width:120px;">\r\n					<a class="cursor  {{if list.status != 1}}btn-TransferIn-save{{/if}}" {{if list.status == 1}}style="color:#bbb"{{/if}}>\r\n						确认</a>\r\n\r\n	                <a href="" class="cursor"> |</a>\r\n					<a class="cursor btn-TransferIn-view">\r\n						查看</a>\r\n\r\n					<a href="" class="cursor"> |</a>\r\n					<a class="cursor {{if list.status != 1}}btn-TransferIn-refuse{{/if}}" {{if list.status == 1}}style="color:#bbb"{{/if}}>\r\n						拒绝</a>\r\n\r\n				</div>  \r\n			</td>\r\n		</tr>\r\n		{{/each}}\r\n	</tbody>\r\n</table>\r\n<div class="row pageMode">\r\n	<div class="col-xs-6">\r\n		<div class="dataTables_info" id="dynamic-table_info" role="status" aria-live="polite">共计 {{searchParam.totalCount}} 条记录</div>\r\n	</div>\r\n	<div class="col-xs-6">\r\n		<div class="dataTables_paginate paging_simple_numbers" id="dynamic-table_paginate">\r\n			<ul class="pagination">\r\n				<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="first" href="javascript:void(0)">首页</a></li>\r\n				<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="previous"href="javascript:void(0)">上一页</a></li>\r\n				<li class="paginate_button" aria-controls="dynamic-table" tabindex="0">\r\n					<a href="javascript:void(0)">\r\n						{{if searchParam.totalPage == 0}}\r\n							0/0\r\n						{{else}}\r\n							{{searchParam.pageNo+1}}/{{searchParam.totalPage}}\r\n						{{/if}}\r\n					</a>\r\n				</li>\r\n				<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="next"  href="javascript:void(0)">下一页</a></li>\r\n				<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="last" href="javascript:void(0)">尾页</a></li>\r\n			</ul>\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});