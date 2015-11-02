/*TMODJS:{"debug":true,"version":480,"md5":"f32b16097c10fc72bc472a8e7907511a"}*/
define(function(require) {
    return require("../../../template")("resource/touristGroup/view/list", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, touristGroupList = $data.touristGroupList, $escape = ($data.touristGroup, 
            $data.$index, $utils.$escape), recordSize = $data.recordSize, $out = "";
            return $out += '<div class="row touristGroupList"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover row"> <thead> <tr class="bg-blur"> <th >客户来源</th> <th >线路产品</th> <th>针对客源</th> <th >出游日期</th> <th>联系人</th> <th>人数</th> <th>应收</th> <th>已收</th> <th>现收</th> <th>未收</th> <th>买保险</th> <th>录入人</th> <th width="160">录入时间</th> <th>状态</th>  <th style="width:150px;">操作</th> </tr> </thead> <tbody>', 
            $line = 25, $each(touristGroupList, function(touristGroup) {
                $out += ' <tr class="touristGroup-', $line = 26, $out += $escape(touristGroup.id), 
                $out += '"> <td> ', $line = 28, null != touristGroup.partnerAgency && ($out += " ", 
                $line = 29, $out += $escape(touristGroup.partnerAgency.travelAgencyName), $out += " ", 
                $line = 30), $out += " </td> <td> ", $line = 33, null != touristGroup.lineProduct && ($out += " ", 
                $line = 34, $out += $escape(touristGroup.lineProduct.name), $out += " ", $line = 35), 
                $out += " </td> <td> ", $line = 38, null != touristGroup.lineProduct && ($out += " ", 
                $line = 39, 0 == touristGroup.lineProduct.customerType ? ($out += " 散客 ", $line = 41) : ($out += " 团体 ", 
                $line = 43), $out += " ", $line = 44), $out += " </td> <td> ", $line = 47, $out += $escape($helpers.dateFormat(touristGroup.startTime, "yyyy-MM-dd")), 
                $out += " </td> <td> ", $line = 50, null != touristGroup.touristGroupMember && ($out += " ", 
                $line = 51, $out += $escape(touristGroup.touristGroupMember.name), $out += " ", 
                $line = 52), $out += " </td> <td> ", $line = 55, $out += $escape(touristGroup.adultCount), 
                $out += "大 ", $line = 56, $out += $escape(touristGroup.childCount), $out += "小 </td> <td> ", 
                $line = 59, $out += $escape(touristGroup.needPayAllMoney), $out += " </td> <td> ", 
                $line = 62, $out += $escape(touristGroup.payedMoney), $out += " </td> <td>", $line = 64, 
                $out += $escape(touristGroup.currentNeedPayMoney), $out += "</td> <td>", $line = 65, 
                $out += $escape(touristGroup.unIncomeMoney), $out += "</td> <td> ", $line = 67, 
                1 == touristGroup.buyInsurance ? ($out += ' <i class="ace-icon fa fa-check green bigger-130"></i> ', 
                $line = 69) : 0 == touristGroup.buyInsurance && ($out += ' <i class="ace-icon fa fa-times red bigger-125"></i> ', 
                $line = 71), $out += " </td> <td> ", $line = 74, null != touristGroup.user && ($out += " ", 
                $line = 75, $out += $escape(touristGroup.user.realName), $out += " ", $line = 76), 
                $out += " </td> <td> ", $line = 79, $out += $escape(touristGroup.createTime), $out += ' </td> <td width="60"> ', 
                $line = 82, 0 == touristGroup.status ? ($out += " 已发团 ", $line = 84) : 1 == touristGroup.status ? ($out += " 未分团 ", 
                $line = 86) : 2 == touristGroup.status ? ($out += " 已分团 ", $line = 88) : 3 == touristGroup.status ? ($out += " 已转客 ", 
                $line = 90) : 4 == touristGroup.status ? ($out += " 已取消 ", $line = 92) : 5 == touristGroup.status ? ($out += " 已分段 ", 
                $line = 94) : 6 == touristGroup.status && ($out += " 已内转 ", $line = 96), $out += ' </td> <td> <div class="hidden-sm hidden-xs btn-group" style="width:120px;"> <a data-entity-id="', 
                $line = 100, $out += $escape(touristGroup.id), $out += '" class=" btn-touristGroup-view cursor"> 查看 </a> <a data-entity-id="', 
                $line = 103, $out += $escape(touristGroup.id), $out += '" class="', $line = 103, 
                0 == touristGroup.isInnerTransferConfirm && ($out += "btn-touristGroup-edit ", $line = 103), 
                $out += ' cursor R-right" data-right="1120003" ', $line = 103, 1 == touristGroup.isInnerTransferConfirm && ($out += 'style="color:#bbb;"', 
                $line = 103), $out += '> <label class="padding-right20">|</label> 编辑 </a> <a data-entity-id="', 
                $line = 107, $out += $escape(touristGroup.id), $out += '" class="', $line = 107, 
                1 == touristGroup.status && 0 == touristGroup.isInnerTransferConfirm && ($out += "btn-touristGroup-delete", 
                $line = 107), $out += ' cursor R-right" data-right="1120004" ', $line = 107, (1 != touristGroup.status || 0 != touristGroup.isInnerTransferConfirm) && ($out += 'style="color:#bbb;"', 
                $line = 107), $out += '> <label class="padding-right20">|</label> 删除 </a> </div> <div class="hidden-md hidden-lg"> <div class="inline pos-rel"> <button class="btn btn-minier btn-primary dropdown-toggle" data-toggle="dropdown" data-position="auto"> <i class="ace-icon fa fa-cog icon-only bigger-110"></i> </button> <ul class="dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close"> <li> <a data-entity-id="', 
                $line = 121, $out += $escape(touristGroup.id), $out += '" href="javascript:void(0)" class="tooltip-error btn-touristGroup-view" data-rel="tooltip"> <span class="red"> <i class="ace-icon fa fa-search-plus bigger-120"></i> </span> </a> </li> <li> <a data-entity-id="', 
                $line = 129, $out += $escape(touristGroup.id), $out += '" href="javascript:void(0)" class="tooltip-success btn-touristGroup-edit" data-rel="tooltip"> <span class="green"> <i class="ace-icon fa fa-pencil-square-o bigger-120"></i> </span> </a> </li> <li> <a data-entity-id="', 
                $line = 137, $out += $escape(touristGroup.id), $out += '" href="javascript:void(0)" class="tooltip-error btn-touristGroup-delete" data-rel="tooltip"> <span class="red"> <i class="ace-icon fa fa-trash-o bigger-120"></i> </span> </a> </li> </ul> </div> </div> </td> </tr>', 
                $line = 147;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 152, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row touristGroupList">	\r\n	<div class="col-xs-12">\r\n		<table class="table table-striped table-bordered table-hover row">\r\n			<thead>\r\n				<tr class="bg-blur">  \r\n					<th >客户来源</th>\r\n					<th >线路产品</th>\r\n					<th>针对客源</th>               \r\n					<th >出游日期</th>\r\n					<th>联系人</th>\r\n					<th>人数</th>\r\n					<th>应收</th>\r\n					<th>已收</th>\r\n					<th>现收</th>\r\n					<th>未收</th>\r\n					<th>买保险</th>\r\n					<th>录入人</th>\r\n					<th width="160">录入时间</th>\r\n					<th>状态</th>\r\n					<!-- <th>安排</th> -->\r\n					<th style="width:150px;">操作</th>\r\n				</tr>\r\n			</thead>\r\n		\r\n			<tbody>{{each touristGroupList as touristGroup}}\r\n				<tr class="touristGroup-{{touristGroup.id}}">\r\n					<td>\r\n						{{if touristGroup.partnerAgency != null}}\r\n							{{touristGroup.partnerAgency.travelAgencyName}}\r\n						{{/if}}\r\n					</td>\r\n					<td>\r\n						{{if touristGroup.lineProduct != null}}\r\n							{{touristGroup.lineProduct.name}}\r\n						{{/if}}\r\n					</td>\r\n					<td>\r\n					    {{if touristGroup.lineProduct != null}}    \r\n							{{if touristGroup.lineProduct.customerType==0}}\r\n								  散客\r\n								{{else}}               \r\n								  团体  \r\n							{{/if}}  \r\n						{{/if}}\r\n					</td>\r\n					<td>\r\n						{{touristGroup.startTime | dateFormat: \'yyyy-MM-dd\'}}\r\n					</td>\r\n					<td>\r\n						{{if touristGroup.touristGroupMember != null}}\r\n							{{touristGroup.touristGroupMember.name}}\r\n						{{/if}}\r\n					</td>\r\n					<td>\r\n							{{touristGroup.adultCount}}大\r\n							{{touristGroup.childCount}}小\r\n					</td>\r\n					<td>\r\n						{{touristGroup.needPayAllMoney}}\r\n					</td>\r\n					<td>\r\n						{{touristGroup.payedMoney}}\r\n					</td>\r\n					<td>{{touristGroup.currentNeedPayMoney}}</td>\r\n					<td>{{touristGroup.unIncomeMoney}}</td>\r\n					<td>\r\n						{{if touristGroup.buyInsurance==1 }}\r\n						<i class="ace-icon fa fa-check green bigger-130"></i>\r\n						{{else if touristGroup.buyInsurance==0 }}\r\n						<i class="ace-icon fa fa-times red bigger-125"></i>\r\n						{{/if}}\r\n					</td>\r\n					<td>\r\n						{{if touristGroup.user != null}}\r\n							{{touristGroup.user.realName}}\r\n						{{/if}}\r\n					</td>\r\n					<td>\r\n						{{touristGroup.createTime}}\r\n					</td>\r\n					<td width="60">\r\n						{{ if touristGroup.status==0 }}\r\n							已发团\r\n						{{else if touristGroup.status==1 }}\r\n							未分团\r\n						{{else if touristGroup.status==2 }}\r\n							已分团\r\n						{{else if touristGroup.status==3 }}\r\n							已转客\r\n						{{else if touristGroup.status==4 }}\r\n							已取消\r\n						{{else if touristGroup.status==5 }}\r\n							已分段\r\n						{{else if touristGroup.status==6 }}\r\n							已内转\r\n						{{/if}}\r\n					</td>\r\n					<td>\r\n						<div class="hidden-sm hidden-xs btn-group" style="width:120px;">\r\n							<a data-entity-id="{{touristGroup.id}}" class=" btn-touristGroup-view cursor">\r\n								查看\r\n							</a>\r\n							<a data-entity-id="{{touristGroup.id}}" class="{{if touristGroup.isInnerTransferConfirm == 0}}btn-touristGroup-edit {{/if}} cursor R-right" data-right="1120003" {{if touristGroup.isInnerTransferConfirm == 1}}style="color:#bbb;"{{/if}}>\r\n								<label class="padding-right20">|</label>\r\n								编辑\r\n							</a>\r\n							<a data-entity-id="{{touristGroup.id}}" class="{{if touristGroup.status == 1 && touristGroup.isInnerTransferConfirm == 0}}btn-touristGroup-delete{{/if}} cursor R-right" data-right="1120004" {{if !(touristGroup.status == 1 && touristGroup.isInnerTransferConfirm == 0)}}style="color:#bbb;"{{/if}}>\r\n								<label class="padding-right20">|</label>\r\n								删除\r\n							</a>\r\n						</div>\r\n						<div class="hidden-md hidden-lg">\r\n							<div class="inline pos-rel">\r\n								<button class="btn btn-minier btn-primary dropdown-toggle" data-toggle="dropdown" data-position="auto">\r\n									<i class="ace-icon fa fa-cog icon-only bigger-110"></i>\r\n								</button>\r\n		\r\n								<ul class="dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close">\r\n									\r\n									<li>\r\n										<a data-entity-id="{{touristGroup.id}}" href="javascript:void(0)" class="tooltip-error btn-touristGroup-view" data-rel="tooltip">\r\n											<span class="red">\r\n												<i class="ace-icon fa fa-search-plus bigger-120"></i>\r\n											</span>\r\n										</a>\r\n									</li>\r\n									\r\n									<li>\r\n										<a data-entity-id="{{touristGroup.id}}" href="javascript:void(0)" class="tooltip-success btn-touristGroup-edit" data-rel="tooltip">\r\n											<span class="green">\r\n												<i class="ace-icon fa fa-pencil-square-o bigger-120"></i>\r\n											</span>\r\n										</a>\r\n									</li> \r\n		\r\n									<li>\r\n										<a data-entity-id="{{touristGroup.id}}" href="javascript:void(0)" class="tooltip-error btn-touristGroup-delete" data-rel="tooltip">\r\n											<span class="red">\r\n												<i class="ace-icon fa fa-trash-o bigger-120"></i>\r\n											</span>\r\n										</a>\r\n									</li>\r\n								</ul>\r\n							</div>\r\n						</div>\r\n					</td>\r\n				</tr>{{/each}}\r\n			</tbody>\r\n		</table>\r\n		<div class="row pageMode">\r\n			<div class="col-xs-6">\r\n				<small>共计 {{recordSize}} 条记录</small>\r\n			</div>\r\n			<div class="col-xs-6">\r\n				<div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});