/*TMODJS:{"debug":true,"version":28,"md5":"0dd24fe1d9dd80f60f5fae06bc08629a"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeTransfer/view/listTransferOut", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, result = $data.result, $escape = ($data.$index, 
            $utils.$escape), searchParam = $data.searchParam, $out = "";
            return $out += '<table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr class="bg-blur"> <th>收客单号</th> <th>同行地接</th> <th>出游日期</th> <th>游客</th> <th>联系电话</th> <th>人数</th> <th>应付款</th>  <th>转客人</th> <th>转客时间</th> <th>对方状态</th> <th>操作</th> </tr> </thead> <tbody class="T-listTransferOut"> ', 
            $line = 19, $each(result, function(result) {
                $out += " ", $line = 20, null != result && ($out += ' <tr data-value="', $line = 21, 
                $out += $escape(result.id), $out += '" data-status="', $line = 21, $out += $escape(result.status), 
                $out += '"> <td>', $line = 22, result.touristGroup && ($line = 22, $out += $escape(result.touristGroup.orderNumber), 
                $out += " ", $line = 22), $out += "</td> <td>", $line = 23, $out += $escape(result.partnerAgency.travelAgencyName), 
                $out += "</td> <td>", $line = 24, result.touristGroup && ($line = 24, $out += $escape($helpers.dateFormat(result.touristGroup.startTime, "yyyy-MM-dd")), 
                $line = 24), $out += "</td> ", $line = 25, null != result.touristGroup ? ($out += " <td> ", 
                $line = 27, null != result.touristGroup.contactMember && ($out += " ", $line = 28, 
                $out += $escape(result.touristGroup.contactMember.name), $out += " ", $line = 29), 
                $out += " </td> <td> ", $line = 32, null != result.touristGroup.contactMember && ($out += " ", 
                $line = 33, $out += $escape(result.touristGroup.contactMember.mobileNumber), $out += " ", 
                $line = 34), $out += ' </td> <td> <span class="F-float F-count">', $line = 38, $out += $escape(result.touristGroup.adultCount), 
                $out += '</span>大<span class="F-float F-money">', $line = 38, $out += $escape(result.touristGroup.childCount), 
                $out += '</span>小 </td> <td><span class="F-float F-money">', $line = 40, $out += $escape(result.touristGroup.transNeedPayAllMoney), 
                $out += "</span></td> ", $line = 41) : ($out += ' <td></td> <td></td> <td><span class="F-float F-count">0</span>大<span class="F-float F-money">0</span>小</td> <td></td> <td></td> ', 
                $line = 47), $out += " <td> ", $line = 49, null != result.user && ($out += " ", 
                $line = 50, null != result.user.realName && ($out += " ", $line = 51, $out += $escape(result.user.realName), 
                $out += " ", $line = 52), $out += " ", $line = 53), $out += " </td> <td>", $line = 55, 
                $out += $escape(result.createTime), $out += "</td> <td> ", $line = 57, 0 == result.status ? ($out += '<span style="color:#D2691E;">未确认</span> ', 
                $line = 58) : 1 == result.status ? ($out += '<span style="color: green;">已接收</span> ', 
                $line = 59) : 2 == result.status ? ($out += '<span style="color: red;">已拒收</span> ', 
                $line = 60) : null == result.transTravelAgencyId && 3 == result.status ? ($out += '<span style="">未使用</span> ', 
                $line = 61) : 4 == result.status && ($out += '<span style="color: red">已退回</span> ', 
                $line = 62), $out += ' </td> <td> <div class="btn-group"> <a data-value="', $line = 66, 
                $out += $escape(result.id), $out += '" class="cursor T-transfer-view T-action"> 查看 </a> <a data-value="', 
                $line = 69, $out += $escape(result.id), $out += '" class="cursor ', $line = 69, 
                1 != result.status && 2 != result.status && 4 != result.status && ($out += "T-transfer-edit", 
                $line = 69), $out += ' T-action R-right" data-right="1180003" ', $line = 69, (1 == result.status || 2 == result.status || 4 == result.status) && ($out += 'style="color:#bbb;"', 
                $line = 69), $out += '> <label class="padding-right20">|</label> 编辑 </a> <a data-value="', 
                $line = 74, $out += $escape(result.id), $out += '" class="cursor ', $line = 74, 
                1 != result.status && 4 != result.status && ($out += "T-transfer-delete", $line = 74), 
                $out += ' T-action R-right" ', $line = 74, (1 == result.status || 4 == result.status) && ($out += 'style="color:#bbb;"', 
                $line = 74), $out += ' data-right="1180004"> <label class="padding-right20">|</label> 撤销 </a> <a data-value="', 
                $line = 79, $out += $escape(result.id), $out += '" class="cursor ', $line = 79, 
                3 == result.status && ($out += "T-transfer-confirm", $line = 79), $out += ' T-action R-right" ', 
                $line = 79, 3 != result.status && ($out += 'style="color:#bbb;"', $line = 79), $out += ' data-right="1180004"> <label class="padding-right20">|</label> 确认 </a> <a data-value="', 
                $line = 84, $out += $escape(result.id), $out += '" class="cursor ', $line = 84, 
                (4 == result.status || null == result.transTravelAgencyId && 1 == result.status) && ($out += "T-returnTransfer-confirm", 
                $line = 84), $out += ' T-action R-right" data-right="1180004" ', $line = 84, 4 == result.status || 1 == result.status && null == result.transTravelAgencyId || ($out += 'style="color:#bbb;"', 
                $line = 84), $out += '> <label class="padding-right20">|</label> 确认退回 </a> </div> </td> </tr> ', 
                $line = 93), $out += " ", $line = 94;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计', 
            $line = 99, $out += $escape(searchParam.totalCount), $out += '条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<table class="table table-striped table-bordered table-hover T-showHighLight">\r\n<thead>\r\n	<tr class="bg-blur">\r\n		<th>收客单号</th>\r\n		<th>同行地接</th>\r\n		<th>出游日期</th>\r\n		<th>游客</th>\r\n		<th>联系电话</th>\r\n		<th>人数</th>           \r\n		<th>应付款</th>	  	\r\n		<!-- <th>已付款</th>   -->\r\n		<th>转客人</th>  \r\n		<th>转客时间</th>\r\n		<th>对方状态</th>   \r\n		<th>操作</th>    \r\n	</tr>\r\n</thead>\r\n <tbody class="T-listTransferOut">\r\n 		{{each result as result}}\r\n 		{{if result!=null}}        \r\n			<tr data-value="{{result.id}}" data-status="{{result.status}}">\r\n				<td>{{if result.touristGroup}}{{result.touristGroup.orderNumber }} {{/if}}</td>\r\n				<td>{{result.partnerAgency.travelAgencyName}}</td>\r\n				<td>{{if !!result.touristGroup}}{{result.touristGroup.startTime | dateFormat: \'yyyy-MM-dd\'}}{{/if}}</td>\r\n				{{if result.touristGroup != null}}\r\n				<td>\r\n				    {{if result.touristGroup.contactMember!=null}}\r\n					   {{result.touristGroup.contactMember.name}}\r\n					{{/if}}\r\n				</td>\r\n				<td>\r\n					{{if result.touristGroup.contactMember!=null}}\r\n					    {{result.touristGroup.contactMember.mobileNumber}}\r\n					{{/if}}        \r\n				</td>\r\n				<td>\r\n				\r\n				    <span class="F-float F-count">{{result.touristGroup.adultCount}}</span>大<span class="F-float F-money">{{result.touristGroup.childCount}}</span>小\r\n				</td>	\r\n				<td><span class="F-float F-money">{{result.touristGroup.transNeedPayAllMoney}}</span></td>\r\n				{{else}}\r\n				<td></td>\r\n				<td></td>\r\n				<td><span class="F-float F-count">0</span>大<span class="F-float F-money">0</span>小</td>	\r\n				<td></td>\r\n				<td></td>\r\n				{{/if}}\r\n				<td>    \r\n					{{if result.user!=null}}  \r\n						{{if result.user.realName!=null}}\r\n					        {{result.user.realName}}\r\n					 	{{/if}}\r\n					{{/if}}\r\n				</td>\r\n				<td>{{result.createTime}}</td>        \r\n				<td>\r\n					{{if result.status == 0}}<span style="color:#D2691E;">未确认</span>\r\n					{{else if result.status == 1}}<span style="color: green;">已接收</span>\r\n					{{else if result.status == 2}}<span style="color: red;">已拒收</span>\r\n					{{else if result.transTravelAgencyId==null && result.status == 3}}<span style="">未使用</span>\r\n					{{else if result.status == 4}}<span style="color: red">已退回</span>\r\n					{{/if}}\r\n				</td>\r\n				<td>\r\n					<div class="btn-group">\r\n						<a data-value="{{result.id}}" class="cursor  T-transfer-view T-action">\r\n							查看\r\n						</a>\r\n						<a data-value="{{result.id}}" class="cursor {{if result.status!= 1 &&  result.status!= 2 && result.status!= 4}}T-transfer-edit{{/if}} T-action R-right"  data-right="1180003" {{if result.status == 1 || result.status== 2 || result.status == 4}}style="color:#bbb;"{{/if}}>\r\n							<label class="padding-right20">|</label>\r\n							编辑\r\n						</a>\r\n\r\n						<a data-value="{{result.id}}" class="cursor {{if result.status!= 1 && result.status!= 4}}T-transfer-delete{{/if}} T-action R-right" {{if result.status == 1 || result.status == 4}}style="color:#bbb;"{{/if}} data-right="1180004">\r\n							<label class="padding-right20">|</label>\r\n							撤销\r\n						</a>\r\n\r\n						<a data-value="{{result.id}}" class="cursor {{if result.status==3}}T-transfer-confirm{{/if}} T-action R-right" {{if result.status !=3}}style="color:#bbb;"{{/if}} data-right="1180004">\r\n							<label class="padding-right20">|</label>\r\n							确认\r\n						</a>\r\n\r\n						<a data-value="{{result.id}}" class="cursor {{if result.status == 4 || (result.transTravelAgencyId==null && result.status == 1)}}T-returnTransfer-confirm{{/if}} T-action R-right"  data-right="1180004" {{if !(result.status == 4 || (result.status == 1 && result.transTravelAgencyId==null))}}style="color:#bbb;"{{/if}}>\r\n							<label class="padding-right20">|</label>\r\n							确认退回\r\n						</a>\r\n\r\n					</div>\r\n\r\n				</td>\r\n			</tr>\r\n		{{/if}}\r\n		{{/each}}\r\n	</tbody>\r\n</table>	\r\n<div class="row pageMode">\r\n	<div class="col-xs-6">\r\n		<small>共计{{searchParam.totalCount}}条记录</small>\r\n	</div>\r\n	<div class="col-xs-6">\r\n		<div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});