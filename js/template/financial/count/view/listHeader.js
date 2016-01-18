/*TMODJS:{"debug":true,"version":283,"md5":"dd8e6fafedf00e9a2fc2c80d7d5372f4"}*/
define(function(require) {
    return require("../../../template")("financial/count/view/listHeader", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, searchParam = $data.searchParam, financialTripPlan = $data.financialTripPlan, $out = "";
            return $out += '<div class="financialCount"> <div class="row"> <div class="form-inline T-search-area"> <div class="form-group"> <label class="control-label pull-left"><span>团号：</span></label> <input type="text" value="', 
            $line = 6, $out += $escape(searchParam.tripNumber), $out += '" name ="chooseTripNumber" class="T-tripNumber" placeholder="请输入团号团号" /> </div> <div class="form-group mar-l-10"> <label class="control-label"><span>线路产品：</span></label> <input type="text" value="', 
            $line = 10, $out += $escape(searchParam.lineProductName), $out += '" name="chooseLineProductName" placeholder="全部线路产品" /> <input type="hidden" value="', 
            $line = 11, $out += $escape(searchParam.lineProductId), $out += '" name="lineProductId" /> </div> <div class="form-group mar-l-10"> <label class="control-label"><span>导游：</span></label> <input type="text" value="', 
            $line = 15, $out += $escape(searchParam.guideName), $out += '" name="chooseGuideRealName" placeholder="全部的导游" /> <input type="hidden" value="', 
            $line = 16, $out += $escape(searchParam.guideId), $out += '" name="guideId" /> </div> <div class="form-group mar-l-10"> <label class="control-label"><span>开始日期：</span></label> <input type="text" value="', 
            $line = 20, $out += $escape(searchParam.startTime), $out += '" name="startTime" class=" datepicker" style="width:100px;" placeholder="开始日期" /> </div> <div class="form-group mar-l-10"> <label class="control-label"><span>结束日期：</span></label> <input type="text" value="', 
            $line = 24, $out += $escape(searchParam.endTime), $out += '" name="endTime" class=" datepicker" style="width:100px;" placeholder="结束日期" /> </div> <div class="form-group btn-status btn-group"> <label class="text-right control-label no-padding-right" style="margin-left:10px;">状态:</label> <button data-value="', 
            $line = 28, $out += $escape(searchParam.billStatus), $out += '" data-toggle="dropdown" class="T-select-status btn-sm dropdown-toggle block-up" aria-expanded="false"> <span> ', 
            $line = 30, "-1" == searchParam.billStatus ? ($out += " 待报账 ", $line = 32) : "0" == searchParam.billStatus ? ($out += " 待审核 ", 
            $line = 34) : "1" == searchParam.billStatus ? ($out += " 计调已审 ", $line = 36) : "2" == searchParam.billStatus ? ($out += " 财务已审 ", 
            $line = 38) : ($out += " 全部 ", $line = 40), $out += ' </span> <i class="ace-icon fa fa-angle-down icon-on-right"></i> </button> <ul class="dropdown-menu T-sleect-ul" style="margin-left:40px;"> <li><a data-value="" href="javascript:void(0)">全部</a></li> <li><a data-value="-1" href="javascript:void(0)">待报账</a></li> <li><a data-value="0" href="javascript:void(0)">待审核</a></li> <li><a data-value="1" href="javascript:void(0)">计调已审</a></li> <li><a data-value="2" href="javascript:void(0)">财务已审</a></li> </ul> </div> <div class="form-group mar-l-10"> <button class=" btn-sm T-search search-btn" > <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </div> <div class="form-group"> <label class="control-label ">收入: <span class="F-float F-money">', 
            $line = 60, $out += $escape(financialTripPlan.getAllMoney), $out += '</span></label> <label class="control-label marginLeft-30 ">成本：<span class="F-float F-money">', 
            $line = 61, $out += $escape(financialTripPlan.payAllMoney), $out += '</span></label> <label class="control-label marginLeft-30 ">毛利：<span class="F-float F-money">', 
            $line = 62, $out += $escape(financialTripPlan.grossProfitMoney), $out += '</span></label> <label class="control-label marginLeft-30 ">人均毛利：<span class="F-float F-money">', 
            $line = 63, $out += $escape(financialTripPlan.perGrossProfitMoney), $out += '</span></label> <label class="control-label marginLeft-30 ">人数：<span class="F-float F-count">', 
            $line = 64, $out += $escape(financialTripPlan.adultCount), $out += '</span>大<span class="F-float F-count">', 
            $line = 64, $out += $escape(financialTripPlan.childCount), $out += '</span>小</label> <label class="control-label marginLeft-30 ">团数：<span class="F-float F-count">', 
            $line = 65, $out += $escape(financialTripPlan.tripNumber), $out += '</span></label> </div> </div> <div class="T-counterList" style="margin:0px -10px;"></div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="financialCount">\r\n	<div class="row">\r\n	    <div class="form-inline T-search-area">\r\n        	<div class="form-group">\r\n	           <label class="control-label pull-left"><span>团号：</span></label>\r\n	           <input type="text" value="{{searchParam.tripNumber}}" name ="chooseTripNumber" class="T-tripNumber" placeholder="请输入团号团号" />\r\n            </div>\r\n            <div class="form-group mar-l-10">\r\n            <label class="control-label"><span>线路产品：</span></label>\r\n	            <input type="text" value="{{searchParam.lineProductName}}" name="chooseLineProductName"  placeholder="全部线路产品" />\r\n	            <input type="hidden" value="{{searchParam.lineProductId}}" name="lineProductId" />\r\n			</div>\r\n			<div class="form-group mar-l-10">\r\n			<label class="control-label"><span>导游：</span></label>\r\n	            <input type="text" value="{{searchParam.guideName}}" name="chooseGuideRealName" placeholder="全部的导游" />\r\n	            <input type="hidden" value="{{searchParam.guideId}}" name="guideId" />\r\n			</div>\r\n			<div class="form-group mar-l-10"> \r\n				<label class="control-label"><span>开始日期：</span></label>\r\n            	<input type="text" value="{{searchParam.startTime}}" name="startTime" class=" datepicker" style="width:100px;" placeholder="开始日期" />\r\n            </div>\r\n			<div class="form-group mar-l-10"> \r\n				<label class="control-label"><span>结束日期：</span></label>\r\n            	<input type="text" value="{{searchParam.endTime}}" name="endTime" class=" datepicker" style="width:100px;" placeholder="结束日期" />\r\n            </div>\r\n            <div class="form-group btn-status btn-group">\r\n         		<label class="text-right control-label no-padding-right" style="margin-left:10px;">状态:</label> \r\n				<button data-value="{{searchParam.billStatus}}" data-toggle="dropdown" class="T-select-status btn-sm dropdown-toggle block-up" aria-expanded="false">\r\n					<span>\r\n						{{if searchParam.billStatus == \'-1\'}}\r\n							待报账\r\n						{{else if searchParam.billStatus == \'0\'}}\r\n							待审核\r\n						{{else if searchParam.billStatus == \'1\'}}\r\n							计调已审\r\n						{{else if searchParam.billStatus == \'2\'}}\r\n							财务已审\r\n						{{else}}\r\n							全部\r\n						{{/if}}				\r\n					</span>\r\n					<i class="ace-icon fa fa-angle-down icon-on-right"></i>\r\n				</button>\r\n				<ul class="dropdown-menu T-sleect-ul" style="margin-left:40px;">\r\n					<li><a data-value="" href="javascript:void(0)">全部</a></li>\r\n					<li><a data-value="-1" href="javascript:void(0)">待报账</a></li>\r\n					<li><a data-value="0" href="javascript:void(0)">待审核</a></li>\r\n					<li><a data-value="1" href="javascript:void(0)">计调已审</a></li>\r\n					<li><a data-value="2" href="javascript:void(0)">财务已审</a></li>\r\n				</ul>\r\n			</div>\r\n			<div class="form-group mar-l-10">\r\n		        <button class=" btn-sm  T-search search-btn" >\r\n					<i class="ace-icon fa fa-search"></i>\r\n					搜索\r\n				</button>\r\n			</div>\r\n       	</div>\r\n       	<div class="form-group">\r\n            <label class="control-label ">收入: <span class="F-float F-money">{{financialTripPlan.getAllMoney}}</span></label>\r\n            <label class="control-label marginLeft-30 ">成本：<span class="F-float F-money">{{financialTripPlan.payAllMoney}}</span></label>\r\n            <label class="control-label marginLeft-30 ">毛利：<span class="F-float F-money">{{financialTripPlan.grossProfitMoney}}</span></label>\r\n            <label class="control-label marginLeft-30 ">人均毛利：<span class="F-float F-money">{{financialTripPlan.perGrossProfitMoney}}</span></label>\r\n            <label class="control-label marginLeft-30 ">人数：<span class="F-float F-count">{{financialTripPlan.adultCount}}</span>大<span class="F-float F-count">{{financialTripPlan.childCount}}</span>小</label>\r\n            <label class="control-label marginLeft-30 ">团数：<span class="F-float F-count">{{financialTripPlan.tripNumber}}</span></label>\r\n        </div>\r\n	</div>\r\n	<div class="T-counterList" style="margin:0px -10px;"></div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});