/*TMODJS:{"debug":true,"version":72,"md5":"7a3376d232f5c9a00f76c8063f819eae"}*/
define(function(require) {
    return require("../../../template")("financial/count/view/listHeader", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, searchParam = $data.searchParam, financialTripPlan = $data.financialTripPlan, $out = "";
            return $out += '<div class="row financialCount globalAdd" > <div class="border form-group col-sm-12 "> <div class="search-area Company"> <div class="form-group " style="border-bottom:1px dashed #ececec;padding-bottom: 10px "> <div class="col-xs-2"> <input type="text" value="', 
            $line = 6, $out += $escape(searchParam.tripNumber), $out += '" name ="chooseTripNumber" class="col-xs-12 clearBlur T-tripNumber" placeholder="全部团号" /> <input type="hidden" value="', 
            $line = 7, $out += $escape(searchParam.id), $out += '" name="tripNumber" /> </div> <div class="col-xs-1"> <input type="text" value="', 
            $line = 10, $out += $escape(searchParam.lineProductName), $out += '" name="chooseLineProductName" class="col-xs-12 clearBlur" placeholder="全部线路产品" /> <input type="hidden" value="', 
            $line = 11, $out += $escape(searchParam.lineProductId), $out += '" name="lineProductId" /> </div> <div class="col-xs-1"> <input type="text" value="', 
            $line = 15, $out += $escape(searchParam.guideName), $out += '" name="chooseGuideRealName" class="col-xs-12 clearBlur" placeholder="全部的导游" /> <input type="hidden" value="', 
            $line = 16, $out += $escape(searchParam.guideId), $out += '" name="guideId" /> </div> <div class="col-xs-1"> <input type="text" value="', 
            $line = 19, $out += $escape(searchParam.startTime), $out += '" name="startTime" class="col-xs-10 date-picker" placeholder="开始日期" /> </div> <div class="col-xs-1"> <input type="text" value="', 
            $line = 23, $out += $escape(searchParam.endTime), $out += '" name="entTime" class="col-xs-10 date-picker" placeholder="结束日期" /> </div> <div class=" btn-status btn-group" style="margin-left: -10px"> <button data-value="', 
            $line = 26, $out += $escape(searchParam.billStatus), $out += '" data-toggle="dropdown" class=" btn-sm dropdown-toggle block-up" aria-expanded="false"> <span> ', 
            $line = 28, "-1" == searchParam.billStatus ? ($out += " 待报账 ", $line = 30) : "0" == searchParam.billStatus ? ($out += " 待审核 ", 
            $line = 32) : "1" == searchParam.billStatus ? ($out += " 计调已审 ", $line = 34) : "2" == searchParam.billStatus ? ($out += " 财务已审 ", 
            $line = 36) : ($out += " 全部 ", $line = 38), $out += ' </span> <i class="ace-icon fa fa-angle-down icon-on-right"></i> </button> <ul class="dropdown-menu"> <li><a data-value="" href="javascript:void(0)">全部</a></li> <li><a data-value="-1" href="javascript:void(0)">待报账</a></li> <li><a data-value="0" href="javascript:void(0)">待审核</a></li> <li><a data-value="1" href="javascript:void(0)">计调已审</a></li> <li><a data-value="2" href="javascript:void(0)">财务已审</a></li> </ul> </div> <button class=" btn-sm btn-arrangeTourist-search btn-height search-btn" > <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </div> <div class="clearfix "> <div class="pull-left" style="margin-right: 18px;"> 收入: ', 
            $line = 60, $out += $escape(financialTripPlan.getAllMoney), $out += ' </div> <div class="pull-left" style="margin-right: 18px;"> 成本：', 
            $line = 63, $out += $escape(financialTripPlan.payAllMoney), $out += ' </div> <div class="pull-left" style="margin-right: 18px;"> 毛利：', 
            $line = 66, $out += $escape(financialTripPlan.grossProfitMoney), $out += ' </div> <div class="pull-left" style="margin-right: 18px;"> 人均毛利：', 
            $line = 69, $out += $escape(financialTripPlan.perGrossProfitMoney), $out += ' </div> <div class="pull-left" style="margin-right: 18px;"> 人数：', 
            $line = 72, $out += $escape(financialTripPlan.adultCount), $out += "大", $line = 72, 
            $out += $escape(financialTripPlan.childCount), $out += '小 </div> <div class="pull-left" style="margin-right: 18px;"> 团数：', 
            $line = 75, $out += $escape(financialTripPlan.tripNumber), $out += ' </div> </div> </div> <div class="counterList"></div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row financialCount  globalAdd" >\r\n	<div class="border form-group col-sm-12 ">\r\n    <div class="search-area  Company">\r\n        <div class="form-group " style="border-bottom:1px dashed #ececec;padding-bottom: 10px ">\r\n        	<div class="col-xs-2">\r\n	            <input type="text" value="{{searchParam.tripNumber}}" name ="chooseTripNumber" class="col-xs-12 clearBlur T-tripNumber" placeholder="全部团号" />\r\n	            <input type="hidden" value="{{searchParam.id}}" name="tripNumber" />\r\n            </div>\r\n            <div class="col-xs-1">\r\n	            <input type="text" value="{{searchParam.lineProductName}}" name="chooseLineProductName" class="col-xs-12 clearBlur" placeholder="全部线路产品" />\r\n	            <input type="hidden" value="{{searchParam.lineProductId}}" name="lineProductId" />\r\n			</div>\r\n			 \r\n			<div class="col-xs-1">\r\n	            <input type="text" value="{{searchParam.guideName}}" name="chooseGuideRealName" class="col-xs-12 clearBlur" placeholder="全部的导游" />\r\n	            <input type="hidden" value="{{searchParam.guideId}}" name="guideId" />\r\n			</div>\r\n			<div class="col-xs-1"> \r\n            	<input type="text" value="{{searchParam.startTime}}" name="startTime" class="col-xs-10 date-picker" placeholder="开始日期" />\r\n            </div>\r\n			\r\n			<div class="col-xs-1"> \r\n            	<input type="text" value="{{searchParam.endTime}}" name="entTime" class="col-xs-10 date-picker" placeholder="结束日期" />\r\n            </div>\r\n            <div class=" btn-status btn-group" style="margin-left: -10px">\r\n				<button data-value="{{searchParam.billStatus}}" data-toggle="dropdown" class=" btn-sm dropdown-toggle block-up" aria-expanded="false">\r\n					<span>\r\n						{{if searchParam.billStatus == \'-1\'}}\r\n							待报账\r\n						{{else if searchParam.billStatus == \'0\'}}\r\n							待审核\r\n						{{else if searchParam.billStatus == \'1\'}}\r\n							计调已审\r\n						{{else if searchParam.billStatus == \'2\'}}\r\n							财务已审\r\n						{{else}}\r\n							全部\r\n						{{/if}}				\r\n					</span>\r\n					<i class="ace-icon fa fa-angle-down icon-on-right"></i>\r\n				</button>\r\n				<ul class="dropdown-menu">\r\n					<li><a data-value="" href="javascript:void(0)">全部</a></li>\r\n					<li><a data-value="-1" href="javascript:void(0)">待报账</a></li>\r\n					<li><a data-value="0" href="javascript:void(0)">待审核</a></li>\r\n					<li><a data-value="1" href="javascript:void(0)">计调已审</a></li>\r\n					<li><a data-value="2" href="javascript:void(0)">财务已审</a></li>\r\n				</ul>\r\n			</div>\r\n            \r\n            <button class=" btn-sm  btn-arrangeTourist-search btn-height search-btn" >\r\n				<i class="ace-icon fa fa-search"></i>\r\n				搜索\r\n			</button>\r\n       	</div>\r\n    </div>\r\n\r\n        <div class="clearfix ">\r\n            <div class="pull-left" style="margin-right: 18px;">\r\n                收入: {{financialTripPlan.getAllMoney}}\r\n            </div>\r\n            <div class="pull-left" style="margin-right: 18px;">\r\n                成本：{{financialTripPlan.payAllMoney}}\r\n            </div>\r\n            <div class="pull-left" style="margin-right: 18px;">\r\n                毛利：{{financialTripPlan.grossProfitMoney}}\r\n            </div>\r\n            <div class="pull-left" style="margin-right: 18px;">\r\n                人均毛利：{{financialTripPlan.perGrossProfitMoney}}\r\n            </div>\r\n            <div class="pull-left" style="margin-right: 18px;">\r\n                人数：{{financialTripPlan.adultCount}}大{{financialTripPlan.childCount}}小\r\n            </div>\r\n            <div class="pull-left" style="margin-right: 18px;">\r\n                团数：{{financialTripPlan.tripNumber}}\r\n            </div>\r\n        </div>\r\n\r\n	</div>\r\n	<div class="counterList"></div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});