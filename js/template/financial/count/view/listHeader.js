/*TMODJS:{"debug":true,"version":35,"md5":"53eb4f0177b42b72e2f3be1c77ecebe8"}*/
define(function(require) {
    return require("../../../template")("financial/count/view/listHeader", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, searchParam = $data.searchParam, financialTripPlan = $data.financialTripPlan, $out = "";
            return $out += '<div class="row financialCount" > <div class="search-area Company"> <div class="form-group"> <div class="col-xs-1"> <input type="text" value="', 
            $line = 6, $out += $escape(searchParam.tripNumber), $out += '" name ="chooseTripNumber" class="col-xs-12 clearBlur" placeholder="全部团号" /> <input type="hidden" value="', 
            $line = 7, $out += $escape(searchParam.tripNumber), $out += '" name="tripNumber" /> </div> <div class="col-xs-1"> <input type="text" value="', 
            $line = 11, $out += $escape(searchParam.lineProductName), $out += '" name="chooseLineProductName" class="col-xs-12 clearBlur" placeholder="全部线路产品" /> <input type="hidden" value="', 
            $line = 12, $out += $escape(searchParam.lineProductId), $out += '" name="lineProductId" /> </div> <div class="col-xs-1"> <input type="text" value="', 
            $line = 16, $out += $escape(searchParam.guideName), $out += '" name="chooseGuideRealName" class="col-xs-12 clearBlur" placeholder="全部的导游" /> <input type="hidden" value="', 
            $line = 17, $out += $escape(searchParam.guideId), $out += '" name="guideId" /> </div> <div class="col-xs-1"> <input type="text" value="', 
            $line = 20, $out += $escape(searchParam.startTime), $out += '" name="startTime" class="col-xs-10 date-picker" placeholder="开始日期" /> </div> <div class="col-xs-1"> <input type="text" value="', 
            $line = 24, $out += $escape(searchParam.endTime), $out += '" name="entTime" class="col-xs-10 date-picker" placeholder="结束日期" /> </div> <div class="col-xs-1 btn-status btn-group"> <button data-value="', 
            $line = 27, $out += $escape(searchParam.billStatus), $out += '" data-toggle="dropdown" class=" btn-sm dropdown-toggle block-up" aria-expanded="false"> <span> ', 
            $line = 29, "-1" == searchParam.billStatus ? ($out += " 待报账 ", $line = 31) : "0" == searchParam.billStatus ? ($out += " 待审核 ", 
            $line = 33) : "1" == searchParam.billStatus ? ($out += " 计调已审 ", $line = 35) : "2" == searchParam.billStatus ? ($out += " 财务已审 ", 
            $line = 37) : ($out += " 全部 ", $line = 39), $out += ' </span> <i class="ace-icon fa fa-angle-down icon-on-right"></i> </button> <ul class="dropdown-menu"> <li><a data-value="" href="javascript:void(0)">全部</a></li> <li><a data-value="-1" href="javascript:void(0)">待报账</a></li> <li><a data-value="0" href="javascript:void(0)">待审核</a></li> <li><a data-value="1" href="javascript:void(0)">计调已审</a></li> <li><a data-value="2" href="javascript:void(0)">财务已审</a></li> </ul> </div> <button class=" btn-sm btn-arrangeTourist-search btn-height search-btn" > <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </div> <div class="col-md-12"> <div class="clearfix"> <div class="pull-left" style="margin-right: 18px;"> 收入: ', 
            $line = 62, $out += $escape(financialTripPlan.getAllMoney), $out += ' </div> <div class="pull-left" style="margin-right: 18px;"> 成本：', 
            $line = 65, $out += $escape(financialTripPlan.payAllMoney), $out += ' </div> <div class="pull-left" style="margin-right: 18px;"> 毛利：', 
            $line = 68, $out += $escape(financialTripPlan.grossProfitMoney), $out += ' </div> <div class="pull-left" style="margin-right: 18px;"> 人均毛利：', 
            $line = 71, $out += $escape(financialTripPlan.perGrossProfitMoney), $out += ' </div> <div class="pull-left" style="margin-right: 18px;"> 人数：', 
            $line = 74, $out += $escape(financialTripPlan.adultCount), $out += "大", $line = 74, 
            $out += $escape(financialTripPlan.childCount), $out += '小 </div> <div class="pull-left" style="margin-right: 18px;"> 团数：', 
            $line = 77, $out += $escape(financialTripPlan.tripNumber), $out += ' </div> </div> <div class="counterList"></div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row financialCount" >\r\n    <div class="search-area  Company">\r\n        <div class="form-group">\r\n        	<div class="col-xs-1">\r\n        	   \r\n	            <input type="text" value="{{searchParam.tripNumber}}" name ="chooseTripNumber" class="col-xs-12 clearBlur" placeholder="全部团号" />	            \r\n	            <input type="hidden" value="{{searchParam.tripNumber}}" name="tripNumber" />\r\n            </div>\r\n            \r\n            <div class="col-xs-1"> \r\n	            <input type="text" value="{{searchParam.lineProductName}}" name="chooseLineProductName" class="col-xs-12 clearBlur" placeholder="全部线路产品" />\r\n	            <input type="hidden" value="{{searchParam.lineProductId}}" name="lineProductId" />\r\n			</div>\r\n			 \r\n			<div class="col-xs-1">\r\n	            <input type="text" value="{{searchParam.guideName}}" name="chooseGuideRealName" class="col-xs-12 clearBlur" placeholder="全部的导游" />\r\n	            <input type="hidden" value="{{searchParam.guideId}}" name="guideId" />\r\n			</div>\r\n			<div class="col-xs-1"> \r\n            	<input type="text" value="{{searchParam.startTime}}" name="startTime" class="col-xs-10 date-picker" placeholder="开始日期" />\r\n            </div>\r\n			\r\n			<div class="col-xs-1"> \r\n            	<input type="text" value="{{searchParam.endTime}}" name="entTime" class="col-xs-10 date-picker" placeholder="结束日期" />\r\n            </div>\r\n            <div class="col-xs-1 btn-status btn-group">\r\n				<button data-value="{{searchParam.billStatus}}" data-toggle="dropdown" class=" btn-sm dropdown-toggle block-up" aria-expanded="false">\r\n					<span>\r\n						{{if searchParam.billStatus == \'-1\'}}\r\n							待报账\r\n						{{else if searchParam.billStatus == \'0\'}}\r\n							待审核\r\n						{{else if searchParam.billStatus == \'1\'}}\r\n							计调已审\r\n						{{else if searchParam.billStatus == \'2\'}}\r\n							财务已审\r\n						{{else}}\r\n							全部\r\n						{{/if}}				\r\n					</span>\r\n					<i class="ace-icon fa fa-angle-down icon-on-right"></i>\r\n				</button>\r\n				<ul class="dropdown-menu">\r\n					<li><a data-value="" href="javascript:void(0)">全部</a></li>\r\n					<li><a data-value="-1" href="javascript:void(0)">待报账</a></li>\r\n					<li><a data-value="0" href="javascript:void(0)">待审核</a></li>\r\n					<li><a data-value="1" href="javascript:void(0)">计调已审</a></li>\r\n					<li><a data-value="2" href="javascript:void(0)">财务已审</a></li>\r\n				</ul>\r\n			</div>\r\n            \r\n            <button class=" btn-sm  btn-arrangeTourist-search btn-height search-btn" >\r\n				<i class="ace-icon fa fa-search"></i>\r\n				搜索\r\n			</button>\r\n       	</div>\r\n    </div>\r\n\r\n    <div class="col-md-12">\r\n        <div class="clearfix">\r\n            <div class="pull-left" style="margin-right: 18px;">\r\n                收入: {{financialTripPlan.getAllMoney}}\r\n            </div>\r\n            <div class="pull-left" style="margin-right: 18px;">\r\n                成本：{{financialTripPlan.payAllMoney}}\r\n            </div>\r\n            <div class="pull-left" style="margin-right: 18px;">\r\n                毛利：{{financialTripPlan.grossProfitMoney}}\r\n            </div>\r\n            <div class="pull-left" style="margin-right: 18px;">\r\n                人均毛利：{{financialTripPlan.perGrossProfitMoney}}\r\n            </div>\r\n            <div class="pull-left" style="margin-right: 18px;">\r\n                人数：{{financialTripPlan.adultCount}}大{{financialTripPlan.childCount}}小\r\n            </div>\r\n            <div class="pull-left" style="margin-right: 18px;">\r\n                团数：{{financialTripPlan.tripNumber}}\r\n            </div>\r\n        </div>\r\n        <div class="counterList"></div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});