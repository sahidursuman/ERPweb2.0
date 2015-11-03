/*TMODJS:{"debug":true,"version":713,"md5":"0674b7a202c7206471e27fad8e4f6bc6"}*/
define(function(require) {
    return require("../../../template")("businessAnalyst/saleProduct/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, searchParam = $data.searchParam, $each = $utils.$each, lineProductSalesList = $data.lineProductSalesList, recordSize = ($data.lineProL, 
            $data.$index, $data.recordSize), $out = "";
            return $out += '<div class="search-area search-tripPlanContainer"> <div class="row form-horizontal T-search-area" style="padding-left:5px; "> <label class="pull-left text-right control-label no-padding-right">开始日期:</label> <div class="col-xs-1"> <input type="text" name="startDate" class="col-xs-12 datepicker" placeholder="开始日期" value="', 
            $line = 5, $out += $escape(searchParam.startDate), $out += '" /> </div> <label class="pull-left text-right control-label no-padding-right">结束日期:</label> <div class="col-xs-1"> <input type="text" name="endDate" class="col-xs-12 datepicker" placeholder="结束日期" value="', 
            $line = 10, $out += $escape(searchParam.endDate), $out += '" /> </div> <label class="pull-left text-right control-label no-padding-right">应用范围:</label> <div class="col-sm-1 marginLeft-Right7"> <select name="customerType" class="col-xs-12"> <option value="" ', 
            $line = 17, (searchParam.customerType = "") && ($out += 'selected="selected"', $line = 17), 
            $out += '>全部</option> <option value="0" ', $line = 18, "0" == searchParam.customerType && ($out += 'selected="selected" ', 
            $line = 18), $out += '>散客</option> <option value="1" ', $line = 19, "1" == searchParam.customerType && ($out += 'selected="selected" ', 
            $line = 19), $out += '>团体</option> </select> </div> <div class="col-xs-2"> <button class=" btn-sm T-saleProduct-search search-btn"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </div> <div class="col-xs-12 saleProduct-toTal" style="padding-bottom: 15px; margin-top:15px;"> <div class="saleProduct-toTal-Cost"> <label style="min-width:10%; display:inline-block;" class="peopleCount">游客合计 : ', 
            $line = 33, $out += $escape(searchParam.sumTourist), $out += '人</label> <label style="min-width:10%; display:inline-block;" class="needPayMoney">发团合计:', 
            $line = 34, $out += $escape(searchParam.sumTouristStart), $out += '人</label> <label style="min-width:10%; display:inline-block;" class="payedMoney">外转合计:', 
            $line = 35, $out += $escape(searchParam.sumOuterTransfer), $out += '元</label> <label style="min-width:10%; display:inline-block;" class="pMoney">内转合计:', 
            $line = 36, $out += $escape(searchParam.sumInnerTransfer), $out += '元</label> </div> </div> <div class="row"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover table-fixed"> <colgroup> <col style="width:10%;"></col> <col style="width:10%;"></col> <col style="width:10%;"></col> <col style="width:20%;"></col> <col style="width:20%;"></col> <col style="width:15%;"></col> <col style="width:15%;"></col> </colgroup> <thead> <tr class="bg-blur"> <th class="col-sm-1">线路产品</th> <th class="col-sm-2">天数</th> <th class="col-sm-1">类别</th> <th class="col-sm-1">应用范围</th> <th class="col-sm-2">游客量</th> <th class="col-sm-1">发团客量</th> <th class="col-sm-1">内转客量</th> <th class="col-sm-1">外转客量</th> </tr> </thead> <tbody class="T-scenic-list"> ', 
            $line = 65, $each(lineProductSalesList, function(lineProL) {
                $out += " <tr> <td>", $line = 67, $out += $escape(lineProL.lineProductName), $out += "</td> <td>", 
                $line = 68, $out += $escape(lineProL.days), $out += "</td> <td>", $line = 69, $out += $escape(lineProL.type), 
                $out += "</td> <td>", $line = 70, $out += $escape(lineProL.customerType), $out += "</td> <td>", 
                $line = 71, $out += $escape(lineProL.tourist), $out += "</td> <td>", $line = 72, 
                $out += $escape(lineProL.touristStart), $out += "</td> <td>", $line = 73, $out += $escape(lineProL.innerTransfer), 
                $out += "</td> <td>", $line = 74, $out += $escape(lineProL.outerTransfer), $out += "</td> </tr> ", 
                $line = 76;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 83, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> </div> <div> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="search-area search-tripPlanContainer">\r\n	<div class="row form-horizontal T-search-area" style="padding-left:5px; ">\r\n        <label class="pull-left text-right control-label no-padding-right">开始日期:</label>\r\n		<div class="col-xs-1">\r\n			<input type="text" name="startDate" class="col-xs-12 datepicker" placeholder="开始日期" value="{{searchParam.startDate}}" />\r\n		</div>\r\n	\r\n        <label class="pull-left text-right control-label no-padding-right">结束日期:</label>\r\n		<div class="col-xs-1">\r\n			<input type="text" name="endDate" class="col-xs-12 datepicker" placeholder="结束日期" value="{{searchParam.endDate}}" />\r\n		</div>\r\n\r\n\r\n		<label class="pull-left text-right control-label no-padding-right">应用范围:</label>\r\n        <div class="col-sm-1 marginLeft-Right7">\r\n            <select name="customerType" class="col-xs-12">\r\n                <option value=""  {{if searchParam.customerType = ""}}selected="selected"{{/if}}>全部</option>\r\n                <option value="0" {{if searchParam.customerType=="0"}}selected="selected" {{/if}}>散客</option>\r\n                <option value="1" {{if searchParam.customerType=="1"}}selected="selected" {{/if}}>团体</option>\r\n            </select>\r\n        </div>\r\n\r\n\r\n        <div class="col-xs-2">\r\n			<button class=" btn-sm  T-saleProduct-search search-btn">\r\n				<i class="ace-icon fa fa-search"></i> 搜索\r\n			</button>\r\n		</div>\r\n	</div>\r\n\r\n	<div class="col-xs-12 saleProduct-toTal" style="padding-bottom: 15px; margin-top:15px;">\r\n		<div class="saleProduct-toTal-Cost">\r\n			<label style="min-width:10%; display:inline-block;" class="peopleCount">游客合计 : {{searchParam.sumTourist}}人</label>\r\n		    <label style="min-width:10%; display:inline-block;" class="needPayMoney">发团合计:{{searchParam.sumTouristStart}}人</label>\r\n		    <label style="min-width:10%; display:inline-block;" class="payedMoney">外转合计:{{searchParam.sumOuterTransfer}}元</label>\r\n		    <label style="min-width:10%; display:inline-block;" class="pMoney">内转合计:{{searchParam.sumInnerTransfer}}元</label>\r\n		</div>\r\n	</div>\r\n\r\n	<div class="row">	\r\n		<div class="col-xs-12">\r\n			<table class="table table-striped table-bordered table-hover table-fixed">\r\n				<colgroup>\r\n	            	<col style="width:10%;"></col>\r\n	            	<col style="width:10%;"></col>\r\n	            	<col style="width:10%;"></col>\r\n	            	<col style="width:20%;"></col>\r\n	            	<col style="width:20%;"></col>\r\n	            	<col style="width:15%;"></col>\r\n	            	<col style="width:15%;"></col>\r\n	            </colgroup>\r\n				<thead>\r\n					<tr class="bg-blur">\r\n						<th class="col-sm-1">线路产品</th>\r\n						<th class="col-sm-2">天数</th>\r\n						<th class="col-sm-1">类别</th>\r\n						<th class="col-sm-1">应用范围</th>\r\n						<th class="col-sm-2">游客量</th>\r\n						<th class="col-sm-1">发团客量</th>\r\n						<th class="col-sm-1">内转客量</th>\r\n						<th class="col-sm-1">外转客量</th>\r\n					</tr>\r\n				</thead>\r\n				<tbody class="T-scenic-list">\r\n					{{each lineProductSalesList as lineProL}}\r\n					<tr>\r\n					   <td>{{lineProL.lineProductName}}</td>\r\n					   <td>{{lineProL.days}}</td>\r\n					   <td>{{lineProL.type}}</td>\r\n					   <td>{{lineProL.customerType}}</td>\r\n					   <td>{{lineProL.tourist}}</td>\r\n					   <td>{{lineProL.touristStart}}</td>\r\n					   <td>{{lineProL.innerTransfer}}</td>\r\n					   <td>{{lineProL.outerTransfer}}</td>\r\n					</tr>\r\n					{{/each}}\r\n				</tbody>\r\n			</table>\r\n\r\n\r\n		<div class="row pageMode">\r\n			<div class="col-xs-6">\r\n				<small>共计 {{recordSize}} 条记录</small>\r\n			</div>\r\n			<div class="col-xs-6">\r\n				<div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n				</div>\r\n			</div>\r\n		</div>\r\n\r\n		</div>\r\n	<div>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});