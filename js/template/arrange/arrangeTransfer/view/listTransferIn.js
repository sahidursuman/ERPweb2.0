/*TMODJS:{"debug":true,"version":44,"md5":"71eb90cb1987dc6a750cbb1c156454a6"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeTransfer/view/listTransferIn", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, result = $data.result, $escape = ($data.$index, 
            $utils.$escape), searchParam = $data.searchParam, $out = "";
            return $out += '<table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr class="bg-blur"> <th>同行线路产品</th> <th>天数</th> <th>游客</th> <th>客户总社</th> <th>转客人</th> <th>联系电话</th> <th>应收</th>  <th>现收</th> <th>我方状态</th> <th>操作</th> </tr> </thead> <tbody class="T-listTransferIn"> ', 
            $line = 18, $each(result, function(result) {
                $out += ' <tr data-value="', $line = 19, $out += $escape(result.id), $out += '"> <td class="h-touristGroupInfo"> <p class="h-orderNumber">', 
                $line = 21, null != result.lineProduct && ($line = 21, $out += $escape(result.lineProduct.name), 
                $line = 21), $out += '</p> <p class=""> <span class="F-float F-count">', $line = 23, 
                null != result.touristGroup && ($line = 23, $out += $escape(result.touristGroup.adultCount), 
                $line = 23), $out += '</span>大 <span class="F-float F-count">', $line = 24, null != result.touristGroup && ($line = 24, 
                $out += $escape(result.touristGroup.childCount), $line = 24), $out += '</span>小 </p> <p class="h-lineName">', 
                $line = 26, $out += $escape($helpers.dateFormat(result.startTime, "yyyy-MM-dd")), 
                $out += '</p> </td> <td><span class="F-float F-count">', $line = 28, null != result.lineProduct && ($line = 28, 
                $out += $escape(result.lineProduct.days), $line = 28), $out += "</span></td> <td>", 
                $line = 29, null != result.touristGroup && ($line = 29, null != result.touristGroup.contactMember && ($line = 29, 
                $out += $escape(result.touristGroup.contactMember.name), $line = 29), $line = 29), 
                $out += "</td> <td> ", $line = 31, null != result.fromName && ($out += " ", $line = 32, 
                $out += $escape(result.fromName), $out += " ", $line = 33), $out += " </td> <td> ", 
                $line = 37, null != result.user && ($out += " ", $line = 38, null != result.user.realName && ($out += " ", 
                $line = 39, $out += $escape(result.user.realName), $out += " ", $line = 40), $out += " ", 
                $line = 41), $out += " </td> <td> ", $line = 46, $out += $escape(result.fromNumber), 
                $out += ' </td> <td><span class="F-float F-money">', $line = 49, null != result.touristGroup && ($line = 49, 
                $out += $escape(result.touristGroup.transNeedPayAllMoney), $line = 49), $out += '</span></td> <!--<td><span class="F-float F-money">', 
                $line = 50, null != result.touristGroup && ($line = 50, $out += $escape(result.touristGroup.transPayedMoney), 
                $line = 50), $out += '</span></td>--> <td><span class="F-float F-money">', $line = 51, 
                $out += $escape(result.touristGroup.currentNeedPayMoney), $out += '</span></td> <td class="result-status">', 
                $line = 52, null == result.transName ? ($out += "未使用", $line = 52) : ($line = 52, 
                0 == result.status ? ($out += '<span style="color:#D2691E;" data-status="0">未确认</span>', 
                $line = 52) : 1 == result.status ? ($out += '<span style="color: green;" data-status="1">已接收</span>', 
                $line = 52) : ($out += '<span style="color: red;" data-status="2">已拒收</span>', $line = 52), 
                $line = 52), $out += '</td> <td> <div class="hidden-sm hidden-xs btn-group"> <a data-value="', 
                $line = 55, $out += $escape(result.id), $out += '" class="cursor T-transferIn-view T-action"> 查看 </a> <a data-value="', 
                $line = 58, $out += $escape(result.id), $out += '" class="cursor ', $line = 58, 
                0 == result.status && ($out += "T-transferIn-confirm", $line = 58), $out += ' R-right T-action" style="', 
                $line = 58, (1 == result.status || 2 == result.status) && ($out += " color:#bbb; ", 
                $line = 58), $out += '" data-right="1180007"> <label class="padding-right20">|</label> 确认 </a> <a data-value="', 
                $line = 62, $out += $escape(result.id), $out += '" class="cursor ', $line = 62, 
                1 != result.status && 2 != result.status && ($out += "T-transferIn-refuse", $line = 62), 
                $out += ' R-right T-action" style="', $line = 62, (1 == result.status || 2 == result.status) && ($out += " color:#bbb; ", 
                $line = 62), $out += '" data-right="1180008"> <label class="padding-right20">|</label> 拒绝 </a> </div> <div class="hidden-md hidden-lg"> <div class="inline pos-rel"> <button class="btn btn-minier btn-primary dropdown-toggle" data-toggle="dropdown" data-position="auto"> <i class="ace-icon fa fa-cog icon-only bigger-110"></i> </button> <ul class="dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close"> <li> <a data-value="', 
                $line = 78, $out += $escape(result.id), $out += '" href="javascript:void(0)" class="tooltip-error T-transferIn-view" data-rel="tooltip"> <span class="red"> <i class="ace-icon fa fa-search-plus bigger-120"></i> </span> </a> </li> <li> <a data-value="', 
                $line = 86, $out += $escape(result.id), $out += '" href="javascript:void(0)" class="tooltip-success T-transferIn-confirm" data-rel="tooltip"> <span class="green"> <i class="ace-icon fa fa-pencil-square-o bigger-120"></i> </span> </a> </li> <li> <a data-value="', 
                $line = 94, $out += $escape(result.id), $out += '" href="javascript:void(0)" class="tooltip-error T-transferIn-refuse" data-rel="tooltip"> <span class="red"> <i class="ace-icon fa fa-trash-o bigger-120"></i> </span> </a> </li> </ul> </div> </div> </td> </tr> ', 
                $line = 105;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 110, $out += $escape(searchParam.totalCount), $out += '条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<table class="table table-striped table-bordered table-hover T-showHighLight">\r\n<thead>\r\n	<tr class="bg-blur">\r\n		<th>同行线路产品</th>\r\n		<th>天数</th>\r\n		<th>游客</th>\r\n		<th>客户总社</th>\r\n		<th>转客人</th>\r\n		<th>联系电话</th>\r\n		<th>应收</th>\r\n		<!-- <th>已收</th> -->\r\n		<th>现收</th>\r\n		<th>我方状态</th>\r\n		<th>操作</th>\r\n	</tr>\r\n</thead>\r\n <tbody class="T-listTransferIn">\r\n 	{{each result as result}}\r\n		<tr data-value="{{result.id}}">\r\n			<td class="h-touristGroupInfo">\r\n			 	<p class="h-orderNumber">{{if result.lineProduct != null}}{{result.lineProduct.name}}{{/if}}</p>\r\n                <p class="">\r\n	                <span class="F-float F-count">{{if result.touristGroup!=null}}{{result.touristGroup.adultCount}}{{/if}}</span>大\r\n	                <span class="F-float F-count">{{if result.touristGroup!=null}}{{result.touristGroup.childCount}}{{/if}}</span>小\r\n	            </p>\r\n                <p class="h-lineName">{{result.startTime | dateFormat:\'yyyy-MM-dd\'}}</p>\r\n            </td>\r\n			<td><span class="F-float F-count">{{if result.lineProduct != null}}{{result.lineProduct.days}}{{/if}}</span></td>\r\n			<td>{{if result.touristGroup!=null}}{{if result.touristGroup.contactMember!=null}}{{result.touristGroup.contactMember.name}}{{/if}}{{/if}}</td>\r\n			<td>\r\n				{{if result.fromName!=null}}\r\n					{{result.fromName}}\r\n				{{/if}}\r\n			</td>\r\n\r\n			<td>\r\n			   {{if result.user!=null}}\r\n					{{if result.user.realName!=null}}\r\n				        {{result.user.realName}}\r\n				 	{{/if}}\r\n				{{/if}}\r\n			</td>\r\n  \r\n\r\n			<td>\r\n			   {{result.fromNumber}}\r\n			</td>\r\n\r\n			<td><span class="F-float F-money">{{if result.touristGroup != null}}{{result.touristGroup.transNeedPayAllMoney}}{{/if}}</span></td>\r\n			<!--<td><span class="F-float F-money">{{if result.touristGroup != null}}{{result.touristGroup.transPayedMoney}}{{/if}}</span></td>-->			\r\n            <td><span class="F-float F-money">{{result.touristGroup.currentNeedPayMoney}}</span></td>  \r\n			<td class="result-status">{{if result.transName==null}}未使用{{else}}{{if result.status == 0}}<span style="color:#D2691E;" data-status="0">未确认</span>{{else if result.status == 1}}<span style="color: green;" data-status="1">已接收</span>{{else}}<span style="color: red;" data-status="2">已拒收</span>{{/if}}{{/if}}</td>\r\n			  <td>\r\n				<div class="hidden-sm hidden-xs btn-group">\r\n					<a data-value="{{result.id}}" class="cursor T-transferIn-view T-action">\r\n						查看\r\n					</a>\r\n					<a data-value="{{result.id}}" class="cursor {{if result.status == 0}}T-transferIn-confirm{{/if}}  R-right T-action"  style="{{if result.status==1 || result.status ==2}} color:#bbb; {{/if}}" data-right="1180007">\r\n						<label class="padding-right20">|</label>\r\n						确认\r\n					</a>\r\n					<a data-value="{{result.id}}" class="cursor {{if result.status!=1 && result.status!=2}}T-transferIn-refuse{{/if}} R-right T-action" style="{{if result.status==1 || result.status==2}} color:#bbb; {{/if}}"  data-right="1180008">\r\n						<label class="padding-right20">|</label>\r\n						拒绝\r\n					</a>\r\n\r\n				</div>\r\n\r\n				<div class="hidden-md hidden-lg">\r\n					<div class="inline pos-rel">\r\n						<button class="btn btn-minier btn-primary dropdown-toggle" data-toggle="dropdown" data-position="auto">\r\n							<i class="ace-icon fa fa-cog icon-only bigger-110"></i>\r\n						</button>\r\n\r\n						<ul class="dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close">\r\n\r\n							<li>\r\n								<a data-value="{{result.id}}" href="javascript:void(0)" class="tooltip-error T-transferIn-view" data-rel="tooltip">\r\n									<span class="red">\r\n										<i class="ace-icon fa fa-search-plus bigger-120"></i>\r\n									</span>\r\n								</a>\r\n							</li>\r\n\r\n							<li>\r\n								<a data-value="{{result.id}}" href="javascript:void(0)" class="tooltip-success T-transferIn-confirm" data-rel="tooltip">\r\n									<span class="green">\r\n										<i class="ace-icon fa fa-pencil-square-o bigger-120"></i>\r\n									</span>\r\n								</a>\r\n							</li>\r\n\r\n					        <li>\r\n								<a data-value="{{result.id}}" href="javascript:void(0)" class="tooltip-error T-transferIn-refuse" data-rel="tooltip">\r\n									<span class="red">\r\n										<i class="ace-icon fa fa-trash-o bigger-120"></i>\r\n									</span>\r\n								</a>\r\n							</li>\r\n						</ul>\r\n					</div>\r\n				</div>\r\n			</td>\r\n		</tr>\r\n	   {{/each}}\r\n	</tbody>\r\n</table>\r\n<div class="row pageMode">\r\n	<div class="col-xs-6">\r\n		<small>共计 {{searchParam.totalCount}}条记录</small>\r\n	</div>\r\n	<div class="col-xs-6">\r\n		<div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});