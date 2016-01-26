/*TMODJS:{"debug":true,"version":147,"md5":"d19dcb197292d7c122f84788242c2d6e"}*/
define(function(require) {
    return require("../../../template")("financial/planProfit/view/listMain", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, searchParam = $data.searchParam, $out = "";
            return $out += '<div class="row"> <div class="T-search-area" style="margin:0px;"> <div class="form-horizontal"> <label>团号：</label> <input type="text" style="width: 160px" placeholder="团号" class="mar-r-10" name="tripNumber" value="', 
            $line = 5, $out += $escape(searchParam.tripNumber), $out += '" /> <label>线路产品：</label> <input type="text" style="width: 220px" class="mar-r-10" placeholder="线路产品" name="lineProductName" value="', 
            $line = 8, $out += $escape(searchParam.lineProductName), $out += '" /> <input type="hidden" name="lineProductId" value="', 
            $line = 9, $out += $escape(searchParam.lineProductId), $out += '"/> <label>导游：</label> <input type="text" style="width: 100px" class="mar-r-10" placeholder="导游" name="guideName" value="', 
            $line = 12, $out += $escape(searchParam.guideName), $out += '"/> <input type="hidden" name="guideId" value="', 
            $line = 13, $out += $escape(searchParam.guideId), $out += '"/> <label>针对客源：</label> <select name="tripPlanType" class="mar-r-10"> <option value="" ', 
            $line = 16, "" != searchParam.tripPlanType && searchParam.tripPlanType || ($out += "selected", 
            $line = 16), $out += '>全部</option> <option value="0" ', $line = 17, "0" == searchParam.tripPlanType && ($out += "selected", 
            $line = 17), $out += '>散客</option> <option value="1" ', $line = 18, "1" == searchParam.tripPlanType && ($out += "selected", 
            $line = 18), $out += '>团队</option> </select> <label>开始日期：</label> <input class="date-picker mar-r-10" name="startTime" placeholder="开始日期" type="text" value="', 
            $line = 21, $out += $escape(searchParam.start), $out += '" style="width:100px;" /> <label>结束日期：</label> <input class="date-picker mar-r-10" name="endTime" placeholder="结束日期" type="text" value="', 
            $line = 23, $out += $escape(searchParam.end), $out += '" style="width:100px;" /> <label>状态：</label> <div class="btn-group T-status"> <button data-toggle="dropdown" data-value="', 
            $line = 26, $out += $escape(searchParam.billStatus), $out += '" class=" btn-sm dropdown-toggle block-up block-up" aria-expanded="false" style="height:24px;padding:0px 10px;line-height:24px;"> <span> ', 
            $line = 28, "" == searchParam.billStatus ? ($out += " 全部 ", $line = 30) : -1 == searchParam.billStatus ? ($out += " 待报账 ", 
            $line = 32) : 0 == searchParam.billStatus ? ($out += " 待审核 ", $line = 34) : 1 == searchParam.billStatus ? ($out += " 计调已审 ", 
            $line = 36) : 2 == searchParam.billStatus && ($out += " 财务已审 ", $line = 38), $out += ' </span> <i class="ace-icon fa fa-angle-down icon-on-right" ></i> </button> <ul class="dropdown-menu"> <li> <a data-value="" href="javascript:void(0)">全部</a> </li> <li> <a data-value="-1" href="javascript:void(0)">待报账</a> </li> <li> <a data-value="0" href="javascript:void(0)">待审核</a> </li> <li> <a data-value="1" href="javascript:void(0)">计调已审</a> </li> <li> <a data-value="2" href="javascript:void(0)">财务已审</a> </li> </ul> </div> <button class="btn-sm marginLeft-30 search-btn T-search"> <i class="ace-icon fa fa-search"></i>搜索</button> </div> <div style="margin:8px 0px;"> <label>收入合计：<span class="T-totalIncome"></span></label> <label class="marginLeft-30">发团成本合计：<span class="F-float F-money T-totalTrip"></span></label> <label class="marginLeft-30 T-turn">中转成本合计：<span class="F-float F-money T-totalOut"></span></label> <label class="marginLeft-30">毛利：<span class="F-float F-money T-profit"></span></label> <label class="marginLeft-30">人均毛利：<span class="F-float F-money T-perCapitaProfit"></span></label> <label class="marginLeft-30">人数：<span class="T-personCount"></span></label> <label class="marginLeft-30">团数：<span class="F-float F-count T-tripCount"></span></label> <label class="pos-rel pull-right"> <input type="checkbox" class="ace T-checkTurn" ', 
            $line = 72, 1 == searchParam.operateCalculteOut && ($out += 'checked="checked"', 
            $line = 72), $out += '/> <span class="lbl"> 核算中转</span> </label> </div> </div> <table class="table-bordered table table-striped table-hover overflow-table T-showHighLight T-planProfit-list"> </table> </div> <div class="row pageMode"> <div class="col-xs-6"> <small class="T-totalSize">没有查询到相关记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row">\r\n	<div class="T-search-area" style="margin:0px;">  \r\n		<div class="form-horizontal">      \r\n	      	<label>团号：</label>\r\n	    	<input type="text" style="width: 160px" placeholder="团号" class="mar-r-10" name="tripNumber" value="{{searchParam.tripNumber}}" />\r\n\r\n			<label>线路产品：</label>\r\n	    	<input type="text" style="width: 220px" class="mar-r-10" placeholder="线路产品" name="lineProductName" value="{{searchParam.lineProductName}}" />\r\n			<input type="hidden" name="lineProductId" value="{{searchParam.lineProductId}}"/>\r\n\r\n			<label>导游：</label>\r\n	    	<input type="text" style="width: 100px" class="mar-r-10" placeholder="导游" name="guideName" value="{{searchParam.guideName}}"/>\r\n			<input type="hidden" name="guideId" value="{{searchParam.guideId}}"/>\r\n			<label>针对客源：</label>\r\n	    	<select name="tripPlanType" class="mar-r-10">\r\n	    		<option value="" {{if searchParam.tripPlanType == "" || !searchParam.tripPlanType}}selected{{/if}}>全部</option>\r\n	    		<option value="0" {{if searchParam.tripPlanType == "0"}}selected{{/if}}>散客</option>\r\n	    		<option value="1" {{if searchParam.tripPlanType == "1"}}selected{{/if}}>团队</option>\r\n	    	</select>\r\n			<label>开始日期：</label>\r\n	    	<input class="date-picker mar-r-10" name="startTime" placeholder="开始日期" type="text" value="{{searchParam.start}}" style="width:100px;" />	\r\n			<label>结束日期：</label>\r\n	    	<input class="date-picker mar-r-10" name="endTime" placeholder="结束日期" type="text" value="{{searchParam.end}}" style="width:100px;" />	\r\n			<label>状态：</label>\r\n	    	<div class="btn-group T-status">\r\n				<button data-toggle="dropdown" data-value="{{searchParam.billStatus}}" class=" btn-sm  dropdown-toggle block-up block-up" aria-expanded="false" style="height:24px;padding:0px 10px;line-height:24px;">\r\n					<span>\r\n						{{if searchParam.billStatus == ""}}\r\n							全部\r\n						{{else if searchParam.billStatus == -1}}\r\n							待报账\r\n						{{else if searchParam.billStatus == 0}}\r\n							待审核\r\n						{{else if searchParam.billStatus == 1}}\r\n							计调已审\r\n						{{else if searchParam.billStatus == 2}}\r\n							财务已审\r\n						{{/if}}	\r\n					</span>\r\n					<i class="ace-icon fa fa-angle-down icon-on-right" ></i>\r\n				</button>\r\n				<ul class="dropdown-menu">\r\n					<li>\r\n						<a data-value="" href="javascript:void(0)">全部</a>\r\n					</li>\r\n					<li>\r\n						<a data-value="-1" href="javascript:void(0)">待报账</a>\r\n					</li>\r\n					<li>\r\n						<a data-value="0" href="javascript:void(0)">待审核</a>\r\n					</li> \r\n					<li>\r\n						<a data-value="1" href="javascript:void(0)">计调已审</a>\r\n					</li>\r\n					<li>\r\n						<a data-value="2" href="javascript:void(0)">财务已审</a>\r\n					</li>  \r\n				</ul>		\r\n			</div>\r\n	        <button class="btn-sm marginLeft-30 search-btn T-search"> <i class="ace-icon fa fa-search"></i>搜索</button> \r\n	    </div>\r\n\r\n	    <div style="margin:8px 0px;">\r\n            <label>收入合计：<span class="T-totalIncome"></span></label>\r\n            <label class="marginLeft-30">发团成本合计：<span class="F-float F-money T-totalTrip"></span></label>\r\n            <label class="marginLeft-30 T-turn">中转成本合计：<span class="F-float F-money T-totalOut"></span></label>\r\n            <label class="marginLeft-30">毛利：<span class="F-float F-money T-profit"></span></label>\r\n            <label class="marginLeft-30">人均毛利：<span class="F-float F-money T-perCapitaProfit"></span></label>\r\n            <label class="marginLeft-30">人数：<span class="T-personCount"></span></label>\r\n            <label class="marginLeft-30">团数：<span class="F-float F-count T-tripCount"></span></label>\r\n            <label class="pos-rel pull-right">\r\n                <input type="checkbox" class="ace T-checkTurn" {{if searchParam.operateCalculteOut == 1}}checked="checked"{{/if}}/>\r\n                <span class="lbl"> 核算中转</span>\r\n            </label>\r\n        </div>\r\n    </div>\r\n    <table class="table-bordered table  table-striped table-hover overflow-table T-showHighLight T-planProfit-list">\r\n		\r\n	</table>\r\n</div>\r\n\r\n<div class="row pageMode">\r\n	<div class="col-xs-6">\r\n		<small class="T-totalSize">没有查询到相关记录</small>\r\n	</div>\r\n	<div class="col-xs-6">\r\n		<div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n		</div>\r\n	</div>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});