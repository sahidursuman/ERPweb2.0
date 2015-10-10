/*TMODJS:{"debug":true,"version":289,"md5":"0730d748c9f0620255f714268d48d428"}*/
define(function(require) {
    return require("../../../template")("financial/count/view/list", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, searchParam = $data.searchParam, $each = $utils.$each, tripPlanList = $data.tripPlanList, recordSize = ($data.financialTripPlan, 
            $data.$index, $data.recordSize), totalPage = $data.totalPage, pageNo = $data.pageNo, $out = "";
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
            $line = 37) : ($out += " 全部 ", $line = 39), $out += ' </span> <i class="ace-icon fa fa-angle-down icon-on-right"></i> </button> <ul class="dropdown-menu"> <li><a data-value="" href="javascript:void(0)">全部</a></li> <li><a data-value="-1" href="javascript:void(0)">待报账</a></li> <li><a data-value="0" href="javascript:void(0)">待审核</a></li> <li><a data-value="1" href="javascript:void(0)">计调已审</a></li> <li><a data-value="2" href="javascript:void(0)">财务已审</a></li> </ul> </div> <button class=" btn-sm btn-arrangeTourist-search btn-height search-btn" > <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </div> <div class="row ticketList"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover" style="margin-top: 20px"> <thead> <tr class="bg-blur"> <th >团号</th> <th >出团日期</th> <th >完团日期</th> <th >线路产品</th> <th >人数</th> <th >团队人数</th> <th >导游</th> <th >车牌号</th> <th >收入</th> <th >成本</th> <th >毛利</th> <th >人均毛利</th> <th >审核状态</th> <th >审核人</th> <th >操作</th> </tr> </thead> <tbody> ', 
            $line = 82, $each(tripPlanList, function(financialTripPlan) {
                $out += " ", $line = 83, null != financialTripPlan && ($out += ' <tr data-entity-id="', 
                $line = 84, $out += $escape(financialTripPlan.id), $out += '"> <td>', $line = 85, 
                $out += $escape(financialTripPlan.tripPlan.tripNumber), $out += "</td> <td>", $line = 86, 
                $out += $escape($helpers.dateFormat(financialTripPlan.tripPlan.startTime, "yyyy-MM-dd")), 
                $out += "</td> <td>", $line = 87, $out += $escape($helpers.dateFormat(financialTripPlan.tripPlan.endTime, "yyyy-MM-dd")), 
                $out += "</td> <td>", $line = 88, null != financialTripPlan.tripPlan.lineProduct && ($line = 88, 
                $out += $escape(financialTripPlan.tripPlan.lineProduct.name), $line = 88), $out += "</td> <td>", 
                $line = 89, $out += $escape(financialTripPlan.tripPlan.touristAdultCount + financialTripPlan.tripPlan.touristChildCount), 
                $out += "</td> <td>", $line = 90, $out += $escape(financialTripPlan.tripPlan.touristAdultCount + financialTripPlan.tripPlan.touristChildCount), 
                $out += "</td> <td>", $line = 91, null != financialTripPlan.tripPlan.guide && ($line = 91, 
                $out += $escape(financialTripPlan.tripPlan.guide.realname), $line = 91), $out += "</td> <td>", 
                $line = 92, null != financialTripPlan.tripPlan.bus && ($line = 92, $out += $escape(financialTripPlan.tripPlan.bus.licenseNumber), 
                $line = 92), $out += "</td> <td>", $line = 93, $out += $escape(financialTripPlan.getAllMoney), 
                $out += "</td> <td>", $line = 94, $out += $escape(financialTripPlan.payAllMoney), 
                $out += "</td> <td>", $line = 95, $out += $escape(financialTripPlan.grossProfitMoney), 
                $out += "</td> <td>", $line = 96, $out += $escape(financialTripPlan.perGrossProfitMoney), 
                $out += "</td> <td>", $line = 97, -1 == financialTripPlan.tripPlan.billStatus ? ($out += ' <font color="#ff9900">待报账</font> ', 
                $line = 99) : 0 == financialTripPlan.tripPlan.billStatus ? ($out += ' <font color="#ff9900">待审核</font> ', 
                $line = 101) : 1 == financialTripPlan.tripPlan.billStatus ? ($out += ' <font color="green">计调已审</font> ', 
                $line = 103) : 2 == financialTripPlan.tripPlan.billStatus && ($out += ' <font color="green">财务已审</font> ', 
                $line = 105), $out += " </td> <td> ", $line = 108, 2 == financialTripPlan.tripPlan.billStatus ? ($out += " ", 
                $line = 109, null != financialTripPlan.tripPlan.financialCheckUser && ($line = 109, 
                $out += $escape(financialTripPlan.tripPlan.financialCheckUser.realName), $line = 109), 
                $out += " ", $line = 110) : 1 == financialTripPlan.tripPlan.billStatus && ($out += " ", 
                $line = 111, null != financialTripPlan.tripPlan.oPCheckUser && ($line = 111, $out += $escape(financialTripPlan.tripPlan.oPCheckUser.realName), 
                $line = 111), $out += " ", $line = 112), $out += ' </td> <td> <a data-entity-billStatus="', 
                $line = 115, $out += $escape(financialTripPlan.tripPlan.billStatus), $out += '" data-entity-id="', 
                $line = 115, $out += $escape(financialTripPlan.id), $out += '" class="cursor btn-count-update" > 审核 </a><a href="" class="cursor"> |</a> <a data-entity-id="', 
                $line = 118, $out += $escape(financialTripPlan.id), $out += '" class=" btn-count-examine cursor"> 明细 </a><a href="" class="cursor"> |</a> <a data-entity-billStatus="', 
                $line = 121, $out += $escape(financialTripPlan.tripPlan.billStatus), $out += '" data-entity-id="', 
                $line = 121, $out += $escape(financialTripPlan.id), $out += '" class="cursor btn-guide-account" > 报账 </a> </td> </tr> ', 
                $line = 126), $out += " ", $line = 127;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <div class="dataTables_info" id="dynamic-table_info" role="status" aria-live="polite">共计 ', 
            $line = 132, $out += $escape(recordSize), $out += ' 条记录</div> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers" id="dynamic-table_paginate"> <ul class="pagination"> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="first" href="javascript:void(0)">首页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="previous"href="javascript:void(0)">上一页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"> <a href="javascript:void(0)"> ', 
            $line = 141, 0 == totalPage ? ($out += " 0/0 ", $line = 143) : ($out += " ", $line = 144, 
            $out += $escape(pageNo + 1), $out += "/", $line = 144, $out += $escape(totalPage), 
            $out += " ", $line = 145), $out += ' </a> </li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="next" href="javascript:void(0)">下一页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="last" href="javascript:void(0)">尾页</a></li> </ul> </div> </div> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row financialCount" >\r\n    <div class="search-area  Company">\r\n        <div class="form-group">\r\n        	<div class="col-xs-1"> \r\n        	   \r\n	            <input type="text" value="{{searchParam.tripNumber}}" name ="chooseTripNumber" class="col-xs-12 clearBlur" placeholder="全部团号" />	            \r\n	            <input type="hidden" value="{{searchParam.tripNumber}}" name="tripNumber" />\r\n            </div>\r\n            \r\n            <div class="col-xs-1"> \r\n	            <input type="text" value="{{searchParam.lineProductName}}" name="chooseLineProductName" class="col-xs-12 clearBlur" placeholder="全部线路产品" />\r\n	            <input type="hidden" value="{{searchParam.lineProductId}}" name="lineProductId" />\r\n			</div>\r\n			 \r\n			<div class="col-xs-1">\r\n	            <input type="text" value="{{searchParam.guideName}}" name="chooseGuideRealName" class="col-xs-12 clearBlur" placeholder="全部的导游" />\r\n	            <input type="hidden" value="{{searchParam.guideId}}" name="guideId" />\r\n			</div>\r\n			<div class="col-xs-1"> \r\n            	<input type="text" value="{{searchParam.startTime}}" name="startTime" class="col-xs-10 date-picker" placeholder="开始日期" />\r\n            </div>\r\n			\r\n			<div class="col-xs-1"> \r\n            	<input type="text" value="{{searchParam.endTime}}" name="entTime" class="col-xs-10 date-picker" placeholder="结束日期" />\r\n            </div>\r\n            <div class="col-xs-1 btn-status btn-group">\r\n				<button data-value="{{searchParam.billStatus}}" data-toggle="dropdown" class=" btn-sm dropdown-toggle block-up" aria-expanded="false">\r\n					<span>\r\n						{{if searchParam.billStatus == \'-1\'}}\r\n							待报账\r\n						{{else if searchParam.billStatus == \'0\'}}\r\n							待审核\r\n						{{else if searchParam.billStatus == \'1\'}}\r\n							计调已审\r\n						{{else if searchParam.billStatus == \'2\'}}\r\n							财务已审\r\n						{{else}}\r\n							全部\r\n						{{/if}}				\r\n					</span>\r\n					<i class="ace-icon fa fa-angle-down icon-on-right"></i>\r\n				</button>\r\n				<ul class="dropdown-menu">\r\n					<li><a data-value="" href="javascript:void(0)">全部</a></li>\r\n					<li><a data-value="-1" href="javascript:void(0)">待报账</a></li>\r\n					<li><a data-value="0" href="javascript:void(0)">待审核</a></li>\r\n					<li><a data-value="1" href="javascript:void(0)">计调已审</a></li>\r\n					<li><a data-value="2" href="javascript:void(0)">财务已审</a></li>\r\n				</ul>\r\n			</div>\r\n            \r\n            <button class=" btn-sm  btn-arrangeTourist-search btn-height search-btn" >\r\n				<i class="ace-icon fa fa-search"></i>\r\n				搜索\r\n			</button>\r\n       	</div>\r\n    </div>\r\n\r\n    <div class="row ticketList">\r\n        <div class="col-xs-12">\r\n            <table class="table table-striped table-bordered table-hover" style="margin-top: 20px">\r\n                <thead>\r\n                <tr class="bg-blur">\r\n                    <th >团号</th>\r\n                    <th >出团日期</th>\r\n                    <th >完团日期</th>\r\n                    <th >线路产品</th>\r\n                    <th >人数</th>\r\n                    <th >团队人数</th>\r\n                    <th >导游</th>\r\n                    <th >车牌号</th>\r\n                    <th >收入</th>\r\n                    <th >成本</th>\r\n                    <th >毛利</th>\r\n                    <th >人均毛利</th>\r\n                    <th >审核状态</th>\r\n                    <th >审核人</th>\r\n                    <th >操作</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody> \r\n                {{each tripPlanList as financialTripPlan}}\r\n                	{{if financialTripPlan != null}}\r\n                	<tr data-entity-id="{{financialTripPlan.id}}">\r\n                	<td>{{financialTripPlan.tripPlan.tripNumber}}</td>\r\n                	<td>{{financialTripPlan.tripPlan.startTime | dateFormat:\'yyyy-MM-dd\'}}</td>\r\n                	<td>{{financialTripPlan.tripPlan.endTime | dateFormat:\'yyyy-MM-dd\'}}</td>\r\n                	<td>{{if financialTripPlan.tripPlan.lineProduct != null}}{{financialTripPlan.tripPlan.lineProduct.name}}{{/if}}</td>\r\n                	<td>{{financialTripPlan.tripPlan.touristAdultCount+financialTripPlan.tripPlan.touristChildCount}}</td>\r\n                	<td>{{financialTripPlan.tripPlan.touristAdultCount+financialTripPlan.tripPlan.touristChildCount}}</td>\r\n                	<td>{{if financialTripPlan.tripPlan.guide != null}}{{financialTripPlan.tripPlan.guide.realname}}{{/if}}</td>\r\n                	<td>{{if financialTripPlan.tripPlan.bus != null}}{{financialTripPlan.tripPlan.bus.licenseNumber}}{{/if}}</td>\r\n                	<td>{{financialTripPlan.getAllMoney}}</td>\r\n                	<td>{{financialTripPlan.payAllMoney}}</td>\r\n                	<td>{{financialTripPlan.grossProfitMoney}}</td>\r\n                	<td>{{financialTripPlan.perGrossProfitMoney}}</td>\r\n                	<td>{{if financialTripPlan.tripPlan.billStatus == -1}}\r\n                		<font color="#ff9900">待报账</font>\r\n                		{{else if financialTripPlan.tripPlan.billStatus == 0}}\r\n                		<font color="#ff9900">待审核</font>\r\n                		{{else if financialTripPlan.tripPlan.billStatus == 1}}\r\n                		<font color="green">计调已审</font>\r\n                		{{else if financialTripPlan.tripPlan.billStatus == 2}}\r\n                		<font color="green">财务已审</font>\r\n                		{{/if}}\r\n                	</td>\r\n                	<td>\r\n                		{{if financialTripPlan.tripPlan.billStatus == 2}}\r\n                			{{if financialTripPlan.tripPlan.financialCheckUser != null}}{{financialTripPlan.tripPlan.financialCheckUser.realName}}{{/if}}\r\n                		{{else if financialTripPlan.tripPlan.billStatus == 1}}\r\n                			{{if financialTripPlan.tripPlan.oPCheckUser != null}}{{financialTripPlan.tripPlan.oPCheckUser.realName}}{{/if}}\r\n                		{{/if}}\r\n                	</td>\r\n                	<td>\r\n                        <a data-entity-billStatus="{{financialTripPlan.tripPlan.billStatus}}" data-entity-id="{{financialTripPlan.id}}" class="cursor btn-count-update" >\r\n                           	审核\r\n                        </a><a href="" class="cursor"> |</a>\r\n                        <a data-entity-id="{{financialTripPlan.id}}" class=" btn-count-examine cursor">\r\n                           	明细\r\n                 		</a><a href="" class="cursor"> |</a>\r\n                 		<a data-entity-billStatus="{{financialTripPlan.tripPlan.billStatus}}" data-entity-id="{{financialTripPlan.id}}" class="cursor btn-guide-account" >\r\n                           	报账\r\n                        </a>\r\n                    </td>\r\n                	</tr> \r\n                	{{/if}}\r\n                {{/each}}\r\n                </tbody>\r\n            </table>\r\n            <div class="row pageMode">\r\n                <div class="col-xs-6">\r\n                    <div class="dataTables_info" id="dynamic-table_info" role="status" aria-live="polite">共计 {{recordSize}} 条记录</div>\r\n                </div>\r\n                <div class="col-xs-6">\r\n                    <div class="dataTables_paginate paging_simple_numbers" id="dynamic-table_paginate">\r\n                        <ul class="pagination">\r\n                            <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="first" href="javascript:void(0)">首页</a></li>\r\n                            <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="previous"href="javascript:void(0)">上一页</a></li>\r\n                            <li class="paginate_button" aria-controls="dynamic-table" tabindex="0">\r\n                                <a href="javascript:void(0)">\r\n                                    {{if totalPage == 0}}\r\n                                    0/0\r\n                                    {{else}}\r\n                                    {{pageNo+1}}/{{totalPage}}\r\n                                    {{/if}}\r\n                                </a>\r\n                            </li>\r\n                            <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="next"  href="javascript:void(0)">下一页</a></li>\r\n                            <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="last" href="javascript:void(0)">尾页</a></li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});