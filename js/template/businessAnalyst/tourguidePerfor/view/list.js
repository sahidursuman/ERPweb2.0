/*TMODJS:{"debug":true,"version":602,"md5":"0e66957dd254f5be6e73bd6cf60d5b6f"}*/
define(function(require) {
    return require("../../../template")("businessAnalyst/tourguidePerfor/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, searchParam = $data.searchParam, $each = $utils.$each, sumListPerformance = $data.sumListPerformance, totalCount = ($data.sumL, 
            $data.$index, $data.totalCount), $out = "";
            return $out += '<div class="search-tripPlanContainer"> <div class="row form-horizontal T-search-area search-area" style="padding-left:5px; "> <label class="pull-left text-right control-label no-padding-right">开始日期:</label> <div class="col-xs-1"> <input type="text" name="startTime" class="col-xs-12 datepicker" placeholder="开始日期" value="', 
            $line = 5, $out += $escape(searchParam.startTime), $out += '" /> </div> <label class="pull-left text-right control-label no-padding-right">结束日期:</label> <div class="col-xs-1"> <input type="text" name="endTime" class="col-xs-12 datepicker" placeholder="结束日期" value="', 
            $line = 9, $out += $escape(searchParam.endTime), $out += '" /> </div> <label class="pull-left text-right control-label no-padding-right">导游:</label> <div class="col-xs-2"> <input type="text" name="guideName" class="col-xs-12 T-Choose-tourgSet" placeholder="导游" value="', 
            $line = 14, $out += $escape(searchParam.guideName), $out += '" /> <input type="hidden" name="guidChooseId" value="" /> </div> <div class="col-xs-2"> <button class=" btn-sm T-tourguidPer-search search-btn"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </div> <div class="row T-saleProductPager-list"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover table-fixed T-NotShowHighLight"> <colgroup> <col style="width:10%;"></col> <col style="width:10%;"></col> <col style="width:10%;"></col> <col style="width:20%;"></col> <col style="width:20%;"></col> <col style="width:15%;"></col> <col style="width:15%;"></col> <col style="width:10%;"></col> <col style="width:10%;"></col> <col style="width:10%;"></col> </colgroup> <thead> <tr class="bg-blur"> <th class="col-sm-1">导游</th> <th class="col-sm-2">手机号码</th> <th class="col-sm-1">带团数量</th> <th class="col-sm-1">带团人数</th> <th class="col-sm-1">购物总额</th> <th class="col-sm-1">团均购物</th> <th class="col-sm-2">人均购物</th> <th class="col-sm-1">自费总额</th> <th class="col-sm-1">团均自费</th> <th class="col-sm-2">人均自费</th> </tr> </thead> <tbody class="T-tourguidPer-list"> ', 
            $line = 57, $each(sumListPerformance, function(sumL) {
                $out += " <tr> <td>", $line = 59, $out += $escape(sumL.guideName), $out += "</td> <td>", 
                $line = 60, $out += $escape(sumL.mobileNumber), $out += "</td> <td>", $line = 61, 
                $out += $escape(sumL.tourCount), $out += "</td> <td>", $line = 62, $out += $escape(sumL.tourNumber), 
                $out += "</td> <td>", $line = 63, $out += $escape(sumL.sumShopMoney), $out += "</td> <td>", 
                $line = 64, $out += $escape(sumL.aveTeamShop), $out += "</td> <td>", $line = 65, 
                $out += $escape(sumL.avePeoShop), $out += "</td> <td>", $line = 66, $out += $escape(sumL.sumSelfPayMoney), 
                $out += "</td> <td>", $line = 67, $out += $escape(sumL.aveSelfPayMoney), $out += "</td> <td>", 
                $line = 68, $out += $escape(sumL.aveSelfPay), $out += "</td> </tr> ", $line = 70;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计', 
            $line = 76, $out += $escape(totalCount), $out += '条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> </div> <div> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="search-tripPlanContainer">\r\n	<div class="row form-horizontal T-search-area search-area" style="padding-left:5px; ">\r\n        <label class="pull-left text-right control-label no-padding-right">开始日期:</label>\r\n		<div class="col-xs-1">\r\n			<input type="text" name="startTime" class="col-xs-12 datepicker" placeholder="开始日期" value="{{searchParam.startTime}}" />\r\n		</div>\r\n        <label class="pull-left text-right control-label no-padding-right">结束日期:</label>\r\n		<div class="col-xs-1">\r\n			<input type="text" name="endTime" class="col-xs-12 datepicker" placeholder="结束日期" value="{{searchParam.endTime}}" />\r\n		</div>\r\n\r\n        <label class="pull-left text-right control-label no-padding-right">导游:</label>\r\n    	<div class="col-xs-2">\r\n			<input type="text" name="guideName"  class="col-xs-12 T-Choose-tourgSet" placeholder="导游" value="{{searchParam.guideName}}" />\r\n			<input type="hidden" name="guidChooseId"  value="" />\r\n		</div>\r\n\r\n\r\n        <div class="col-xs-2">\r\n			<button class=" btn-sm  T-tourguidPer-search search-btn">\r\n				<i class="ace-icon fa fa-search"></i> 搜索\r\n			</button>\r\n		</div>\r\n	</div>\r\n\r\n\r\n	<div class="row T-saleProductPager-list">	\r\n		<div class="col-xs-12">\r\n			<table class="table table-striped table-bordered table-hover table-fixed T-NotShowHighLight">\r\n				<colgroup>\r\n	            	<col style="width:10%;"></col>\r\n	            	<col style="width:10%;"></col>\r\n	            	<col style="width:10%;"></col>\r\n	            	<col style="width:20%;"></col>\r\n	            	<col style="width:20%;"></col>\r\n	            	<col style="width:15%;"></col>\r\n	            	<col style="width:15%;"></col>\r\n	            	<col style="width:10%;"></col>\r\n	            	<col style="width:10%;"></col>\r\n	            	<col style="width:10%;"></col>\r\n	            </colgroup>\r\n				<thead>\r\n					<tr class="bg-blur">\r\n						<th class="col-sm-1">导游</th>\r\n						<th class="col-sm-2">手机号码</th>\r\n						<th class="col-sm-1">带团数量</th>\r\n						<th class="col-sm-1">带团人数</th>\r\n						<th class="col-sm-1">购物总额</th>\r\n						<th class="col-sm-1">团均购物</th>\r\n						<th class="col-sm-2">人均购物</th>\r\n						<th class="col-sm-1">自费总额</th>\r\n						<th class="col-sm-1">团均自费</th>\r\n						<th class="col-sm-2">人均自费</th>\r\n					</tr>\r\n				</thead>\r\n				<tbody class="T-tourguidPer-list">\r\n					{{each sumListPerformance as sumL}}\r\n						<tr>			\r\n			                <td>{{sumL.guideName}}</td>\r\n							<td>{{sumL.mobileNumber}}</td>\r\n							<td>{{sumL.tourCount}}</td>\r\n							<td>{{sumL.tourNumber}}</td>\r\n							<td>{{sumL.sumShopMoney}}</td>\r\n							<td>{{sumL.aveTeamShop}}</td>\r\n							<td>{{sumL.avePeoShop}}</td>\r\n							<td>{{sumL.sumSelfPayMoney}}</td>\r\n							<td>{{sumL.aveSelfPayMoney}}</td>\r\n							<td>{{sumL.aveSelfPay}}</td>\r\n						</tr>\r\n					{{/each}}\r\n				</tbody>\r\n			</table>\r\n\r\n			<div class="row pageMode">\r\n				<div class="col-xs-6">\r\n					<small>共计{{totalCount}}条记录</small>\r\n				</div>\r\n				<div class="col-xs-6">\r\n					<div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n					</div>\r\n				</div>\r\n			</div>\r\n\r\n		</div>\r\n	<div>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});