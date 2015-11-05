/*TMODJS:{"debug":true,"version":520,"md5":"b8b2d7baa1c1dee9d097851339551de6"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeTransfer/view/listTransIn", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, pager = $data.pager, $escape = ($data.result, 
            $data.$index, $utils.$escape), $out = "";
            return $out += '<table class="table table-striped table-bordered table-hover"> <thead> <tr class="bg-blur"> <th>同行线路产品</th> <th>天数</th> <th>出游日期</th> <th>游客</th> <th>人数</th> <th>来源总社</th> <th>转客人</th> <th>联系电话</th> <th>应收</th> <th>已收</th> <th>现收</th> <th>我方状态</th> <th>操作</th> </tr> </thead> <tbody> ', 
            $line = 20, $each(pager.resultList, function(result) {
                $out += ' <tr data-entity-id="', $line = 21, $out += $escape(result.id), $out += '"> <td>', 
                $line = 22, null != result.lineProduct && ($line = 22, $out += $escape(result.lineProduct.name), 
                $line = 22), $out += "</td> <td>", $line = 23, null != result.lineProduct && ($line = 23, 
                $out += $escape(result.lineProduct.days), $line = 23), $out += "</td> <td>", $line = 24, 
                $out += $escape($helpers.dateFormat(result.startTime, "yyyy-MM-dd")), $out += "</td> <td>", 
                $line = 25, null != result.touristGroup && ($line = 25, null != result.touristGroup.contactMember && ($line = 25, 
                $out += $escape(result.touristGroup.contactMember.name), $line = 25), $line = 25), 
                $out += "</td> <td>", $line = 27, null != result.touristGroup && ($line = 27, $out += $escape(result.touristGroup.adultCount), 
                $line = 27), $out += "大", $line = 27, null != result.touristGroup && ($line = 27, 
                $out += $escape(result.touristGroup.childCount), $line = 27), $out += "小</td> <td> <!-- ", 
                $line = 30, null != result.partnerAgency ? ($out += " --> <!-- ", $line = 31, $out += $escape(result.partnerAgency.travelAgencyName), 
                $out += " --> <!-- ", $line = 32) : ($out += " -->  <!-- ", $line = 34), $out += " --> ", 
                $line = 35, null != result.fromName && ($out += " ", $line = 36, $out += $escape(result.fromName), 
                $out += " ", $line = 37), $out += " </td> <td> ", $line = 41, null != result.user && ($out += " ", 
                $line = 42, null != result.user.realName && ($out += " ", $line = 43, $out += $escape(result.user.realName), 
                $out += " ", $line = 44), $out += " ", $line = 45), $out += " </td> <td> ", $line = 50, 
                $out += $escape(result.fromNumber), $out += " </td> <td>", $line = 53, null != result.touristGroup && ($line = 53, 
                $out += $escape(result.touristGroup.transNeedPayAllMoney), $line = 53), $out += "</td> <td>", 
                $line = 54, null != result.touristGroup && ($line = 54, $out += $escape(result.touristGroup.transPayedMoney), 
                $line = 54), $out += "</td> <td>", $line = 55, $out += $escape(result.touristGroup.currentNeedPayMoney), 
                $out += '</td> <td class="result-status">', $line = 56, null == result.transName ? ($out += "未使用", 
                $line = 56) : ($line = 56, 0 == result.status ? ($out += '<span style="color:#D2691E;" data-status="0">未确认</span>', 
                $line = 56) : 1 == result.status ? ($out += '<span style="color: green;" data-status="1">已接收</span>', 
                $line = 56) : ($out += '<span style="color: red;" data-status="2">已拒收</span>', $line = 56), 
                $line = 56), $out += '</td> <td> <div class="hidden-sm hidden-xs btn-group"> <a data-entity-id="', 
                $line = 59, $out += $escape(result.id), $out += '" class="cursor btn-transferIn-view"> 查看 </a> <a data-entity-id="', 
                $line = 62, $out += $escape(result.id), $out += '" class="cursor ', $line = 62, 
                1 != result.status && 2 != result.status && ($out += "btn-transferIn-edit", $line = 62), 
                $out += ' R-right" style="', $line = 62, (1 == result.status || 2 != result.status) && ($out += " color:#bbb; ", 
                $line = 62), $out += '" data-right="1180007"> <label class="padding-right20">|</label> 确认 </a> <a data-entity-id="', 
                $line = 66, $out += $escape(result.id), $out += '" class="cursor ', $line = 66, 
                1 != result.status && 2 != result.status && ($out += "btn-transferIn-delete", $line = 66), 
                $out += ' R-right" style="', $line = 66, (1 == result.status || 2 == result.status) && ($out += " color:#bbb; ", 
                $line = 66), $out += '" data-right="1180008"> <label class="padding-right20">|</label> 拒绝 </a> </div> <div class="hidden-md hidden-lg"> <div class="inline pos-rel"> <button class="btn btn-minier btn-primary dropdown-toggle" data-toggle="dropdown" data-position="auto"> <i class="ace-icon fa fa-cog icon-only bigger-110"></i> </button> <ul class="dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close"> <li> <a data-entity-id="', 
                $line = 82, $out += $escape(result.id), $out += '" href="javascript:void(0)" class="tooltip-error btn-transferIn-view" data-rel="tooltip"> <span class="red"> <i class="ace-icon fa fa-search-plus bigger-120"></i> </span> </a> </li> <li> <a data-entity-id="', 
                $line = 90, $out += $escape(result.id), $out += '" href="javascript:void(0)" class="tooltip-success btn-transferIn-edit" data-rel="tooltip"> <span class="green"> <i class="ace-icon fa fa-pencil-square-o bigger-120"></i> </span> </a> </li>  <!-- <a data-entity-id="', 
                $line = 99, $out += $escape(result.id), $out += '" href="javascript:void(0)" class="tooltip-error btn-transferIn-accept" data-rel="tooltip"> -->      <li> <a data-entity-id="', 
                $line = 108, $out += $escape(result.id), $out += '" href="javascript:void(0)" class="tooltip-error btn-transferIn-delete" data-rel="tooltip"> <span class="red"> <i class="ace-icon fa fa-trash-o bigger-120"></i> </span> </a> </li> </ul> </div> </div> </td> </tr> ', 
                $line = 119;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 124, $out += $escape(pager.totalCount), $out += '条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<table class="table table-striped table-bordered table-hover">\r\n<thead>\r\n	<tr class="bg-blur">\r\n		<th>同行线路产品</th>\r\n		<th>天数</th>\r\n		<th>出游日期</th>\r\n		<th>游客</th>\r\n		<th>人数</th>\r\n		<th>来源总社</th>\r\n		<th>转客人</th>\r\n		<th>联系电话</th>\r\n		<th>应收</th>\r\n		<th>已收</th>\r\n		<th>现收</th>\r\n		<th>我方状态</th>\r\n		<th>操作</th>\r\n	</tr>\r\n</thead>\r\n <tbody>\r\n 	{{each pager.resultList as result}}\r\n		<tr data-entity-id="{{result.id}}">\r\n			<td>{{if result.lineProduct != null}}{{result.lineProduct.name}}{{/if}}</td>\r\n			<td>{{if result.lineProduct != null}}{{result.lineProduct.days}}{{/if}}</td>\r\n			<td>{{result.startTime | dateFormat:\'yyyy-MM-dd\'}}</td>\r\n			<td>{{if result.touristGroup!=null}}{{if result.touristGroup.contactMember!=null}}{{result.touristGroup.contactMember.name}}{{/if}}{{/if}}</td>\r\n\r\n			<td>{{if result.touristGroup!=null}}{{result.touristGroup.adultCount}}{{/if}}大{{if result.touristGroup!=null}}{{result.touristGroup.childCount}}{{/if}}小</td>\r\n\r\n			<td>\r\n<!-- 				{{if result.partnerAgency!=null}} -->\r\n<!-- 				   {{result.partnerAgency.travelAgencyName}} -->\r\n<!-- 				{{else}}     -->\r\n<!-- 					无 -->\r\n<!-- 			    {{/if}} -->\r\n				{{if result.fromName!=null}}\r\n					{{result.fromName}}\r\n				{{/if}}\r\n			</td>\r\n\r\n			<td>\r\n			   {{if result.user!=null}}\r\n					{{if result.user.realName!=null}}\r\n				        {{result.user.realName}}\r\n				 	{{/if}}\r\n				{{/if}}\r\n			</td>\r\n  \r\n\r\n			<td>\r\n			   {{result.fromNumber}}\r\n			</td>\r\n\r\n			<td>{{if result.touristGroup != null}}{{result.touristGroup.transNeedPayAllMoney}}{{/if}}</td>\r\n			<td>{{if result.touristGroup != null}}{{result.touristGroup.transPayedMoney}}{{/if}}</td>\r\n			<td>{{result.touristGroup.currentNeedPayMoney}}</td>  \r\n			<td class="result-status">{{if result.transName==null}}未使用{{else}}{{if result.status == 0}}<span style="color:#D2691E;" data-status="0">未确认</span>{{else if result.status == 1}}<span style="color: green;" data-status="1">已接收</span>{{else}}<span style="color: red;" data-status="2">已拒收</span>{{/if}}{{/if}}</td>\r\n			  <td>\r\n				<div class="hidden-sm hidden-xs btn-group">\r\n					<a data-entity-id="{{result.id}}" class="cursor btn-transferIn-view">\r\n						查看\r\n					</a>\r\n					<a data-entity-id="{{result.id}}" class="cursor {{if result.status!=1 && result.status!=2}}btn-transferIn-edit{{/if}}  R-right"  style="{{if result.status==1 || result.status!=2}} color:#bbb; {{/if}}" data-right="1180007">\r\n						<label class="padding-right20">|</label>\r\n						确认\r\n					</a>\r\n					<a data-entity-id="{{result.id}}" class="cursor {{if result.status!=1 && result.status!=2}}btn-transferIn-delete{{/if}} R-right" style="{{if result.status==1 || result.status==2}} color:#bbb; {{/if}}"  data-right="1180008">\r\n						<label class="padding-right20">|</label>\r\n						拒绝\r\n					</a>\r\n\r\n				</div>\r\n\r\n				<div class="hidden-md hidden-lg">\r\n					<div class="inline pos-rel">\r\n						<button class="btn btn-minier btn-primary dropdown-toggle" data-toggle="dropdown" data-position="auto">\r\n							<i class="ace-icon fa fa-cog icon-only bigger-110"></i>\r\n						</button>\r\n\r\n						<ul class="dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close">\r\n\r\n							<li>\r\n								<a data-entity-id="{{result.id}}" href="javascript:void(0)" class="tooltip-error btn-transferIn-view" data-rel="tooltip">\r\n									<span class="red">\r\n										<i class="ace-icon fa fa-search-plus bigger-120"></i>\r\n									</span>\r\n								</a>\r\n							</li>\r\n\r\n							<li>\r\n								<a data-entity-id="{{result.id}}" href="javascript:void(0)" class="tooltip-success btn-transferIn-edit" data-rel="tooltip">\r\n									<span class="green">\r\n										<i class="ace-icon fa fa-pencil-square-o bigger-120"></i>\r\n									</span>\r\n								</a>\r\n							</li>\r\n\r\n\r\n<!-- 						   <li> -->\r\n<!-- 								<a data-entity-id="{{result.id}}" href="javascript:void(0)" class="tooltip-error btn-transferIn-accept" data-rel="tooltip"> -->\r\n<!-- 									<span class="red"> -->\r\n<!-- 										<i class="ace-icon fa fa-check bigger-120"></i> -->\r\n<!-- 									</span> -->\r\n<!-- 								</a> -->\r\n<!-- 							</li> -->\r\n\r\n\r\n					        <li>\r\n								<a data-entity-id="{{result.id}}" href="javascript:void(0)" class="tooltip-error btn-transferIn-delete" data-rel="tooltip">\r\n									<span class="red">\r\n										<i class="ace-icon fa fa-trash-o bigger-120"></i>\r\n									</span>\r\n								</a>\r\n							</li>\r\n						</ul>\r\n					</div>\r\n				</div>\r\n			</td>\r\n		</tr>\r\n	   {{/each}}\r\n	</tbody>\r\n</table>\r\n<div class="row pageMode">\r\n	<div class="col-xs-6">\r\n		<small>共计 {{pager.totalCount}}条记录</small>\r\n	</div>\r\n	<div class="col-xs-6">\r\n		<div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});