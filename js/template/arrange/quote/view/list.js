/*TMODJS:{"debug":true,"version":74,"md5":"9be0786ef737704a1aaa530de5db004a"}*/
define(function(require) {
    return require("../../../template")("arrange/quote/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, quoteList = $data.quoteList, $escape = ($data.quote, 
            $data.$index, $utils.$escape), $out = "";
            return $out += '<div class="col-xs-12"> <table class="table table-striped table-bordered table-hover"> <thead> <tr class="bg-blur"> <th>产品名称</th> <th>天数</th> <th>类别</th> <th>应用范围</th> <th>客户</th> <th>联系人</th> <th>大人报价</th> <th>小孩报价</th> <th>总报价</th> <th>报价人</th> <th class="col-sm-1">报价时间</th> <th width="230">操作</th> </tr> </thead> <tbody>', 
            $line = 20, $each(quoteList, function(quote) {
                $out += ' <tr data-entity-id="', $line = 21, $out += $escape(quote.id), $out += '"> <td>', 
                $line = 22, null != quote.lineProduct && ($line = 22, $out += $escape(quote.lineProduct.name), 
                $line = 22), $out += "</td> <td>", $line = 23, null != quote.lineProduct && ($line = 23, 
                $out += $escape(quote.lineProduct.days), $line = 23), $out += "</td> <td>", $line = 24, 
                null != quote.lineProduct && ($line = 24, $out += $escape(quote.lineProduct.type), 
                $line = 24), $out += "</td> <td>", $line = 25, null != quote.lineProduct && ($line = 25, 
                0 == quote.lineProduct.customerType ? ($out += "散客", $line = 25) : ($out += "团体", 
                $line = 25), $line = 25), $out += "</td> <td>", $line = 26, $out += $escape(quote.partnerAgency.travelAgencyName), 
                $out += "</td> <td>", $line = 27, $out += $escape(quote.partnerAgencyContact.contactRealname), 
                $out += "</td> <td>", $line = 28, $out += $escape(quote.adultQuotePrice), $out += "</td> <td>", 
                $line = 29, $out += $escape(quote.childQuotePrice), $out += "</td> <td>", $line = 30, 
                $out += $escape(quote.sumQuoteFee), $out += "</td> <td>", $line = 31, $out += $escape(quote.user.realName), 
                $out += "</td> <td>", $line = 32, $out += $escape(quote.creatTime), $out += '</td> <td> <div class="hidden-sm hidden-xs btn-group"> <a class="cursor R-right T-action"> 询价状态 </a> <a>|</a> <a class="cursor R-right T-action T-update"> 修改 </a> <a>|</a> <a class="cursor R-right T-action T-view"> 查看 </a> <a>|</a> <a class="cursor R-right T-action T-delete"> 删除 </a> <a>|</a> <a data-entiy-id="" href="huochaitou.com/quote.html?key=$id" class="cursor R-right T-share"> 分享 </a> </div> </td> </tr>', 
                $line = 56;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12">\r\n	<table class="table table-striped table-bordered table-hover">\r\n		<thead>\r\n			<tr class="bg-blur">  \r\n				<th>产品名称</th>\r\n				<th>天数</th>\r\n				<th>类别</th>               \r\n				<th>应用范围</th>\r\n				<th>客户</th>\r\n				<th>联系人</th>\r\n				<th>大人报价</th>\r\n				<th>小孩报价</th>\r\n				<th>总报价</th>\r\n				<th>报价人</th>\r\n				<th class="col-sm-1">报价时间</th>\r\n				<th width="230">操作</th>\r\n			</tr>\r\n		</thead>\r\n	\r\n		<tbody>{{each quoteList as quote}}\r\n			<tr data-entity-id="{{quote.id}}">\r\n				<td>{{if quote.lineProduct != null}}{{quote.lineProduct.name}}{{/if}}</td>\r\n				<td>{{if quote.lineProduct != null}}{{quote.lineProduct.days}}{{/if}}</td>\r\n				<td>{{if quote.lineProduct != null}}{{quote.lineProduct.type}}{{/if}}</td>\r\n				<td>{{if quote.lineProduct != null}}{{if quote.lineProduct.customerType == 0}}散客{{else}}团体{{/if}}{{/if}}</td>\r\n				<td>{{quote.partnerAgency.travelAgencyName}}</td>\r\n				<td>{{quote.partnerAgencyContact.contactRealname}}</td>\r\n				<td>{{quote.adultQuotePrice}}</td>\r\n				<td>{{quote.childQuotePrice}}</td>\r\n				<td>{{quote.sumQuoteFee}}</td>\r\n				<td>{{quote.user.realName}}</td>\r\n				<td>{{quote.creatTime}}</td>\r\n				<td>\r\n					<div class="hidden-sm hidden-xs btn-group">\r\n						<a class="cursor R-right T-action">\r\n							询价状态\r\n						</a>\r\n						<a>|</a>\r\n						<a class="cursor R-right T-action T-update">\r\n							修改\r\n						</a>\r\n						<a>|</a>\r\n						<a class="cursor R-right T-action T-view">\r\n							查看\r\n						</a>\r\n						<a>|</a>\r\n						<a class="cursor R-right T-action T-delete">\r\n							删除\r\n						</a>\r\n						<a>|</a>\r\n						<a data-entiy-id="" href="huochaitou.com/quote.html?key=$id" class="cursor R-right T-share">\r\n							分享\r\n						</a>\r\n					</div>\r\n				</td>\r\n			</tr>{{/each}}\r\n		</tbody>\r\n	</table>\r\n	\r\n	<div class="row pageMode">\r\n		<div class="col-xs-6">\r\n			<small>共计  条记录</small>\r\n		</div>\r\n		<div class="col-xs-6">\r\n			<div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});