/*TMODJS:{"debug":true,"version":116,"md5":"63d6a5013e000438ae57a39a9182a6c9"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeTransfer/view/listTransferOut", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, result = $data.result, $escape = ($data.$index, 
            $utils.$escape), searchParam = $data.searchParam, $out = "";
            return $out += '<table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr class="bg-blur"> <th>同行地接</th> <th>游客</th> <th>联系电话</th> <th>人数</th> <th>应付款</th>  <th>转客人</th> <th>转客时间</th> <th>对方状态</th> <th>操作</th> </tr> </thead> <tbody class="T-listTransferOut"> ', 
            $line = 17, $each(result, function(result) {
                $out += " ", $line = 18, null != result && ($out += ' <tr data-value="', $line = 19, 
                $out += $escape(result.id), $out += '" data-status="', $line = 19, $out += $escape(result.status), 
                $out += '"> <td>', $line = 20, $out += $escape(result.partnerAgency.travelAgencyName), 
                $out += "</td> ", $line = 21, null != result.touristGroup ? ($out += " <td> ", $line = 23, 
                null != result.touristGroup.contactMember && ($out += " ", $line = 24, $out += $escape(result.touristGroup.contactMember.name), 
                $out += " ", $line = 25), $out += " </td> <td> ", $line = 28, null != result.touristGroup.contactMember && ($out += " ", 
                $line = 29, $out += $escape(result.touristGroup.contactMember.mobileNumber), $out += " ", 
                $line = 30), $out += ' </td> <td> <span class="F-float F-count">', $line = 34, $out += $escape(result.touristGroup.adultCount), 
                $out += '</span>大<span class="F-float F-money">', $line = 34, $out += $escape(result.touristGroup.childCount), 
                $out += '</span>小 </td> <td><span class="F-float F-money">', $line = 36, $out += $escape(result.touristGroup.transNeedPayAllMoney), 
                $out += '</span></td> <!-- <td><span class="F-float F-money">', $line = 37, $out += $escape(result.touristGroup.transPayedMoney), 
                $out += "</span></td> --> ", $line = 38) : ($out += ' <td></td> <td></td> <td><span class="F-float F-count">0</span>大<span class="F-float F-money">0</span>小</td> <td></td> <td></td> ', 
                $line = 44), $out += " <td> ", $line = 46, null != result.user && ($out += " ", 
                $line = 47, null != result.user.realName && ($out += " ", $line = 48, $out += $escape(result.user.realName), 
                $out += " ", $line = 49), $out += " ", $line = 50), $out += " </td> <td>", $line = 52, 
                $out += $escape(result.createTime), $out += "</td> <td>", $line = 53, 0 == result.status ? ($out += '<span style="color:#D2691E;">未确认</span>', 
                $line = 53) : 1 == result.status ? ($out += '<span style="color: green;">已接收</span>', 
                $line = 53) : 2 == result.status ? ($out += '<span style="color: red;">已拒收</span>', 
                $line = 53) : ($out += '<span style="">未使用</span>', $line = 53), $out += '</td> <td> <div class="hidden-sm hidden-xs btn-group"> <a data-value="', 
                $line = 56, $out += $escape(result.id), $out += '" class="cursor T-transfer-view T-action"> 查看 </a> <a data-value="', 
                $line = 59, $out += $escape(result.id), $out += '" class="cursor ', $line = 59, 
                1 != result.status && ($out += "T-transfer-edit", $line = 59), $out += ' T-action R-right" ', 
                $line = 59, 1 == result.status && ($out += 'style="color:#bbb;"', $line = 59), $out += ' data-right="1180003"> <label class="padding-right20">|</label> 编辑 </a> <a data-value="', 
                $line = 63, $out += $escape(result.id), $out += '" class="cursor ', $line = 63, 
                1 != result.status && ($out += "T-transfer-delete", $line = 63), $out += ' T-action R-right" ', 
                $line = 63, 1 == result.status && ($out += 'style="color:#bbb;"', $line = 63), $out += ' data-right="1180004"> <label class="padding-right20">|</label> 撤销 </a> <a data-value="', 
                $line = 68, $out += $escape(result.id), $out += '" class="cursor ', $line = 68, 
                3 == result.status && ($out += "T-transfer-confirm", $line = 68), $out += ' T-action R-right" ', 
                $line = 68, 3 != result.status && ($out += 'style="color:#bbb;"', $line = 68), $out += ' data-right="1180004"> <label class="padding-right20">|</label> 确认 </a> </div> </td> </tr> ', 
                $line = 77), $out += " ", $line = 78;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计', 
            $line = 83, $out += $escape(searchParam.totalCount), $out += '条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<table class="table table-striped table-bordered table-hover T-showHighLight">\r\n<thead>\r\n	<tr class="bg-blur">\r\n		<th>同行地接</th>\r\n		<th>游客</th>\r\n		<th>联系电话</th>\r\n		<th>人数</th>           \r\n		<th>应付款</th>	  	\r\n		<!-- <th>已付款</th>   -->\r\n		<th>转客人</th>  \r\n		<th>转客时间</th>\r\n		<th>对方状态</th>   \r\n		<th>操作</th>    \r\n	</tr>\r\n</thead>\r\n <tbody class="T-listTransferOut">\r\n 		{{each result as result}}\r\n 		{{if result!=null}}        \r\n			<tr data-value="{{result.id}}" data-status="{{result.status}}">\r\n				<td>{{result.partnerAgency.travelAgencyName}}</td>\r\n				{{if result.touristGroup != null}}\r\n				<td>\r\n				    {{if result.touristGroup.contactMember!=null}}\r\n					   {{result.touristGroup.contactMember.name}}\r\n					{{/if}}\r\n				</td>\r\n				<td>\r\n					{{if result.touristGroup.contactMember!=null}}\r\n					    {{result.touristGroup.contactMember.mobileNumber}}\r\n					{{/if}}        \r\n				</td>\r\n				<td>\r\n				\r\n				    <span class="F-float F-count">{{result.touristGroup.adultCount}}</span>大<span class="F-float F-money">{{result.touristGroup.childCount}}</span>小\r\n				</td>	\r\n				<td><span class="F-float F-money">{{result.touristGroup.transNeedPayAllMoney}}</span></td>\r\n				<!-- <td><span class="F-float F-money">{{result.touristGroup.transPayedMoney}}</span></td> -->\r\n				{{else}}\r\n				<td></td>\r\n				<td></td>\r\n				<td><span class="F-float F-count">0</span>大<span class="F-float F-money">0</span>小</td>	\r\n				<td></td>\r\n				<td></td>\r\n				{{/if}}\r\n				<td>    \r\n					{{if result.user!=null}}  \r\n						{{if result.user.realName!=null}}\r\n					        {{result.user.realName}}\r\n					 	{{/if}}    \r\n					{{/if}}\r\n				</td>\r\n				<td>{{result.createTime}}</td>        \r\n				<td>{{if result.status == 0}}<span style="color:#D2691E;">未确认</span>{{else if result.status == 1}}<span style="color: green;">已接收</span>{{else if result.status == 2}}<span style="color: red;">已拒收</span>{{else}}<span style="">未使用</span>{{/if}}</td>\r\n				<td>\r\n					<div class="hidden-sm hidden-xs btn-group">\r\n						<a data-value="{{result.id}}" class="cursor  T-transfer-view T-action">\r\n							查看\r\n						</a>\r\n						<a data-value="{{result.id}}" class="cursor {{if result.status != 1}}T-transfer-edit{{/if}} T-action R-right" {{if result.status == 1}}style="color:#bbb;"{{/if}} data-right="1180003">\r\n							<label class="padding-right20">|</label>\r\n							编辑\r\n						</a>\r\n						<a data-value="{{result.id}}" class="cursor {{if result.status != 1}}T-transfer-delete{{/if}} T-action R-right" {{if result.status == 1}}style="color:#bbb;"{{/if}} data-right="1180004">\r\n							<label class="padding-right20">|</label>\r\n							撤销\r\n						</a>\r\n\r\n						<a data-value="{{result.id}}" class="cursor {{if result.status == 3}}T-transfer-confirm{{/if}} T-action R-right" {{if result.status != 3}}style="color:#bbb;"{{/if}} data-right="1180004">\r\n							<label class="padding-right20">|</label>\r\n							确认\r\n						</a>\r\n\r\n					</div>\r\n\r\n				</td>\r\n			</tr>\r\n		{{/if}}\r\n		{{/each}}\r\n	</tbody>\r\n</table>	\r\n<div class="row pageMode">\r\n	<div class="col-xs-6">\r\n		<small>共计{{searchParam.totalCount}}条记录</small>\r\n	</div>\r\n	<div class="col-xs-6">\r\n		<div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});