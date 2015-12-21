/*TMODJS:{"debug":true,"version":242,"md5":"e59fffe338b04fd21895478214616f80"}*/
define(function(require) {
    return require("../../../template")("financial/count/view/listHeader", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, searchParam = $data.searchParam, financialTripPlan = $data.financialTripPlan, $out = "";
            return $out += '<div class="row financialCount globalAdd" > <div class="border form-group col-sm-12 "> <div class="search-area Company"> <div class="form-group T-search-area" style="border-bottom:1px dashed #ececec;padding-bottom: 10px "> <div class="col-xs-2"> <label class="control-label pull-left"><span>团号：</span></label> <input type="text" value="', 
            $line = 7, $out += $escape(searchParam.tripNumber), $out += '" name ="chooseTripNumber" class="T-tripNumber" placeholder="请输入团号团号" /> </div> <div class="col-xs-2 timeStartMore"> <label class="control-label"><span>线路产品：</span></label> <input type="text" value="', 
            $line = 11, $out += $escape(searchParam.lineProductName), $out += '" name="chooseLineProductName" placeholder="全部线路产品" /> <input type="hidden" value="', 
            $line = 12, $out += $escape(searchParam.lineProductId), $out += '" name="lineProductId" /> </div> <div class="col-xs-2 timeStartMore"> <label class="control-label"><span>导游：</span></label> <input type="text" value="', 
            $line = 16, $out += $escape(searchParam.guideName), $out += '" name="chooseGuideRealName" placeholder="全部的导游" /> <input type="hidden" value="', 
            $line = 17, $out += $escape(searchParam.guideId), $out += '" name="guideId" /> </div> <div class="col-xs-2 timeStartMore"> <label class="control-label"><span>开始日期：</span></label> <input type="text" value="', 
            $line = 21, $out += $escape(searchParam.startTime), $out += '" name="startTime" class=" datepicker" placeholder="开始日期" /> </div> <div class="col-xs-2 timeStartMore"> <label class="control-label"><span>结束日期：</span></label> <input type="text" value="', 
            $line = 25, $out += $escape(searchParam.endTime), $out += '" name="endTime" class=" datepicker" placeholder="结束日期" /> </div> <div class=" btn-status btn-group timeStartMore"> <label class="text-right control-label no-padding-right" style="margin-left:10px;">状态:</label> <button data-value="', 
            $line = 30, $out += $escape(searchParam.billStatus), $out += '" data-toggle="dropdown" class="T-select-status btn-sm dropdown-toggle block-up" aria-expanded="false"> <span> ', 
            $line = 32, "-1" == searchParam.billStatus ? ($out += " 待报账 ", $line = 34) : "0" == searchParam.billStatus ? ($out += " 待审核 ", 
            $line = 36) : "1" == searchParam.billStatus ? ($out += " 计调已审 ", $line = 38) : "2" == searchParam.billStatus ? ($out += " 财务已审 ", 
            $line = 40) : ($out += " 全部 ", $line = 42), $out += ' </span> <i class="ace-icon fa fa-angle-down icon-on-right"></i> </button> <ul class="dropdown-menu T-sleect-ul" style="margin-left:41px;"> <li><a data-value="" href="javascript:void(0)">全部</a></li> <li><a data-value="-1" href="javascript:void(0)">待报账</a></li> <li><a data-value="0" href="javascript:void(0)">待审核</a></li> <li><a data-value="1" href="javascript:void(0)">计调已审</a></li> <li><a data-value="2" href="javascript:void(0)">财务已审</a></li> </ul> </div> <button class=" btn-sm T-search marginLeft-30 search-btn" > <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </div> <div class="clearfix "> <div class="pull-left" style="margin-right: 18px;margin-left:10px;"> 收入: ', 
            $line = 62, $out += $escape(financialTripPlan.getAllMoney), $out += ' </div> <div class="pull-left" style="margin-right: 18px;"> 成本：', 
            $line = 65, $out += $escape(financialTripPlan.payAllMoney), $out += ' </div> <div class="pull-left" style="margin-right: 18px;"> 毛利：', 
            $line = 68, $out += $escape(financialTripPlan.grossProfitMoney), $out += ' </div> <div class="pull-left" style="margin-right: 18px;"> 人均毛利：', 
            $line = 71, $out += $escape(financialTripPlan.perGrossProfitMoney), $out += ' </div> <div class="pull-left" style="margin-right: 18px;"> 人数：', 
            $line = 74, $out += $escape(financialTripPlan.adultCount), $out += "大", $line = 74, 
            $out += $escape(financialTripPlan.childCount), $out += '小 </div> <div class="pull-left" style="margin-right: 18px;"> 团数：', 
            $line = 77, $out += $escape(financialTripPlan.tripNumber), $out += ' </div> </div> </div> <div class="T-counterList col-sm-12"></div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row financialCount  globalAdd" >\r\n	<div class="border form-group col-sm-12 ">\r\n    <div class="search-area  Company">\r\n        <div class="form-group T-search-area" style="border-bottom:1px dashed #ececec;padding-bottom: 10px ">\r\n        	<div class="col-xs-2">\r\n	           <label class="control-label pull-left"><span>团号：</span></label>\r\n	           <input type="text" value="{{searchParam.tripNumber}}" name ="chooseTripNumber" class="T-tripNumber" placeholder="请输入团号团号" />\r\n            </div>\r\n            <div class="col-xs-2 timeStartMore">\r\n            <label class="control-label"><span>线路产品：</span></label>\r\n	            <input type="text" value="{{searchParam.lineProductName}}" name="chooseLineProductName"  placeholder="全部线路产品" />\r\n	            <input type="hidden" value="{{searchParam.lineProductId}}" name="lineProductId" />\r\n			</div>\r\n			<div class="col-xs-2 timeStartMore">\r\n			<label class="control-label"><span>导游：</span></label>\r\n	            <input type="text" value="{{searchParam.guideName}}" name="chooseGuideRealName" placeholder="全部的导游" />\r\n	            <input type="hidden" value="{{searchParam.guideId}}" name="guideId" />\r\n			</div>\r\n			<div class="col-xs-2 timeStartMore"> \r\n			<label class="control-label"><span>开始日期：</span></label>\r\n            	<input type="text" value="{{searchParam.startTime}}" name="startTime" class=" datepicker" placeholder="开始日期" />\r\n            </div>\r\n			<div class="col-xs-2 timeStartMore"> \r\n			<label class="control-label"><span>结束日期：</span></label>\r\n            	<input type="text" value="{{searchParam.endTime}}" name="endTime" class=" datepicker" placeholder="结束日期" />\r\n            </div>\r\n           \r\n            <div class=" btn-status btn-group timeStartMore">\r\n         	<label class="text-right control-label no-padding-right" style="margin-left:10px;">状态:</label> \r\n				<button data-value="{{searchParam.billStatus}}" data-toggle="dropdown" class="T-select-status btn-sm dropdown-toggle block-up" aria-expanded="false">\r\n					<span>\r\n						{{if searchParam.billStatus == \'-1\'}}\r\n							待报账\r\n						{{else if searchParam.billStatus == \'0\'}}\r\n							待审核\r\n						{{else if searchParam.billStatus == \'1\'}}\r\n							计调已审\r\n						{{else if searchParam.billStatus == \'2\'}}\r\n							财务已审\r\n						{{else}}\r\n							全部\r\n						{{/if}}				\r\n					</span>\r\n					<i class="ace-icon fa fa-angle-down icon-on-right"></i>\r\n				</button>\r\n				<ul class="dropdown-menu T-sleect-ul" style="margin-left:41px;">\r\n					<li><a data-value="" href="javascript:void(0)">全部</a></li>\r\n					<li><a data-value="-1" href="javascript:void(0)">待报账</a></li>\r\n					<li><a data-value="0" href="javascript:void(0)">待审核</a></li>\r\n					<li><a data-value="1" href="javascript:void(0)">计调已审</a></li>\r\n					<li><a data-value="2" href="javascript:void(0)">财务已审</a></li>\r\n				</ul>\r\n			</div>\r\n            <button class=" btn-sm  T-search marginLeft-30 search-btn" >\r\n				<i class="ace-icon fa fa-search"></i>\r\n				搜索\r\n			</button>\r\n       	</div>\r\n    </div>\r\n        <div class="clearfix ">\r\n            <div class="pull-left" style="margin-right: 18px;margin-left:10px;">\r\n                收入: {{financialTripPlan.getAllMoney}}\r\n            </div>\r\n            <div class="pull-left" style="margin-right: 18px;">\r\n                成本：{{financialTripPlan.payAllMoney}}\r\n            </div>\r\n            <div class="pull-left" style="margin-right: 18px;">\r\n                毛利：{{financialTripPlan.grossProfitMoney}}\r\n            </div>\r\n            <div class="pull-left" style="margin-right: 18px;">\r\n                人均毛利：{{financialTripPlan.perGrossProfitMoney}}\r\n            </div>\r\n            <div class="pull-left" style="margin-right: 18px;">\r\n                人数：{{financialTripPlan.adultCount}}大{{financialTripPlan.childCount}}小\r\n            </div>\r\n            <div class="pull-left" style="margin-right: 18px;">\r\n                团数：{{financialTripPlan.tripNumber}}\r\n            </div>\r\n        </div>\r\n\r\n	</div>\r\n	<div class="T-counterList col-sm-12"></div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});