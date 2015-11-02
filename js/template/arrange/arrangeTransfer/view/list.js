/*TMODJS:{"debug":true,"version":345,"md5":"a5e87694c195e4998b27e712c65dff2f"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeTransfer/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, pager = $data.pager, $escape = ($data.result, 
            $data.$index, $utils.$escape), $out = "";
            return $out += '<table class="table table-striped table-bordered table-hover"> <thead> <tr class="bg-blur"> <th>同行地接</th> <th>游客</th> <th>联系电话</th> <th>人数</th> <th>应付款</th> <th>已付款</th> <th>转客人</th> <th>转客时间</th> <th>对方状态</th> <th>操作</th> </tr> </thead> <tbody> ', 
            $line = 17, $each(pager.resultList, function(result) {
                $out += " ", $line = 18, null != result && ($out += ' <tr data-entity-id="', $line = 19, 
                $out += $escape(result.id), $out += '"> <td>', $line = 20, $out += $escape(result.partnerAgency.travelAgencyName), 
                $out += "</td> ", $line = 21, null != result.touristGroup ? ($out += " <td> ", $line = 23, 
                null != result.touristGroup.contactMember && ($out += " ", $line = 24, $out += $escape(result.touristGroup.contactMember.name), 
                $out += " ", $line = 25), $out += " </td> <td> ", $line = 28, null != result.touristGroup.contactMember && ($out += " ", 
                $line = 29, $out += $escape(result.touristGroup.contactMember.mobileNumber), $out += " ", 
                $line = 30), $out += " </td> <td> ", $line = 34, $out += $escape(result.touristGroup.adultCount), 
                $out += "大", $line = 34, $out += $escape(result.touristGroup.childCount), $out += "小 </td> <td>", 
                $line = 36, $out += $escape(result.touristGroup.transNeedPayAllMoney), $out += "</td> <td>", 
                $line = 37, $out += $escape(result.touristGroup.transPayedMoney), $out += "</td> ", 
                $line = 38) : ($out += " <td></td> <td></td> <td>0大0小</td> <td></td> <td></td> ", 
                $line = 44), $out += " <td> ", $line = 46, null != result.user && ($out += " ", 
                $line = 47, null != result.user.realName && ($out += " ", $line = 48, $out += $escape(result.user.realName), 
                $out += " ", $line = 49), $out += " ", $line = 50), $out += " </td> <td>", $line = 52, 
                $out += $escape(result.createTime), $out += "</td> <td>", $line = 53, 0 == result.status ? ($out += '<span style="color:#D2691E;">未确认</span>', 
                $line = 53) : 1 == result.status ? ($out += '<span style="color: green;">已接收</span>', 
                $line = 53) : 2 == result.status ? ($out += '<span style="color: red;">已拒收</span>', 
                $line = 53) : ($out += '<span style="">未使用</span>', $line = 53), $out += '</td> <td> <div class="hidden-sm hidden-xs btn-group"> <a data-entity-id="', 
                $line = 56, $out += $escape(result.id), $out += '" class="cursor btn-transfer-view"> 查看 </a> <a data-entity-id="', 
                $line = 59, $out += $escape(result.id), $out += '" class="cursor ', $line = 59, 
                1 != result.status && ($out += "btn-transfer-edit", $line = 59), $out += ' R-right" ', 
                $line = 59, 1 == result.status && ($out += 'style="color:#bbb;"', $line = 59), $out += ' data-right="1180003"> <label class="padding-right20">|</label> 编辑 </a> <a data-entity-id="', 
                $line = 63, $out += $escape(result.id), $out += '" class="cursor ', $line = 63, 
                1 != result.status && ($out += "btn-transfer-delete", $line = 63), $out += ' R-right" ', 
                $line = 63, 1 == result.status && ($out += 'style="color:#bbb;"', $line = 63), $out += ' data-right="1180004"> <label class="padding-right20">|</label> 撤销 </a> </div> <div class="hidden-md hidden-lg"> <div class="inline pos-rel"> <button class="btn btn-minier btn-primary dropdown-toggle" data-toggle="dropdown" data-position="auto"> <i class="ace-icon fa fa-cog icon-only bigger-110"></i> </button> <ul class="dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close"> <li> <a data-entity-id="', 
                $line = 78, $out += $escape(result.id), $out += '" href="javascript:void(0)" class="tooltip-error btn-transfer-view" data-rel="tooltip"> <span class="red"> <i class="ace-icon fa fa-search-plus bigger-120"></i> </span> </a> </li> <li> <a data-entity-id="', 
                $line = 86, $out += $escape(result.id), $out += '" href="javascript:void(0)" class="tooltip-success btn-transfer-edit" data-rel="tooltip"> <span class="green"> <i class="ace-icon fa fa-pencil-square-o bigger-120"></i> </span> </a> </li> <li> <a data-entity-id="', 
                $line = 94, $out += $escape(result.id), $out += '" href="javascript:void(0)" class="tooltip-error btn-transfer-delete" data-rel="tooltip"> <span class="red"> <i class="ace-icon fa fa-trash-o bigger-120"></i> </span> </a> </li> </ul> </div> </div> </td> </tr> ', 
                $line = 105), $out += " ", $line = 106;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计', 
            $line = 111, $out += $escape(pager.totalCount), $out += '条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<table class="table table-striped table-bordered table-hover">\r\n<thead>\r\n	<tr class="bg-blur">\r\n		<th>同行地接</th>\r\n		<th>游客</th>\r\n		<th>联系电话</th>\r\n		<th>人数</th>           \r\n		<th>应付款</th>	  	\r\n		<th>已付款</th>  \r\n		<th>转客人</th>  \r\n		<th>转客时间</th>\r\n		<th>对方状态</th>   \r\n		<th>操作</th>    \r\n	</tr>\r\n</thead>\r\n <tbody>      \r\n 		{{each pager.resultList as result}}  \r\n 		{{if result!=null}}        \r\n			<tr data-entity-id="{{result.id}}">\r\n				<td>{{result.partnerAgency.travelAgencyName}}</td>\r\n				{{if result.touristGroup != null}}\r\n				<td>\r\n				    {{if result.touristGroup.contactMember!=null}}\r\n					   {{result.touristGroup.contactMember.name}}\r\n					{{/if}}\r\n				</td>\r\n				<td>\r\n					{{if result.touristGroup.contactMember!=null}}\r\n					    {{result.touristGroup.contactMember.mobileNumber}}\r\n					{{/if}}        \r\n				</td>\r\n				<td>\r\n				\r\n				    {{result.touristGroup.adultCount}}大{{result.touristGroup.childCount}}小\r\n				</td>	\r\n				<td>{{result.touristGroup.transNeedPayAllMoney}}</td>\r\n				<td>{{result.touristGroup.transPayedMoney}}</td>\r\n				{{else}}\r\n				<td></td>\r\n				<td></td>\r\n				<td>0大0小</td>	\r\n				<td></td>\r\n				<td></td>\r\n				{{/if}}\r\n				<td>    \r\n					{{if result.user!=null}}  \r\n						{{if result.user.realName!=null}}\r\n					        {{result.user.realName}}\r\n					 	{{/if}}    \r\n					{{/if}}\r\n				</td>\r\n				<td>{{result.createTime}}</td>        \r\n				<td>{{if result.status == 0}}<span style="color:#D2691E;">未确认</span>{{else if result.status == 1}}<span style="color: green;">已接收</span>{{else if result.status == 2}}<span style="color: red;">已拒收</span>{{else}}<span style="">未使用</span>{{/if}}</td>\r\n				<td>\r\n					<div class="hidden-sm hidden-xs btn-group">\r\n						<a data-entity-id="{{result.id}}" class="cursor  btn-transfer-view">\r\n							查看\r\n						</a>\r\n						<a data-entity-id="{{result.id}}" class="cursor {{if result.status != 1}}btn-transfer-edit{{/if}} R-right" {{if result.status == 1}}style="color:#bbb;"{{/if}} data-right="1180003">\r\n							<label class="padding-right20">|</label>\r\n							编辑\r\n						</a>\r\n						<a data-entity-id="{{result.id}}" class="cursor {{if result.status != 1}}btn-transfer-delete{{/if}} R-right" {{if result.status == 1}}style="color:#bbb;"{{/if}} data-right="1180004">\r\n							<label class="padding-right20">|</label>\r\n							撤销\r\n						</a>\r\n					</div>\r\n	\r\n					<div class="hidden-md hidden-lg">\r\n						<div class="inline pos-rel">\r\n							<button class="btn btn-minier btn-primary dropdown-toggle" data-toggle="dropdown" data-position="auto">\r\n								<i class="ace-icon fa fa-cog icon-only bigger-110"></i>\r\n							</button>\r\n	\r\n							<ul class="dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close">\r\n								\r\n								<li>\r\n									<a data-entity-id="{{result.id}}" href="javascript:void(0)" class="tooltip-error btn-transfer-view" data-rel="tooltip">\r\n										<span class="red">\r\n											<i class="ace-icon fa fa-search-plus bigger-120"></i>\r\n										</span>\r\n									</a>\r\n								</li>\r\n								\r\n								<li>\r\n									<a data-entity-id="{{result.id}}" href="javascript:void(0)" class="tooltip-success btn-transfer-edit" data-rel="tooltip">\r\n										<span class="green">\r\n											<i class="ace-icon fa fa-pencil-square-o bigger-120"></i>\r\n										</span>\r\n									</a>\r\n								</li>\r\n	\r\n								<li>\r\n									<a data-entity-id="{{result.id}}" href="javascript:void(0)" class="tooltip-error btn-transfer-delete" data-rel="tooltip">\r\n										<span class="red">\r\n											<i class="ace-icon fa fa-trash-o bigger-120"></i>\r\n										</span>\r\n									</a>\r\n								</li>\r\n							</ul>\r\n						</div>\r\n					</div>\r\n				</td>\r\n			</tr>\r\n		{{/if}}\r\n		{{/each}}\r\n	</tbody>\r\n</table>	\r\n<div class="row pageMode">\r\n	<div class="col-xs-6">\r\n		<small>共计{{pager.totalCount}}条记录</small>\r\n	</div>\r\n	<div class="col-xs-6">\r\n		<div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});