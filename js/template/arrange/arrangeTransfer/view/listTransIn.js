/*TMODJS:{"debug":true,"version":128,"md5":"ff3703255d8dc9789b86aaefcc5d57f4"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeTransfer/view/listTransIn", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, pager = $data.pager, $escape = ($data.result, 
            $data.$index, $utils.$escape), $out = "";
            return $out += '<table class="table table-striped table-bordered table-hover"> <thead> <tr class="bg-blur"> <th>同行线路产品</th> <th>天数</th> <th>出游日期</th> <th>游客</th> <th>人数</th> <th>同行地接</th> <th>转客人</th> <th>联系电话</th> <th>应收</th> <th>已收</th> <th>我方状态</th> <th>操作</th> </tr> </thead> <tbody> ', 
            $line = 19, $each(pager.resultList, function(result) {
                $out += ' <tr data-entity-id="', $line = 20, $out += $escape(result.id), $out += '"> <td>', 
                $line = 21, null != result.lineProduct && ($line = 21, $out += $escape(result.lineProduct.name), 
                $line = 21), $out += "</td> <td>", $line = 22, null != result.lineProduct && ($line = 22, 
                $out += $escape(result.lineProduct.days), $line = 22), $out += "</td> <td>", $line = 23, 
                $out += $escape($helpers.dateFormat(result.startTime, "yyyy-MM-dd")), $out += "</td> <td>", 
                $line = 24, null != result.touristGroup && ($line = 24, null != result.touristGroup.contactMember && ($line = 24, 
                $out += $escape(result.touristGroup.contactMember.name), $line = 24), $line = 24), 
                $out += "</td> <td>", $line = 26, null != result.touristGroup && ($line = 26, $out += $escape(result.touristGroup.adultCount), 
                $line = 26), $out += "大", $line = 26, null != result.touristGroup && ($line = 26, 
                $out += $escape(result.touristGroup.childCount), $line = 26), $out += "小</td> <td> <!-- ", 
                $line = 29, null != result.partnerAgency ? ($out += " --> <!-- ", $line = 30, $out += $escape(result.partnerAgency.travelAgencyName), 
                $out += " --> <!-- ", $line = 31) : ($out += " -->  <!-- ", $line = 33), $out += " --> ", 
                $line = 34, null != result.fromName && ($out += " ", $line = 35, $out += $escape(result.fromName), 
                $out += " ", $line = 36), $out += " </td> <td> ", $line = 40, null != result.user && ($out += " ", 
                $line = 41, null != result.user.realName && ($out += " ", $line = 42, $out += $escape(result.user.realName), 
                $out += " ", $line = 43), $out += " ", $line = 44), $out += " </td> <td> ", $line = 49, 
                $out += $escape(result.fromNumber), $out += " </td> <td>", $line = 52, null != result.touristGroup && ($line = 52, 
                $out += $escape(result.touristGroup.transNeedPayAllMoney), $line = 52), $out += "</td> <td>", 
                $line = 53, null != result.touristGroup && ($line = 53, $out += $escape(result.touristGroup.transPayedMoney), 
                $line = 53), $out += '</td> <td class="result-status">', $line = 54, null == result.transName ? ($out += "未使用", 
                $line = 54) : ($line = 54, 0 == result.status ? ($out += '<span style="color:#D2691E;" data-status="0">未确认</span>', 
                $line = 54) : 1 == result.status ? ($out += '<span style="color: green;" data-status="1">已接收</span>', 
                $line = 54) : ($out += '<span style="color: red;" data-status="2">已拒收</span>', $line = 54), 
                $line = 54), $out += '</td> <td> <div class="hidden-sm hidden-xs btn-group"> <a data-entity-id="', 
                $line = 57, $out += $escape(result.id), $out += '" class="cursor btn-transferIn-view"> 查看 </a> <a data-entity-id="', 
                $line = 60, $out += $escape(result.id), $out += '" class="cursor btn-transferIn-edit R-right" data-right="1180007"> <label class="padding-right20">|</label> 确认 </a> <a data-entity-id="', 
                $line = 64, $out += $escape(result.id), $out += '" class="cursor btn-transferIn-delete R-right" data-right="1180008"> <label class="padding-right20">|</label> 拒绝 </a> </div> <div class="hidden-md hidden-lg"> <div class="inline pos-rel"> <button class="btn btn-minier btn-primary dropdown-toggle" data-toggle="dropdown" data-position="auto"> <i class="ace-icon fa fa-cog icon-only bigger-110"></i> </button> <ul class="dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close"> <li> <a data-entity-id="', 
                $line = 80, $out += $escape(result.id), $out += '" href="javascript:void(0)" class="tooltip-error btn-transferIn-view" data-rel="tooltip"> <span class="red"> <i class="ace-icon fa fa-search-plus bigger-120"></i> </span> </a> </li> <li> <a data-entity-id="', 
                $line = 88, $out += $escape(result.id), $out += '" href="javascript:void(0)" class="tooltip-success btn-transferIn-edit" data-rel="tooltip"> <span class="green"> <i class="ace-icon fa fa-pencil-square-o bigger-120"></i> </span> </a> </li>  <!-- <a data-entity-id="', 
                $line = 97, $out += $escape(result.id), $out += '" href="javascript:void(0)" class="tooltip-error btn-transferIn-accept" data-rel="tooltip"> -->      <li> <a data-entity-id="', 
                $line = 106, $out += $escape(result.id), $out += '" href="javascript:void(0)" class="tooltip-error btn-transferIn-delete" data-rel="tooltip"> <span class="red"> <i class="ace-icon fa fa-trash-o bigger-120"></i> </span> </a> </li> </ul> </div> </div> </td> </tr> ', 
                $line = 117;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <input type="hidden" name="pageNo" value="', 
            $line = 122, $out += $escape(pager.pageNo), $out += '" id="pagerH" /> <div class="dataTables_info" id="dynamic-table_info" role="status" aria-live="polite">共计', 
            $line = 123, $out += $escape(pager.totalCount), $out += '条记录</div> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers" id="dynamic-table_paginate"> <ul class="pagination"> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="first" href="javascript:void(0)">首页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="previous"href="javascript:void(0)">上一页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"> <a href="javascript:void(0)"> ', 
            $line = 132, $out += $escape(pager.pageNo + 1), $out += "/", $line = 132, $out += $escape(pager.totalPage), 
            $out += ' </a> </li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="next" href="javascript:void(0)">下一页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="last" href="javascript:void(0)">尾页</a></li> </ul> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<table class="table table-striped table-bordered table-hover">\r\n<thead>\r\n	<tr class="bg-blur">\r\n		<th>同行线路产品</th>\r\n		<th>天数</th>\r\n		<th>出游日期</th>\r\n		<th>游客</th>\r\n		<th>人数</th>\r\n		<th>同行地接</th>\r\n		<th>转客人</th>\r\n		<th>联系电话</th>\r\n		<th>应收</th>\r\n		<th>已收</th>\r\n		<th>我方状态</th>\r\n		<th>操作</th>\r\n	</tr>\r\n</thead>\r\n <tbody>\r\n 	{{each pager.resultList as result}}\r\n		<tr data-entity-id="{{result.id}}">\r\n			<td>{{if result.lineProduct != null}}{{result.lineProduct.name}}{{/if}}</td>\r\n			<td>{{if result.lineProduct != null}}{{result.lineProduct.days}}{{/if}}</td>\r\n			<td>{{result.startTime | dateFormat:\'yyyy-MM-dd\'}}</td>\r\n			<td>{{if result.touristGroup!=null}}{{if result.touristGroup.contactMember!=null}}{{result.touristGroup.contactMember.name}}{{/if}}{{/if}}</td>\r\n\r\n			<td>{{if result.touristGroup!=null}}{{result.touristGroup.adultCount}}{{/if}}大{{if result.touristGroup!=null}}{{result.touristGroup.childCount}}{{/if}}小</td>\r\n\r\n			<td>\r\n<!-- 				{{if result.partnerAgency!=null}} -->\r\n<!-- 				   {{result.partnerAgency.travelAgencyName}} -->\r\n<!-- 				{{else}}     -->\r\n<!-- 					无 -->\r\n<!-- 			    {{/if}} -->\r\n				{{if result.fromName!=null}}\r\n					{{result.fromName}}\r\n				{{/if}}\r\n			</td>\r\n\r\n			<td>\r\n			   {{if result.user!=null}}\r\n					{{if result.user.realName!=null}}\r\n				        {{result.user.realName}}\r\n				 	{{/if}}\r\n				{{/if}}\r\n			</td>\r\n\r\n\r\n			<td>\r\n			   {{result.fromNumber}}\r\n			</td>\r\n\r\n			<td>{{if result.touristGroup != null}}{{result.touristGroup.transNeedPayAllMoney}}{{/if}}</td>\r\n			<td>{{if result.touristGroup != null}}{{result.touristGroup.transPayedMoney}}{{/if}}</td>\r\n			<td class="result-status">{{if result.transName==null}}未使用{{else}}{{if result.status == 0}}<span style="color:#D2691E;" data-status="0">未确认</span>{{else if result.status == 1}}<span style="color: green;" data-status="1">已接收</span>{{else}}<span style="color: red;" data-status="2">已拒收</span>{{/if}}{{/if}}</td>\r\n			  <td>\r\n				<div class="hidden-sm hidden-xs btn-group">\r\n					<a data-entity-id="{{result.id}}" class="cursor btn-transferIn-view">\r\n						查看\r\n					</a>\r\n					<a data-entity-id="{{result.id}}" class="cursor btn-transferIn-edit R-right" data-right="1180007">\r\n						<label class="padding-right20">|</label>\r\n						确认\r\n					</a>\r\n					<a data-entity-id="{{result.id}}" class="cursor btn-transferIn-delete R-right" data-right="1180008">\r\n						<label class="padding-right20">|</label>\r\n						拒绝\r\n					</a>\r\n\r\n				</div>\r\n\r\n				<div class="hidden-md hidden-lg">\r\n					<div class="inline pos-rel">\r\n						<button class="btn btn-minier btn-primary dropdown-toggle" data-toggle="dropdown" data-position="auto">\r\n							<i class="ace-icon fa fa-cog icon-only bigger-110"></i>\r\n						</button>\r\n\r\n						<ul class="dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close">\r\n\r\n							<li>\r\n								<a data-entity-id="{{result.id}}" href="javascript:void(0)" class="tooltip-error btn-transferIn-view" data-rel="tooltip">\r\n									<span class="red">\r\n										<i class="ace-icon fa fa-search-plus bigger-120"></i>\r\n									</span>\r\n								</a>\r\n							</li>\r\n\r\n							<li>\r\n								<a data-entity-id="{{result.id}}" href="javascript:void(0)" class="tooltip-success btn-transferIn-edit" data-rel="tooltip">\r\n									<span class="green">\r\n										<i class="ace-icon fa fa-pencil-square-o bigger-120"></i>\r\n									</span>\r\n								</a>\r\n							</li>\r\n\r\n\r\n<!-- 						   <li> -->\r\n<!-- 								<a data-entity-id="{{result.id}}" href="javascript:void(0)" class="tooltip-error btn-transferIn-accept" data-rel="tooltip"> -->\r\n<!-- 									<span class="red"> -->\r\n<!-- 										<i class="ace-icon fa fa-check bigger-120"></i> -->\r\n<!-- 									</span> -->\r\n<!-- 								</a> -->\r\n<!-- 							</li> -->\r\n\r\n\r\n					        <li>\r\n								<a data-entity-id="{{result.id}}" href="javascript:void(0)" class="tooltip-error btn-transferIn-delete" data-rel="tooltip">\r\n									<span class="red">\r\n										<i class="ace-icon fa fa-trash-o bigger-120"></i>\r\n									</span>\r\n								</a>\r\n							</li>\r\n						</ul>\r\n					</div>\r\n				</div>\r\n			</td>\r\n		</tr>\r\n	   {{/each}}\r\n	</tbody>\r\n</table>\r\n<div class="row pageMode">\r\n	<div class="col-xs-6">\r\n		<input type="hidden" name="pageNo" value="{{pager.pageNo}}" id="pagerH" />\r\n		<div class="dataTables_info" id="dynamic-table_info" role="status" aria-live="polite">共计{{pager.totalCount}}条记录</div>\r\n	</div>\r\n	<div class="col-xs-6">\r\n		<div class="dataTables_paginate paging_simple_numbers" id="dynamic-table_paginate">\r\n			<ul class="pagination">\r\n				<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="first" href="javascript:void(0)">首页</a></li>\r\n				<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="previous"href="javascript:void(0)">上一页</a></li>\r\n				<li class="paginate_button" aria-controls="dynamic-table" tabindex="0">\r\n					<a href="javascript:void(0)">\r\n					{{pager.pageNo+1}}/{{pager.totalPage}}\r\n					</a>\r\n				</li>\r\n				<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="next"  href="javascript:void(0)">下一页</a></li>\r\n				<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="last" href="javascript:void(0)">尾页</a></li>\r\n			</ul>\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});