/*TMODJS:{"debug":true,"version":70,"md5":"3da8fa5d3005261c371af7287fda2d38"}*/
define(function(require) {
    return require("../../../template")("financial/replaceProfit/view/listMain", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, searchParam = $data.searchParam, $out = "";
            return $out += '<div class="row"> <div class="col-xs-12"> <div class="T-search-area form-inline"> <div class="form-group mar-r-10"> <label>客户：</label> <input type="text" value="', 
            $line = 6, $out += $escape(searchParam.partnerAgencyName), $out += '" name="partnerAgencyName" placeholder="客户" /> <input type="hidden" value="', 
            $line = 7, $out += $escape(searchParam.partnerAgencyId), $out += '" name="partnerAgencyId" /> </div> <div class="form-group mar-r-10"> <label>外联销售：</label> <input type="text" value="', 
            $line = 11, $out += $escape(searchParam.outOPUserName), $out += '" name="outOPUserName" placeholder="外联销售" /> </div> <div class="form-group mar-r-10"> <label>部门：</label> <input type="text" value="', 
            $line = 15, $out += $escape(searchParam.groupName), $out += '" name="groupName" placeholder="部门" /> </div> <div class="form-group mar-r-10"> <label>酒店：</label> <input type="text" value = "', 
            $line = 19, $out += $escape(searchParam.hotelName), $out += '" name="hotelName" placeholder="酒店" /> <input type="hidden" value="', 
            $line = 20, $out += $escape(searchParam.hotelId), $out += '" name="hotelId" /> </div> <div class="form-group mar-r-10"> <label>景区：</label> <input type="text" value = "', 
            $line = 24, $out += $escape(searchParam.scenicName), $out += '" name="scenicName" placeholder="景区" /> <input type="hidden" value="', 
            $line = 25, $out += $escape(searchParam.scenicId), $out += '" name="scenicId" /> </div> <div class="form-group mar-r-10"> <label>票务：</label> <select name="ticketType"> <option value="" ', 
            $line = 30, "" == searchParam.ticketType && ($out += 'selected="selected"', $line = 30), 
            $out += '>全部</option> <option value="1" ', $line = 31, 1 == searchParam.ticketType && ($out += 'selected="selected"', 
            $line = 31), $out += '>飞机票</option> <option value="2" ', $line = 32, 2 == searchParam.ticketType && ($out += 'selected="selected"', 
            $line = 32), $out += '>汽车票</option> <option value="3" ', $line = 33, 3 == searchParam.ticketType && ($out += 'selected="selected"', 
            $line = 33), $out += '>火车票</option> <option value="4" ', $line = 34, 4 == searchParam.ticketType && ($out += 'selected="selected"', 
            $line = 34), $out += '>轮船票</option> </select> </div> <div class="form-group mar-r-10"> <label>旅游车：</label> <input type="text" value="', 
            $line = 39, $out += $escape(searchParam.needSeatCount), $out += '" name="seatCount" placeholder="旅游车" /> </div> <div class="form-group mar-r-10"> <label>开始日期：</label> <input class="date-picker" name="startDate" placeholder="开始日期" value="', 
            $line = 43, $out += $escape(searchParam.startTime), $out += '" type="text" style="width:100px;" /> </div> <div class="form-group mar-r-10"> <label>结束日期：</label> <input class="date-picker" name="endDate" placeholder="结束日期" value="', 
            $line = 47, $out += $escape(searchParam.endTime), $out += '" type="text" style="width:100px;" /> </div> <div class="form-group mar-r-10"> <button class="search-btn btn-sm btn-height T-search"> <i class="ace-icon fa fa-search"></i>搜索 </button> </div> </div> <div style="margin:8px 0px;"> <label>应收合计：<span class="T-sumNeedGetMoney F-float F-money"></span></label> <label style="margin-left:30px;">成本合计：<span class="T-sumCostMoney F-float F-money"></span></label> <label style="margin-left:30px;">毛利合计：<span class="T-sumGrossProfit F-float F-money"></span></label> </div> <table class="table table-striped table-bordered table-hover"> <thead> <tr class="bg-blur"> <th rowspan="2">代订单号</th> <th rowspan="2">客户</th> <th rowspan="2">外联销售</th> <th rowspan="2">部门</th> <th colspan="4">项目</th> <th rowspan="2">应收</th> <th rowspan="2">成本</th> <th rowspan="2">毛利</th> </tr> <tr class="bg-blur"> <th>酒店</th> <th>票务</th> <th>景区</th> <th>旅游车</th> </tr> </thead> <tbody class="T-list"> </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small class="T-totalSize">没有查询到相关记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row">\r\n	<div class="col-xs-12">\r\n		<div class="T-search-area form-inline">\r\n            <div class="form-group mar-r-10">\r\n				<label>客户：</label> \r\n	            <input type="text" value="{{searchParam.partnerAgencyName}}" name="partnerAgencyName" placeholder="客户" />\r\n	            <input type="hidden" value="{{searchParam.partnerAgencyId}}" name="partnerAgencyId" />\r\n            </div>\r\n            <div class="form-group mar-r-10">\r\n	            <label>外联销售：</label> \r\n	            <input type="text" value="{{searchParam.outOPUserName}}" name="outOPUserName" placeholder="外联销售" />\r\n	        </div>\r\n            <div class="form-group mar-r-10">\r\n	            <label>部门：</label> \r\n	            <input type="text" value="{{searchParam.groupName}}" name="groupName" placeholder="部门" />\r\n	        </div>\r\n            <div class="form-group mar-r-10">\r\n	            <label>酒店：</label>\r\n	            <input type="text" value = "{{searchParam.hotelName}}" name="hotelName" placeholder="酒店" />\r\n	            <input type="hidden" value="{{searchParam.hotelId}}" name="hotelId" />\r\n	        </div>\r\n            <div class="form-group mar-r-10">\r\n	            <label>景区：</label>\r\n	            <input type="text" value = "{{searchParam.scenicName}}" name="scenicName" placeholder="景区" />\r\n	            <input type="hidden" value="{{searchParam.scenicId}}" name="scenicId" />\r\n	        </div>\r\n            <div class="form-group mar-r-10">\r\n	            <label>票务：</label>\r\n	            <select name="ticketType">\r\n					<option value="" {{if searchParam.ticketType == ""}}selected="selected"{{/if}}>全部</option>\r\n					<option value="1" {{if searchParam.ticketType == 1}}selected="selected"{{/if}}>飞机票</option>\r\n					<option value="2" {{if searchParam.ticketType == 2}}selected="selected"{{/if}}>汽车票</option>\r\n					<option value="3" {{if searchParam.ticketType == 3}}selected="selected"{{/if}}>火车票</option>\r\n					<option value="4" {{if searchParam.ticketType == 4}}selected="selected"{{/if}}>轮船票</option>\r\n				</select>\r\n			</div>\r\n            <div class="form-group mar-r-10">\r\n				<label>旅游车：</label>\r\n				<input type="text" value="{{searchParam.needSeatCount}}" name="seatCount" placeholder="旅游车" />\r\n			</div>\r\n            <div class="form-group mar-r-10">\r\n				<label>开始日期：</label>\r\n				<input class="date-picker" name="startDate" placeholder="开始日期" value="{{searchParam.startTime}}" type="text" style="width:100px;" />	\r\n			</div>\r\n            <div class="form-group mar-r-10">\r\n				<label>结束日期：</label>\r\n				<input class="date-picker" name="endDate" placeholder="结束日期" value="{{searchParam.endTime}}" type="text" style="width:100px;" />			\r\n			</div>\r\n            <div class="form-group mar-r-10">\r\n				<button class="search-btn btn-sm btn-height T-search">\r\n					<i class="ace-icon fa fa-search"></i>搜索\r\n				</button>\r\n			</div>\r\n		</div>\r\n		<div style="margin:8px 0px;">\r\n            <label>应收合计：<span class="T-sumNeedGetMoney F-float F-money"></span></label>\r\n            <label style="margin-left:30px;">成本合计：<span class="T-sumCostMoney F-float F-money"></span></label>\r\n            <label style="margin-left:30px;">毛利合计：<span class="T-sumGrossProfit F-float F-money"></span></label>\r\n		</div>\r\n		<table class="table table-striped table-bordered table-hover">\r\n			<thead>\r\n				<tr class="bg-blur">\r\n					<th rowspan="2">代订单号</th>\r\n					<th rowspan="2">客户</th>\r\n					<th rowspan="2">外联销售</th>\r\n					<th rowspan="2">部门</th>\r\n					<th colspan="4">项目</th>\r\n					<th rowspan="2">应收</th>\r\n					<th rowspan="2">成本</th>\r\n					<th rowspan="2">毛利</th>\r\n				</tr>\r\n				<tr class="bg-blur">\r\n					<th>酒店</th>\r\n					<th>票务</th>\r\n					<th>景区</th>\r\n					<th>旅游车</th>\r\n				</tr>\r\n			</thead>\r\n			<tbody class="T-list">\r\n			</tbody>\r\n		</table>\r\n		<div class="row pageMode">\r\n			<div class="col-xs-6">\r\n				<small class="T-totalSize">没有查询到相关记录</small>\r\n			</div>\r\n			<div class="col-xs-6">\r\n				<div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});