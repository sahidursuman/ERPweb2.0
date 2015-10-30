/*TMODJS:{"debug":true,"version":611,"md5":"b4823a81798f943ccd608655f2295c2f"}*/
define(function(require) {
    return require("../../../template")("businessAnalyst/customerVolume/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, searchParam = $data.searchParam, $each = $utils.$each, resultList = $data.resultList, $out = ($data.rs, 
            $data.$index, "");
            return $out += '<div class="search-tripPlanContainer"> <div class="row form-horizontal T-search-area search-area" style="padding-left:5px; "> <label class="pull-left text-right control-label no-padding-right">开始日期:</label> <div class="col-xs-1"> <input type="text" name="startTime" class="col-xs-12 datepicker" placeholder="开始日期" value="', 
            $line = 7, $out += $escape(searchParam.startTime), $out += '" /> </div> <label class="pull-left text-right control-label no-padding-right">结束日期:</label> <div class="col-xs-1"> <input type="text" name="endTime" class="col-xs-12 datepicker" placeholder="结束日期" value="', 
            $line = 12, $out += $escape(searchParam.endTime), $out += '" /> </div> <label class="pull-left text-right control-label no-padding-right">客户:</label> <div class="col-xs-2"> <input type="text" name="customerName" class="col-xs-12 T-customerVo-linPro" placeholder="客户" value="', 
            $line = 17, $out += $escape(searchParam.customerName), $out += '" /> <input type="hidden" name="customerId" value="', 
            $line = 18, $out += $escape(searchParam.customerId), $out += '" /> </div> <div class="col-xs-2"> <button class=" btn-sm T-saleProduct-search search-btn"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </div> <div class="row T-saleProductPager-list"> <div class="form-horizontal col-xs-12"> <div class="col-xs-6"> <table class="table table-striped table-bordered table-hover table-fixed" width="100%"> <colgroup> <col style="width:10%;"></col> <col style="width:10%;"></col> </colgroup> <thead> <tr class="bg-blur"> <th width="22.5%">客户</th> <th width="22.5%">所在地区</th> <th width="22.5%">总客量</th> </tr> </thead> <tbody class="T-scenic-list"> ', 
            $line = 45, $each(resultList, function(rs) {
                $out += " <tr> <td>", $line = 47, $out += $escape(rs.name), $out += "</td> <td>", 
                $line = 48, $out += $escape(rs.district), $out += "</td> <td>", $line = 49, $out += $escape(rs.sumMember), 
                $out += "</td> </tr> ", $line = 51;
            }), $out += ' </tbody> </table> </div> <div class="col-xs-6 pull-left"> <table class="table table-striped table-bordered table-hover table-fixed" width="100%"> <colgroup> <col style="width:10%;"></col> <col style="width:10%;"></col> </colgroup> <thead> <tr class="bg-blur"> <th width="22.5%" colspan="2">线路客量</th> </tr> </thead> <tbody class="T-scenic-list"> <tr> <td>九在黄龙</td> <td>800</td> </tr> <tr> <td> 峨眉山乐山</td> <td>600</td> </tr> <tr> <td>青城山</td> <td>300</td> </tr> </tbody> </table> </div> </div>  <div class="row pageMode"> <div class="col-xs-6"> <small>共计', 
            $line = 93, $out += $escape(searchParam.totalCount), $out += '条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div>  <div> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="search-tripPlanContainer">\r\n	<div class="row form-horizontal T-search-area search-area" style="padding-left:5px; ">\r\n\r\n\r\n        <label class="pull-left text-right control-label no-padding-right">开始日期:</label>\r\n		<div class="col-xs-1">\r\n			<input type="text" name="startTime" class="col-xs-12 datepicker" placeholder="开始日期" value="{{searchParam.startTime}}" />\r\n		</div>\r\n	\r\n        <label class="pull-left text-right control-label no-padding-right">结束日期:</label>\r\n		<div class="col-xs-1">\r\n			<input type="text" name="endTime" class="col-xs-12 datepicker" placeholder="结束日期" value="{{searchParam.endTime}}" />\r\n		</div>\r\n\r\n        <label class="pull-left text-right control-label no-padding-right">客户:</label>\r\n        <div class="col-xs-2">\r\n			<input type="text" name="customerName" class="col-xs-12 T-customerVo-linPro" placeholder="客户" value="{{searchParam.customerName}}" />\r\n			<input type="hidden" name="customerId" value="{{searchParam.customerId}}" />\r\n		</div>\r\n\r\n\r\n        <div class="col-xs-2">\r\n			<button class=" btn-sm  T-saleProduct-search search-btn">\r\n				<i class="ace-icon fa fa-search"></i> 搜索\r\n			</button>\r\n		</div>\r\n	</div>\r\n\r\n	<div class="row T-saleProductPager-list">	\r\n		<div class="form-horizontal col-xs-12">\r\n	        <div class="col-xs-6">\r\n				<table class="table table-striped table-bordered table-hover table-fixed" width="100%">\r\n					<colgroup>\r\n		            	<col style="width:10%;"></col>\r\n		            	<col style="width:10%;"></col>\r\n		            </colgroup>\r\n					<thead>\r\n						<tr class="bg-blur">\r\n							<th width="22.5%">客户</th>\r\n							<th width="22.5%">所在地区</th>\r\n							<th width="22.5%">总客量</th>\r\n						</tr>\r\n					</thead>\r\n					<tbody class="T-scenic-list">\r\n					{{each resultList as rs}}\r\n						<tr>\r\n							<td>{{rs.name}}</td>\r\n							<td>{{rs.district}}</td>\r\n							<td>{{rs.sumMember}}</td>\r\n						</tr>	\r\n					{{/each}}\r\n					</tbody>\r\n				</table>\r\n			</div>\r\n	\r\n\r\n			<div class="col-xs-6 pull-left">\r\n				<table class="table table-striped table-bordered table-hover table-fixed" width="100%">\r\n					<colgroup>\r\n		            	<col style="width:10%;"></col>\r\n		            	<col style="width:10%;"></col>\r\n		            </colgroup>\r\n					<thead>\r\n						<tr class="bg-blur">\r\n							<th width="22.5%" colspan="2">线路客量</th>\r\n						</tr>\r\n					</thead>\r\n					<tbody class="T-scenic-list">\r\n						<tr>\r\n							<td>九在黄龙</td>\r\n							<td>800</td>\r\n						</tr>\r\n\r\n						<tr>\r\n							<td> 峨眉山乐山</td>\r\n							<td>600</td>\r\n						</tr>\r\n\r\n		\r\n						<tr>\r\n							<td>青城山</td>\r\n							<td>300</td>\r\n						</tr>			\r\n					</tbody>\r\n				</table>\r\n			</div>\r\n\r\n		</div>\r\n\r\n		<!--分页条数-->\r\n		<div class="row pageMode">\r\n			<div class="col-xs-6">\r\n				<small>共计{{searchParam.totalCount}}条记录</small>\r\n			</div>\r\n			<div class="col-xs-6">\r\n				<div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n				</div>\r\n			</div>\r\n		</div>\r\n	   <!--分页条数-->\r\n\r\n	<div>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});