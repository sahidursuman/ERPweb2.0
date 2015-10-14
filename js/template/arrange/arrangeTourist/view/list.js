/*TMODJS:{"debug":true,"version":48,"md5":"63e7e319ef7d60f8972b0b8575d82995"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeTourist/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, arrangeTouristGroupList = $data.arrangeTouristGroupList, $escape = ($data.arrangeTourist, 
            $data.$index, $utils.$escape), recordSize = $data.recordSize, totalPage = $data.totalPage, pageNo = $data.pageNo, $out = "";
            return $out += '<table class="table table-striped table-bordered table-hover"> <thead> <tr class="bg-blur"> <th>并团选择</th> <th>线路产品</th> <th>类别</th> <th>应用范围</th> <th>天数</th> <th>出游日期</th> <th>人数</th> <th>未分团人数</th> <th>应收款</th> <th>已收款</th> <th>现收款</th> <th>操作</th> </tr> </thead> <tbody> ', 
            $line = 19, $each(arrangeTouristGroupList, function(arrangeTourist) {
                $out += ' <tr data-entity-id="', $line = 20, $out += $escape(arrangeTourist.lineProductId), 
                $out += '" data-entity-startTime="', $line = 20, $out += $escape(arrangeTourist.startTime), 
                $out += '" data-entity-days="', $line = 20, $out += $escape(arrangeTourist.days), 
                $out += '" data-entity-name="', $line = 20, $out += $escape(arrangeTourist.name), 
                $out += '" data-entity-type="', $line = 20, $out += $escape(arrangeTourist.type), 
                $out += '" class="tr-', $line = 20, $out += $escape(arrangeTourist.lineProductId), 
                $out += "-", $line = 20, $out += $escape(arrangeTourist.startTime), $out += '"> <td> <label class="pos-rel"> <input type="checkbox" class="ace touristGroupMergeCheckBox"> <span class="lbl"></span> </label> </td> <td>', 
                $line = 24, $out += $escape(arrangeTourist.name), $out += "</td> <td>", $line = 25, 
                $out += $escape(arrangeTourist.type), $out += "</td> <td> ", $line = 27, 0 == arrangeTourist.customerType ? ($out += " 散客 ", 
                $line = 29) : ($out += " 团体 ", $line = 31), $out += " </td> <td>", $line = 33, $out += $escape(arrangeTourist.days), 
                $out += "</td> <td>", $line = 34, $out += $escape(arrangeTourist.startTime), $out += "</td> <td>大人", 
                $line = 35, $out += $escape(arrangeTourist.sumAdultCount), $out += "小孩", $line = 35, 
                $out += $escape(arrangeTourist.sumChildCount), $out += "</td> <td>大人", $line = 36, 
                $out += $escape(arrangeTourist.sumNoOperationAdultCount), $out += "小孩", $line = 36, 
                $out += $escape(arrangeTourist.sumNoOperationChildCount), $out += "</td> <td>", 
                $line = 37, $out += $escape(arrangeTourist.sumNeedPayAllMoney), $out += "</td> <td>", 
                $line = 38, $out += $escape(arrangeTourist.sumPayedMoney), $out += "</td> <td>", 
                $line = 39, $out += $escape(arrangeTourist.sumCurrentNeedPayMoney), $out += '</td> <td> <a data-entity-id="', 
                $line = 41, $out += $escape(arrangeTourist.lineProductId), $out += '" data-entity-startTime="', 
                $line = 41, $out += $escape(arrangeTourist.startTime), $out += '" class=" btn-divide cursor"> 分团 </a><a href="" class="cursor"> |</a> <a data-entity-id="', 
                $line = 44, $out += $escape(arrangeTourist.lineProductId), $out += '" data-entity-startTime="', 
                $line = 44, $out += $escape(arrangeTourist.startTime), $out += '" class=" btn-transfer cursor"> 转客 </a> </td> </tr> ', 
                $line = 49;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <div class="dataTables_info" id="dynamic-table_info" role="status" aria-live="polite">共计 ', 
            $line = 56, $out += $escape(recordSize), $out += ' 条记录</div> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers" id="dynamic-table_paginate"> <ul class="pagination"> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="first" href="javascript:void(0)">首页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="previous"href="javascript:void(0)">上一页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"> <a href="javascript:void(0)"> ', 
            $line = 65, 0 == totalPage ? ($out += " 0/0 ", $line = 67) : ($out += " ", $line = 68, 
            $out += $escape(pageNo + 1), $out += "/", $line = 68, $out += $escape(totalPage), 
            $out += " ", $line = 69), $out += ' </a> </li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="next" href="javascript:void(0)">下一页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="last" href="javascript:void(0)">尾页</a></li> </ul> </div> </div> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<table class="table table-striped table-bordered table-hover">\r\n	<thead>\r\n		<tr class="bg-blur">\r\n			<th>并团选择</th>\r\n			<th>线路产品</th>\r\n			<th>类别</th>\r\n			<th>应用范围</th>\r\n			<th>天数</th>\r\n			<th>出游日期</th>\r\n			<th>人数</th>\r\n			<th>未分团人数</th>\r\n			<th>应收款</th>\r\n			<th>已收款</th>\r\n			<th>现收款</th>\r\n			<th>操作</th>\r\n		</tr>\r\n	</thead>\r\n	<tbody>\r\n		{{each arrangeTouristGroupList as arrangeTourist}}\r\n			<tr data-entity-id="{{arrangeTourist.lineProductId}}" data-entity-startTime="{{arrangeTourist.startTime}}" data-entity-days="{{arrangeTourist.days}}" data-entity-name="{{arrangeTourist.name}}" data-entity-type="{{arrangeTourist.type}}" class="tr-{{arrangeTourist.lineProductId}}-{{arrangeTourist.startTime}}">\r\n				<td>\r\n					<label class="pos-rel"> <input type="checkbox" class="ace touristGroupMergeCheckBox"> <span class="lbl"></span> </label>\r\n				</td>\r\n				<td>{{arrangeTourist.name}}</td>\r\n				<td>{{arrangeTourist.type}}</td>\r\n				<td>\r\n					{{if arrangeTourist.customerType == 0}}\r\n						散客\r\n					{{else}}\r\n						团体\r\n					{{/if}}\r\n				</td>\r\n				<td>{{arrangeTourist.days}}</td>\r\n				<td>{{arrangeTourist.startTime}}</td>\r\n				<td>大人{{arrangeTourist.sumAdultCount}}小孩{{arrangeTourist.sumChildCount}}</td>\r\n				<td>大人{{arrangeTourist.sumNoOperationAdultCount}}小孩{{arrangeTourist.sumNoOperationChildCount}}</td>\r\n				<td>{{arrangeTourist.sumNeedPayAllMoney}}</td>\r\n				<td>{{arrangeTourist.sumPayedMoney}}</td>\r\n				<td>{{arrangeTourist.sumCurrentNeedPayMoney}}</td>\r\n				<td>\r\n					<a data-entity-id="{{arrangeTourist.lineProductId}}" data-entity-startTime="{{arrangeTourist.startTime}}" class="   btn-divide cursor">\r\n						分团\r\n					</a><a href="" class="cursor"> |</a>\r\n					<a data-entity-id="{{arrangeTourist.lineProductId}}" data-entity-startTime="{{arrangeTourist.startTime}}" class=" btn-transfer cursor">\r\n						转客\r\n					</a>\r\n				</td>\r\n			</tr>\r\n		{{/each}}\r\n\r\n	</tbody>\r\n</table>\r\n\r\n<div class="row pageMode">\r\n	<div class="col-xs-6">\r\n		<div class="dataTables_info" id="dynamic-table_info" role="status" aria-live="polite">共计 {{recordSize}} 条记录</div>\r\n	</div>\r\n	<div class="col-xs-6">\r\n		<div class="dataTables_paginate paging_simple_numbers" id="dynamic-table_paginate">\r\n			<ul class="pagination">\r\n				<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="first" href="javascript:void(0)">首页</a></li>\r\n				<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="previous"href="javascript:void(0)">上一页</a></li>\r\n				<li class="paginate_button" aria-controls="dynamic-table" tabindex="0">\r\n					<a href="javascript:void(0)">\r\n						{{if totalPage == 0}}\r\n							0/0\r\n						{{else}}\r\n							{{pageNo+1}}/{{totalPage}}\r\n						{{/if}}\r\n					</a>\r\n				</li>\r\n				<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="next"  href="javascript:void(0)">下一页</a></li>\r\n				<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="last" href="javascript:void(0)">尾页</a></li>\r\n			</ul>\r\n		</div>\r\n	</div>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});