/*TMODJS:{"debug":true,"version":59,"md5":"6db9841e64e12573c862cfaa76e6c5c8"}*/
define(function(require) {
    return require("../../../template")("arrange/innerTransfer/view/outList", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, resultList = $data.resultList, $escape = ($data.list, 
            $data.$index, $utils.$escape), searchParam = $data.searchParam, $out = "";
            return $out += '<table class="table table-striped table-bordered table-hover"> <thead> <tr class="bg-blur"> <th>部门</th> <th>游客</th> <th>联系电话</th> <th>人数</th> <th>应付款</th> <th>已付款</th> <th>转客人</th> <th>转客时间</th> <th>对方状态</th> <th>操作</th> </tr> </thead> <tbody>', 
            $line = 16, $each(resultList, function(list) {
                $out += ' <tr data-entity-id="', $line = 17, $out += $escape(list.id), $out += '"> <td>', 
                $line = 18, $out += $escape(list.toBusinessGroup.name), $out += "</td> <td>", $line = 19, 
                null != list.touristGroup.contactMember && ($line = 19, $out += $escape(list.touristGroup.contactMember.name), 
                $line = 19), $out += "</td> <td>", $line = 20, null != list.touristGroup.contactMember && ($line = 20, 
                $out += $escape(list.touristGroup.contactMember.mobileNumber), $line = 20), $out += "</td> <td>", 
                $line = 21, $out += $escape(list.touristGroup.adultCount), $out += "大", $line = 21, 
                $out += $escape(list.touristGroup.childCount), $out += "小</td> <td>", $line = 22, 
                $out += $escape(list.transNeedPayMoney), $out += "</td> <td>", $line = 23, $out += $escape(list.transPayedMoney), 
                $out += "</td> <td>", $line = 24, $out += $escape(list.user.realName), $out += "</td> <td>", 
                $line = 25, $out += $escape(list.createTime), $out += "</td> <td>", $line = 26, 
                0 == list.status ? ($out += '<span style="color:#D2691E;">未确认</span>', $line = 26) : 1 == list.status ? ($out += '<span style="color: green;">已确认</span>', 
                $line = 26) : 2 == list.status && ($out += '<span style="color: red;">已拒收</span>', 
                $line = 26), $out += '</td> <td> <div class="hidden-sm hidden-xs btn-group" style="width:120px;"> <a class="cursor ', 
                $line = 29, 1 != list.status && ($out += "btn-TransferOut-edit", $line = 29), $out += '" ', 
                $line = 29, 1 == list.status && ($out += 'style="color:#bbb"', $line = 29), $out += '> 编辑</a> <a href="" class="cursor"> |</a> <a class="cursor btn-TransferOut-view"> 查看 </a> <a href="" class="cursor"> |</a> <a class="cursor ', 
                $line = 37, 1 != list.status && ($out += "btn-TransferOut-delete", $line = 37), 
                $out += '" ', $line = 37, 1 == list.status && ($out += 'style="color:#bbb"', $line = 37), 
                $out += "> 撤销 </a> </div> </td> </tr> ", $line = 43;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <div class="dataTables_info" id="dynamic-table_info" role="status" aria-live="polite">共计 ', 
            $line = 48, $out += $escape(searchParam.totalCount), $out += ' 条记录</div> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers" id="dynamic-table_paginate"> <ul class="pagination"> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="first" href="javascript:void(0)">首页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="previous"href="javascript:void(0)">上一页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"> <a href="javascript:void(0)"> ', 
            $line = 57, 0 == searchParam.totalPage ? ($out += " 0/0 ", $line = 59) : ($out += " ", 
            $line = 60, $out += $escape(searchParam.pageNo + 1), $out += "/", $line = 60, $out += $escape(searchParam.totalPage), 
            $out += " ", $line = 61), $out += ' </a> </li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="next" href="javascript:void(0)">下一页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="last" href="javascript:void(0)">尾页</a></li> </ul> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<table class="table table-striped table-bordered table-hover">\r\n	<thead>\r\n		<tr class="bg-blur">\r\n		    <th>部门</th>  \r\n			<th>游客</th>\r\n			<th>联系电话</th>\r\n			<th>人数</th>\r\n			<th>应付款</th>\r\n			<th>已付款</th>\r\n			<th>转客人</th>\r\n			<th>转客时间</th>\r\n			<th>对方状态</th>\r\n			<th>操作</th>\r\n		</tr>\r\n	</thead>\r\n	<tbody>{{each resultList as list}}\r\n		<tr data-entity-id="{{list.id}}">\r\n			<td>{{list.toBusinessGroup.name}}</td>\r\n			<td>{{if list.touristGroup.contactMember != null}}{{list.touristGroup.contactMember.name}}{{/if}}</td>\r\n			<td>{{if list.touristGroup.contactMember != null}}{{list.touristGroup.contactMember.mobileNumber}}{{/if}}</td>\r\n			<td>{{list.touristGroup.adultCount}}大{{list.touristGroup.childCount}}小</td>\r\n			<td>{{list.transNeedPayMoney}}</td>\r\n			<td>{{list.transPayedMoney}}</td>\r\n			<td>{{list.user.realName}}</td>\r\n			<td>{{list.createTime}}</td>\r\n			<td>{{if list.status == 0}}<span style="color:#D2691E;">未确认</span>{{else if list.status == 1}}<span style="color: green;">已确认</span>{{else if list.status == 2}}<span style="color: red;">已拒收</span>{{/if}}</td>\r\n			<td>\r\n				<div class="hidden-sm hidden-xs btn-group" style="width:120px;">\r\n					<a class="cursor {{if list.status != 1}}btn-TransferOut-edit{{/if}}" {{if list.status == 1}}style="color:#bbb"{{/if}}>\r\n						编辑</a>\r\n\r\n	                <a href="" class="cursor"> |</a>\r\n					<a class="cursor  btn-TransferOut-view">\r\n						查看\r\n					</a>\r\n					<a href="" class="cursor"> |</a>\r\n					<a class="cursor {{if list.status != 1}}btn-TransferOut-delete{{/if}}" {{if list.status == 1}}style="color:#bbb"{{/if}}>\r\n						撤销\r\n					</a>\r\n				</div>  \r\n			</td>\r\n		</tr>\r\n		{{/each}}\r\n	</tbody>\r\n</table>\r\n<div class="row pageMode">\r\n	<div class="col-xs-6">\r\n		<div class="dataTables_info" id="dynamic-table_info" role="status" aria-live="polite">共计 {{searchParam.totalCount}} 条记录</div>\r\n	</div>\r\n	<div class="col-xs-6">\r\n		<div class="dataTables_paginate paging_simple_numbers" id="dynamic-table_paginate">\r\n			<ul class="pagination">\r\n				<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="first" href="javascript:void(0)">首页</a></li>\r\n				<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="previous"href="javascript:void(0)">上一页</a></li>\r\n				<li class="paginate_button" aria-controls="dynamic-table" tabindex="0">\r\n					<a href="javascript:void(0)">\r\n						{{if searchParam.totalPage == 0}}\r\n							0/0\r\n						{{else}}\r\n							{{searchParam.pageNo+1}}/{{searchParam.totalPage}}\r\n						{{/if}}\r\n					</a>\r\n				</li>\r\n				<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="next"  href="javascript:void(0)">下一页</a></li>\r\n				<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="last" href="javascript:void(0)">尾页</a></li>\r\n			</ul>\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});