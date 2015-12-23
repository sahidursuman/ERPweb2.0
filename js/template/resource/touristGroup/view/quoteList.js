/*TMODJS:{"debug":true,"version":215,"md5":"2a5d90820de1ed977678541847fbf065"}*/
define(function(require) {
    return require("../../../template")("resource/touristGroup/view/quoteList", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, lineProductList = $data.lineProductList, $escape = ($data.lineProduct, 
            $data.$index, $utils.$escape), recordSize = $data.recordSize, $out = "";
            return $out += '<div class="col-xs-12"> <table class="table table-striped table-bordered table-hover row"> <thead> <tr> <th>报价单号</th> <th >线路产品名称</th> <th>线路类型</th> <th>针对客源</th> <th>人数</th> <th>天数</th> <th>出游日期</th> <th>客户</th> <th>联系人</th> <th>报价时间</th> <th style="width:150px;">操作</th> </tr> </thead> <tbody calss="T-chooseQuoteProduct-Tbody"> ', 
            $line = 19, $each(lineProductList, function(lineProduct) {
                $out += " <tr data-quoteId='1' data-quoteNumber='", $line = 20, $out += $escape(lineProduct.quoteNumber), 
                $out += "' data-lineProductName= '", $line = 20, null != lineProduct.lineProduct && ($line = 20, 
                $out += $escape(lineProduct.lineProduct.name), $line = 20), $out += "' data-lineProducId= '", 
                $line = 20, $out += $escape(lineProduct.id), $out += "' data-startTime='", $line = 21, 
                $out += $escape(lineProduct.startTime), $out += "' data-fromPartnerAgencyId='", 
                $line = 22, null != lineProduct.partnerAgency && ($line = 22, $out += $escape(lineProduct.partnerAgency.id), 
                $line = 22), $out += "' data-fromPartnerAgencyName='", $line = 23, null != lineProduct.partnerAgency && ($line = 23, 
                $out += $escape(lineProduct.partnerAgency.travelAgencyName), $line = 23), $out += "' data-partnerAgencyContactName ='", 
                $line = 24, null != lineProduct.partnerAgencyContact && ($line = 24, $out += $escape(lineProduct.partnerAgencyContact.contactRealname), 
                $out += "-[", $line = 24, $out += $escape(lineProduct.partnerAgencyContact.contactMobileNumber), 
                $out += "]", $line = 24), $out += "' data-partnerAgencyContactId = '", $line = 25, 
                null != lineProduct.partnerAgencyContact && ($line = 25, $out += $escape(lineProduct.partnerAgencyContact.id), 
                $line = 25), $out += "' data-adultCount='", $line = 26, $out += $escape(lineProduct.adultCount), 
                $out += "' data-adultPrice='", $line = 26, $out += $escape(lineProduct.adultQuotePrice), 
                $out += "' data-childCount='", $line = 26, $out += $escape(lineProduct.childCount), 
                $out += "' data-childPrice='", $line = 26, $out += $escape(lineProduct.childQuotePrice), 
                $out += "' > <td> ", $line = 28, $out += $escape(lineProduct.quoteNumber), $out += " </td> <td>", 
                $line = 30, null != lineProduct.lineProduct && ($line = 30, $out += $escape(lineProduct.lineProduct.name), 
                $line = 30), $out += "</td> <td>", $line = 32, null != lineProduct.lineProduct && ($line = 32, 
                $out += $escape(lineProduct.lineProduct.type), $line = 32), $out += "</td> <td> ", 
                $line = 34, null != lineProduct.lineProduct && ($out += " ", $line = 35, 0 == lineProduct.lineProduct.customerType ? ($out += " 散客 ", 
                $line = 37) : ($out += " 团体 ", $line = 39), $out += " ", $line = 40), $out += " </td> <td>", 
                $line = 43, $out += $escape(lineProduct.adultCount), $out += " 大 ", $line = 43, 
                $out += $escape(lineProduct.childCount), $out += " 小</td> <td>", $line = 44, null != lineProduct.lineProduct && ($line = 44, 
                $out += $escape(lineProduct.lineProduct.days), $line = 44), $out += "</td> <td>", 
                $line = 45, $out += $escape(lineProduct.createTime), $out += "</td> <td>", $line = 47, 
                null != lineProduct.partnerAgency && ($line = 47, $out += $escape(lineProduct.partnerAgency.travelAgencyName), 
                $line = 47), $out += "</td> <td>", $line = 48, null != lineProduct.partnerAgencyContact && ($line = 48, 
                $out += $escape(lineProduct.partnerAgencyContact.contactRealname), $line = 48), 
                $out += "</td> <td>", $line = 49, $out += $escape(lineProduct.startTime), $out += '</td> <td> <label class="pos-rel"> <input type="radio" class="ace T-cheked" name="form-field-radio"> <span class="lbl"></span> </label> </td> </tr> ', 
                $line = 54;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 59, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: "<div class=\"col-xs-12\">\r\n	<table class=\"table table-striped table-bordered table-hover row\">\r\n		<thead>\r\n			<tr>\r\n				<th>报价单号</th>\r\n				<th >线路产品名称</th>\r\n				<th>线路类型</th>               \r\n				<th>针对客源</th>\r\n				<th>人数</th>\r\n				<th>天数</th>\r\n				<th>出游日期</th>\r\n				<th>客户</th>\r\n				<th>联系人</th>\r\n				<th>报价时间</th>\r\n				<th style=\"width:150px;\">操作</th>\r\n			</tr>\r\n		</thead>\r\n		<tbody calss=\"T-chooseQuoteProduct-Tbody\">\r\n			{{each lineProductList as lineProduct}}\r\n				<tr data-quoteId='1' data-quoteNumber='{{lineProduct.quoteNumber}}' data-lineProductName= '{{if lineProduct.lineProduct != null}}{{lineProduct.lineProduct.name}}{{/if}}' data-lineProducId= '{{lineProduct.id}}'\r\n				 data-startTime='{{lineProduct.startTime}}'\r\n				 data-fromPartnerAgencyId='{{if lineProduct.partnerAgency != null}}{{lineProduct.partnerAgency.id}}{{/if}}' \r\n				 data-fromPartnerAgencyName='{{if lineProduct.partnerAgency != null}}{{lineProduct.partnerAgency.travelAgencyName}}{{/if}}'\r\n				 data-partnerAgencyContactName ='{{if lineProduct.partnerAgencyContact != null}}{{lineProduct.partnerAgencyContact.contactRealname}}-[{{lineProduct.partnerAgencyContact.contactMobileNumber}}]{{/if}}'\r\n				 data-partnerAgencyContactId = '{{if lineProduct.partnerAgencyContact != null}}{{lineProduct.partnerAgencyContact.id}}{{/if}}'\r\n				 data-adultCount='{{lineProduct.adultCount}}' data-adultPrice='{{lineProduct.adultQuotePrice}}' data-childCount='{{lineProduct.childCount}}' data-childPrice='{{lineProduct.childQuotePrice}}' >\r\n					<td>\r\n					    {{lineProduct.quoteNumber}}\r\n					</td>\r\n					<td>{{if lineProduct.lineProduct != null}}{{lineProduct.lineProduct.name}}{{/if}}</td>\r\n\r\n					<td>{{if lineProduct.lineProduct != null}}{{lineProduct.lineProduct.type}}{{/if}}</td>\r\n					<td>\r\n						{{if lineProduct.lineProduct != null}}    \r\n							{{if lineProduct.lineProduct.customerType==0}}\r\n								  散客\r\n								{{else}}             \r\n								  团体\r\n							{{/if}}  \r\n						{{/if}}\r\n					</td>\r\n\r\n					<td>{{lineProduct.adultCount}} 大 {{lineProduct.childCount}} 小</td>\r\n					<td>{{if lineProduct.lineProduct !=null }}{{lineProduct.lineProduct.days}}{{/if}}</td>\r\n					<td>{{lineProduct.createTime}}</td>\r\n\r\n					<td>{{if lineProduct.partnerAgency !=null }}{{lineProduct.partnerAgency.travelAgencyName}}{{/if}}</td>\r\n					<td>{{if lineProduct.partnerAgencyContact !=null }}{{lineProduct.partnerAgencyContact.contactRealname}}{{/if}}</td>\r\n					<td>{{lineProduct.startTime}}</td>\r\n					<td>\r\n					 	<label class=\"pos-rel\"> <input type=\"radio\" class=\"ace T-cheked\" name=\"form-field-radio\"> <span class=\"lbl\"></span> </label>\r\n				    </td>\r\n				</tr>\r\n			{{/each}}\r\n		</tbody>\r\n	</table>\r\n	<div class=\"row pageMode\">\r\n		<div class=\"col-xs-6\">\r\n			<small>共计 {{recordSize}} 条记录</small>\r\n		</div>\r\n		<div class=\"col-xs-6\">\r\n			<div class=\"dataTables_paginate paging_simple_numbers T-pagenation\">\r\n			</div>\r\n		</div>\r\n	</div>\r\n\r\n</div>\r\n".split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});