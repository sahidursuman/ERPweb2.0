/*TMODJS:{"debug":true,"version":320,"md5":"eb59a323325de89167cea4ffbd77d680"}*/
define(function(require) {
    return require("../../../template")("resource/touristGroup/view/list", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, touristGroupList = $data.touristGroupList, $escape = ($data.touristGroup, 
            $data.$index, $utils.$escape), recordSize = $data.recordSize, $out = "";
            return $out += '<div class="row T-touristGroupList"> <div class="col-xs-12"> <table class="table table-striped overflow-table table-bordered table-hover T-showHighLight row"> <thead> <tr class="bg-blur"> <th width="8%">收客单号</th> <th >客户</th> <th >线路产品</th> <th>针对客源</th> <th >出游日期</th> <th >报价单号</th> <th>联系人</th> <th>人数</th> <th>应收</th> <th>预收款</th> <th>已收</th> <th>计划现收</th> <th>返款</th> <th>未收</th> <th>买保险</th> <th>组团单号</th> <th>客源类型</th> <th>接站牌</th> <th>外联销售</th> <th width="160">录入时间</th> <th>状态</th> <th style="width:150px;">操作</th> </tr> </thead> <tbody calss="T-touristGroup">', 
            $line = 31, $each(touristGroupList, function(touristGroup) {
                $out += ' <tr class="touristGroup-', $line = 32, $out += $escape(touristGroup.id), 
                $out += '" id="', $line = 32, $out += $escape(touristGroup.id), $out += '" data-status="', 
                $line = 32, $out += $escape(touristGroup.status), $out += '" data-InnerTransfer="', 
                $line = 32, $out += $escape(touristGroup.isInnerTransferConfirm), $out += '"> <td>', 
                $line = 33, $out += $escape(touristGroup.orderNumber), $out += "</td> <td> ", $line = 35, 
                null != touristGroup.partnerAgency && ($out += " ", $line = 36, $out += $escape(touristGroup.partnerAgency.travelAgencyName), 
                $out += " ", $line = 37), $out += " </td> <td> ", $line = 40, null != touristGroup.lineProduct && ($out += " ", 
                $line = 41, $out += $escape(touristGroup.lineProduct.name), $out += " ", $line = 42), 
                $out += " </td> <td> ", $line = 45, 0 == touristGroup.customerType ? ($out += " 散客 ", 
                $line = 46) : 1 == touristGroup.customerType && ($out += "团体 ", $line = 47), $out += " </td> <td> ", 
                $line = 50, $out += $escape($helpers.dateFormat(touristGroup.startTime, "yyyy-MM-dd")), 
                $out += " </td> <td>", $line = 52, touristGroup.quote && ($line = 52, $out += $escape(touristGroup.quote.quoteNumber), 
                $line = 52), $out += "</td> <td> ", $line = 54, null != touristGroup.touristGroupMember && ($out += " ", 
                $line = 55, $out += $escape(touristGroup.touristGroupMember.name), $out += " ", 
                $line = 56), $out += ' </td> <td> <span class="F-float F-count">', $line = 59, $out += $escape(touristGroup.adultCount), 
                $out += '</span>大 <span class="F-float F-count">', $line = 60, $out += $escape(touristGroup.childCount), 
                $out += '</span>小 </td> <td> <span class="F-float F-money">', $line = 63, $out += $escape(touristGroup.needPayAllMoney), 
                $out += '</span> </td> <td><span class="F-float F-money">', $line = 65, $out += $escape(touristGroup.preIncomeMoney), 
                $out += '</span></td> <td> <span class="F-float F-money">', $line = 67, $out += $escape(touristGroup.payedMoney), 
                $out += '</span> </td> <td><span class="F-float F-money">', $line = 69, $out += $escape(touristGroup.currentNeedPayMoney), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 70, $out += $escape(touristGroup.backMoney), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 71, $out += $escape(touristGroup.unIncomeMoney), 
                $out += "</span></td> <td> ", $line = 73, 1 == touristGroup.buyInsurance ? ($out += ' <i class="ace-icon fa fa-check green bigger-130"></i> ', 
                $line = 75) : 0 == touristGroup.buyInsurance && ($out += ' <i class="ace-icon fa fa-times red bigger-125"></i> ', 
                $line = 77), $out += " </td> <td>", $line = 79, $out += $escape(touristGroup.otaOrderNumber), 
                $out += "</td> <td> ", $line = 81, 0 == touristGroup.memberType ? ($out += " 内宾 ", 
                $line = 83) : ($out += " 外宾 ", $line = 85), $out += " </td> <td>", $line = 87, $out += $escape(touristGroup.welcomeBoard), 
                $out += "</td> <td> ", $line = 89, null != touristGroup.outOPUser && ($out += " ", 
                $line = 90, $out += $escape(touristGroup.outOPUser.realName), $out += " ", $line = 91), 
                $out += " </td> <td> ", $line = 94, $out += $escape(touristGroup.createTime), $out += ' </td> <td width="60"> ', 
                $line = 97, 0 == touristGroup.status ? ($out += " 已发团 ", $line = 99) : 1 == touristGroup.status ? ($out += " 未分团 ", 
                $line = 101) : 2 == touristGroup.status ? ($out += " 已分团 ", $line = 103) : 3 == touristGroup.status ? ($out += " 已外转 ", 
                $line = 105) : 4 == touristGroup.status ? ($out += " 已取消 ", $line = 107) : 5 == touristGroup.status ? ($out += " 已分段 ", 
                $line = 109) : 6 == touristGroup.status && ($out += " 已内转 ", $line = 111), $out += ' </td> <td> <div class="hidden-sm hidden-xs btn-group" style="width:120px;"> <a data-entity-id="', 
                $line = 115, $out += $escape(touristGroup.id), $out += '" class="T-action T-view btn-touristGroup-view cursor"> 查看 </a> <a data-entity-id="', 
                $line = 118, $out += $escape(touristGroup.id), $out += '" class="', $line = 118, 
                1 == touristGroup.status && 0 == touristGroup.isInnerTransferConfirm && 0 == touristGroup.isConfirmAccount && ($out += "T-action T-edit btn-touristGroup-edit", 
                $line = 118), $out += ' cursor R-right" data-right="1120003" ', $line = 118, (1 != touristGroup.status || 0 != touristGroup.isConfirmAccount || 0 != touristGroup.isInnerTransferConfirm) && ($out += 'style="color:#bbb;"', 
                $line = 118), $out += '> <label class="padding-right20">|</label> <span>编辑</span> </a> <a data-entity-id="', 
                $line = 122, $out += $escape(touristGroup.id), $out += '" class="', $line = 122, 
                1 == touristGroup.status && 0 == touristGroup.isConfirmAccount && 0 == touristGroup.isInnerTransferConfirm && ($out += "T-action T-del btn-touristGroup-delete ", 
                $line = 122), $out += ' cursor R-right" data-right="1120004" ', $line = 122, (1 != touristGroup.status || 0 != touristGroup.isConfirmAccount || 0 != touristGroup.isInnerTransferConfirm) && ($out += 'style="color:#bbb;"', 
                $line = 122), $out += '> <label class="padding-right20">|</label> 删除 </a> </div> <div class="hidden-md hidden-lg"> <div class="inline pos-rel"> <button class="btn btn-minier btn-primary dropdown-toggle" data-toggle="dropdown" data-position="auto"> <i class="ace-icon fa fa-cog icon-only bigger-110"></i> </button> <ul class="dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close"> <li> <a data-entity-id="', 
                $line = 136, $out += $escape(touristGroup.id), $out += '" href="javascript:void(0)" class="tooltip-error btn-touristGroup-view" data-rel="tooltip"> <span class="red"> <i class="ace-icon fa fa-search-plus bigger-120"></i> </span> </a> </li> <li> <a data-entity-id="', 
                $line = 143, $out += $escape(touristGroup.id), $out += '" href="javascript:void(0)" class="tooltip-success btn-touristGroup-edit" data-rel="tooltip"> <span class="green"> <i class="ace-icon fa fa-pencil-square-o bigger-120"></i> </span> </a> </li> <li> <a data-entity-id="', 
                $line = 151, $out += $escape(touristGroup.id), $out += '" href="javascript:void(0)" class="tooltip-error btn-touristGroup-delete" data-rel="tooltip"> <span class="red"> <i class="ace-icon fa fa-trash-o bigger-120"></i> </span> </a> </li> </ul> </div> </div> </td> </tr>', 
                $line = 161;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 166, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row T-touristGroupList">	\r\n	<div class="col-xs-12">\r\n		<table class="table table-striped overflow-table table-bordered table-hover T-showHighLight row">\r\n			<thead>\r\n				<tr class="bg-blur"> \r\n				    <th width="8%">收客单号</th>\r\n					<th >客户</th>\r\n					<th >线路产品</th>\r\n					<th>针对客源</th>               \r\n					<th >出游日期</th>\r\n					<th >报价单号</th>\r\n					<th>联系人</th>\r\n					<th>人数</th>\r\n					<th>应收</th>\r\n					<th>预收款</th>\r\n					<th>已收</th>\r\n					<th>计划现收</th>\r\n					<th>返款</th>\r\n					<th>未收</th>\r\n					<th>买保险</th>\r\n					<th>组团单号</th>\r\n					<th>客源类型</th>\r\n					<th>接站牌</th>\r\n					<th>外联销售</th>\r\n					<th width="160">录入时间</th>\r\n					<th>状态</th>\r\n					<th style="width:150px;">操作</th>\r\n				</tr>\r\n			</thead>\r\n		\r\n			<tbody calss="T-touristGroup">{{each touristGroupList as touristGroup}}\r\n				<tr class="touristGroup-{{touristGroup.id}}" id="{{touristGroup.id}}" data-status="{{touristGroup.status}}" data-InnerTransfer="{{touristGroup.isInnerTransferConfirm}}">\r\n				    <td>{{touristGroup.orderNumber}}</td>\r\n					<td>\r\n						{{if touristGroup.partnerAgency != null}}\r\n							{{touristGroup.partnerAgency.travelAgencyName}}\r\n						{{/if}}\r\n					</td>\r\n					<td>\r\n						{{if touristGroup.lineProduct != null}}\r\n							{{touristGroup.lineProduct.name}}\r\n						{{/if}}\r\n					</td>\r\n					<td>\r\n						{{if touristGroup.customerType==0}} 散客\r\n						{{else if touristGroup.customerType==1}}团体  \r\n						{{/if}}  \r\n					</td>\r\n					<td>\r\n						{{touristGroup.startTime | dateFormat: \'yyyy-MM-dd\'}}\r\n					</td>\r\n					<td>{{if !!touristGroup.quote}}{{touristGroup.quote.quoteNumber}}{{/if}}</td>\r\n					<td>\r\n						{{if touristGroup.touristGroupMember != null}}\r\n							{{touristGroup.touristGroupMember.name}}\r\n						{{/if}}\r\n					</td>\r\n					<td>\r\n							<span class="F-float F-count">{{touristGroup.adultCount}}</span>大\r\n							<span class="F-float F-count">{{touristGroup.childCount}}</span>小\r\n					</td>\r\n					<td>\r\n						<span class="F-float F-money">{{touristGroup.needPayAllMoney}}</span>\r\n					</td>\r\n					<td><span class="F-float F-money">{{touristGroup.preIncomeMoney}}</span></td>\r\n					<td>\r\n						<span class="F-float F-money">{{touristGroup.payedMoney}}</span>\r\n					</td>\r\n					<td><span class="F-float F-money">{{touristGroup.currentNeedPayMoney}}</span></td>\r\n					<td><span class="F-float F-money">{{touristGroup.backMoney}}</span></td>\r\n					<td><span class="F-float F-money">{{touristGroup.unIncomeMoney}}</span></td>\r\n					<td>\r\n						{{if touristGroup.buyInsurance==1 }}\r\n						<i class="ace-icon fa fa-check green bigger-130"></i>\r\n						{{else if touristGroup.buyInsurance==0 }}\r\n						<i class="ace-icon fa fa-times red bigger-125"></i>\r\n						{{/if}}\r\n					</td>\r\n					<td>{{touristGroup.otaOrderNumber}}</td>\r\n					<td>\r\n						{{if touristGroup.memberType==0}}\r\n							 内宾\r\n						{{else}}               \r\n							 外宾\r\n						{{/if}}  	\r\n					</td>\r\n					<td>{{touristGroup.welcomeBoard}}</td>\r\n					<td>\r\n						{{if touristGroup.outOPUser != null}}\r\n							{{touristGroup.outOPUser.realName}}\r\n						{{/if}}\r\n					</td>\r\n					<td>\r\n						{{touristGroup.createTime}}\r\n					</td>\r\n					<td width="60">\r\n						{{ if touristGroup.status==0 }}\r\n							已发团\r\n						{{else if touristGroup.status==1 }}\r\n							未分团\r\n						{{else if touristGroup.status==2 }}\r\n							已分团\r\n						{{else if touristGroup.status==3 }}\r\n							已外转\r\n						{{else if touristGroup.status==4 }}\r\n							已取消\r\n						{{else if touristGroup.status==5 }}\r\n							已分段\r\n						{{else if touristGroup.status==6 }}\r\n							已内转\r\n						{{/if}}\r\n					</td>\r\n					<td>\r\n						<div class="hidden-sm hidden-xs btn-group" style="width:120px;">\r\n							<a data-entity-id="{{touristGroup.id}}" class="T-action T-view btn-touristGroup-view cursor">\r\n								查看\r\n							</a>\r\n							<a data-entity-id="{{touristGroup.id}}" class="{{if touristGroup.status==1 && touristGroup.isInnerTransferConfirm == 0 && touristGroup.isConfirmAccount == 0}}T-action T-edit btn-touristGroup-edit{{/if}} cursor  R-right" data-right="1120003" {{if !(touristGroup.status==1 &&touristGroup.isConfirmAccount == 0 && touristGroup.isInnerTransferConfirm == 0)}}style="color:#bbb;"{{/if}}>\r\n								<label class="padding-right20">|</label>\r\n								<span>编辑</span>\r\n							</a>\r\n							<a data-entity-id="{{touristGroup.id}}" class="{{if touristGroup.status == 1 && touristGroup.isConfirmAccount == 0 && touristGroup.isInnerTransferConfirm == 0}}T-action T-del btn-touristGroup-delete {{/if}} cursor R-right" data-right="1120004" {{if !(touristGroup.status == 1  && touristGroup.isConfirmAccount == 0 && touristGroup.isInnerTransferConfirm == 0)}}style="color:#bbb;"{{/if}}>\r\n								<label class="padding-right20">|</label>\r\n								删除\r\n							</a>\r\n						</div>\r\n						<div class="hidden-md hidden-lg">\r\n							<div class="inline pos-rel">\r\n								<button class="btn btn-minier btn-primary dropdown-toggle" data-toggle="dropdown" data-position="auto">\r\n									<i class="ace-icon fa fa-cog icon-only bigger-110"></i>\r\n								</button>\r\n		\r\n								<ul class="dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close">\r\n									\r\n									<li>\r\n										<a data-entity-id="{{touristGroup.id}}" href="javascript:void(0)" class="tooltip-error btn-touristGroup-view" data-rel="tooltip">\r\n											<span class="red">\r\n												<i class="ace-icon fa fa-search-plus bigger-120"></i>\r\n											</span>\r\n										</a>\r\n									</li>\r\n									<li>\r\n										<a data-entity-id="{{touristGroup.id}}" href="javascript:void(0)" class="tooltip-success btn-touristGroup-edit" data-rel="tooltip">\r\n											<span class="green">\r\n												<i class="ace-icon fa fa-pencil-square-o bigger-120"></i>\r\n											</span>\r\n										</a>\r\n									</li> \r\n		\r\n									<li>\r\n										<a data-entity-id="{{touristGroup.id}}" href="javascript:void(0)" class="tooltip-error btn-touristGroup-delete" data-rel="tooltip">\r\n											<span class="red">\r\n												<i class="ace-icon fa fa-trash-o bigger-120"></i>\r\n											</span>\r\n										</a>\r\n									</li>\r\n								</ul>\r\n							</div>\r\n						</div>\r\n					</td>\r\n				</tr>{{/each}}\r\n			</tbody>\r\n		</table>\r\n		<div class="row pageMode">\r\n			<div class="col-xs-6">\r\n				<small>共计 {{recordSize}} 条记录</small>\r\n			</div>\r\n			<div class="col-xs-6">\r\n				<div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});