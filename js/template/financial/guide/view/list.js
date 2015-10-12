/*TMODJS:{"debug":true,"version":190,"md5":"1a795595c7afdf3bc9dc707212509696"}*/
define(function(require) {
    return require("../../../template")("financial/guide/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, guideInfoList = $data.guideInfoList, $escape = ($data.guideInfo, 
            $data.$index, $utils.$escape), yearList = $data.yearList, financialGuideSumList = ($data.year, 
            $data.financialGuideSumList), recordSize = ($data.sumList, $data.recordSize), totalPage = $data.totalPage, pageNo = $data.pageNo, $out = "";
            return $out += '<div class="row"> <div class="form-group guideMainForm"> <label class=" control-label " style="float: left;margin-top:5px">导游：</label> <div class="col-sm-2"> <select name="guideId" class="col-xs-12"> <option value="">全部</option> ', 
            $line = 7, $each(guideInfoList, function(guideInfo) {
                $out += ' <option value="', $line = 8, $out += $escape(guideInfo.guideId), $out += '">', 
                $line = 8, $out += $escape(guideInfo.guideName), $out += "</option> ", $line = 9;
            }), $out += ' </select> </div> <label class=" control-label no-padding-right" style="float: left;margin-left:60px;margin-top: 5px"> 账期： </label> <select name="year" class="col-sm-1"> ', 
            $line = 17, $each(yearList, function(year) {
                $out += ' <option value="', $line = 18, $out += $escape(year), $out += '">', $line = 18, 
                $out += $escape(year), $out += "</option> ", $line = 19;
            }), $out += ' </select> <select name="month" style="margin-left: 20px" class="col-sm-1"> <option value="">全部</option> <option value="1">1月</option> <option value="2">2月</option> <option value="3">3月</option> <option value="4">4月</option> <option value="5">5月</option> <option value="6">6月</option> <option value="7">7月</option> <option value="8">8月</option> <option value="9">9月</option> <option value="10">10月</option> <option value="11">11月</option> <option value="12">12月</option> </select> <button class=" btn-sm btn-financialguide-search search-btn btn-height" style="margin-left: 60px;"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> <div class="row guideList"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover"> <thead> <tr class="bg-blur"> <th>导游</th> <th>总账面退补</th> <th>总实际退补</th> <th>总已结账</th> <th>总未结账</th> <th>对账进度</th> <th>操作</th> </tr> </thead> <tbody> ', 
            $line = 56, $each(financialGuideSumList, function(sumList) {
                $out += " <tr> <td>", $line = 58, $out += $escape(sumList.guideName), $out += "</td> <td>", 
                $line = 59, $out += $escape(sumList.sumBackGuideMoney), $out += "</td> <td>", $line = 60, 
                $out += $escape(sumList.sumRealBackGuideMoney), $out += "</td> <td>", $line = 61, 
                $out += $escape(sumList.sumAlreadyColseAccountMoney), $out += "</td> <td>", $line = 62, 
                $out += $escape(sumList.sumUnCloseAccountMoney), $out += "</td> <td> ", $line = 64, 
                sumList.allCount != sumList.checkedCount && ($out += ' <span style="color:#ff9900"> ', 
                $line = 65, $out += $escape(sumList.checkedCount), $line = 65, $out += $escape("/"), 
                $line = 65, $out += $escape(sumList.allCount), $out += "</span> ", $line = 66), 
                $out += " ", $line = 67, sumList.allCount == sumList.checkedCount && ($out += ' <span style="color:green"> ', 
                $line = 68, $out += $escape(sumList.checkedCount), $line = 68, $out += $escape("/"), 
                $line = 68, $out += $escape(sumList.allCount), $out += "</span> ", $line = 69), 
                $out += ' </td> <td> <a data-entity-id="', $line = 72, $out += $escape(sumList.guideId), 
                $out += '" class=" btn-divide btn-guide-checking cursor"> 对账 </a><a href="" class="cursor"> |</a> <a data-entity-id="', 
                $line = 75, $out += $escape(sumList.guideId), $out += '" class="btn-guide-view cursor btn-transfter btn-guide-clearing "> 结算 </a> </td> </tr> ', 
                $line = 80;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <div class="dataTables_info" id="dynamic-table_info" role="status" aria-live="polite">共计 ', 
            $line = 85, $out += $escape(recordSize), $out += ' 条记录</div> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers" id="dynamic-table_paginate"> <ul class="pagination"> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="first" href="javascript:void(0)">首页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="previous"href="javascript:void(0)">上一页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"> <a href="javascript:void(0)"> ', 
            $line = 95, 0 == totalPage ? ($out += " 0/0 ", $line = 97) : ($out += " ", $line = 98, 
            $out += $escape(pageNo + 1), $out += "/", $line = 98, $out += $escape(totalPage), 
            $out += " ", $line = 99), $out += ' </a> </li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="next" href="javascript:void(0)">下一页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="last" href="javascript:void(0)">尾页</a></li> </ul> </div> </div> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row">\r\n	<div class="form-group guideMainForm">\r\n		<label class=" control-label " style="float: left;margin-top:5px">导游：</label>\r\n		<div class="col-sm-2">\r\n			<select name="guideId" class="col-xs-12">\r\n			    <option value="">全部</option>\r\n				{{each guideInfoList as guideInfo}}\r\n				<option value="{{guideInfo.guideId}}">{{guideInfo.guideName}}</option>\r\n				{{/each}} \r\n				\r\n			</select>\r\n		</div>\r\n		<label class=" control-label no-padding-right" style="float: left;margin-left:60px;margin-top: 5px">\r\n			账期：\r\n		</label>\r\n		<select name="year" class="col-sm-1">\r\n		    {{each yearList as year}}\r\n			<option value="{{year}}">{{year}}</option>\r\n			{{/each}} \r\n		</select>\r\n		<select name="month" style="margin-left: 20px" class="col-sm-1">\r\n		    <option value="">全部</option>\r\n			<option value="1">1月</option>\r\n			<option value="2">2月</option>\r\n			<option value="3">3月</option>\r\n			<option value="4">4月</option>\r\n			<option value="5">5月</option>\r\n			<option value="6">6月</option>\r\n			<option value="7">7月</option>\r\n			<option value="8">8月</option>\r\n			<option value="9">9月</option>\r\n			<option value="10">10月</option>\r\n			<option value="11">11月</option>\r\n			<option value="12">12月</option>\r\n		</select>\r\n		<button class=" btn-sm btn-financialguide-search search-btn btn-height" style="margin-left: 60px;">\r\n			<i class="ace-icon fa fa-search"></i>\r\n			搜索\r\n		</button>\r\n	</div>\r\n	<div class="row guideList">\r\n		<div class="col-xs-12">\r\n			<table class="table table-striped table-bordered table-hover">\r\n				<thead>\r\n				<tr class="bg-blur">\r\n					<th>导游</th>\r\n					<th>总账面退补</th>\r\n					<th>总实际退补</th>\r\n					<th>总已结账</th>\r\n					<th>总未结账</th>\r\n					<th>对账进度</th>\r\n					<th>操作</th>\r\n				</tr>\r\n				</thead>\r\n				<tbody>\r\n				{{each financialGuideSumList as sumList}}\r\n				<tr>\r\n					<td>{{sumList.guideName}}</td>\r\n					<td>{{sumList.sumBackGuideMoney}}</td>\r\n					<td>{{sumList.sumRealBackGuideMoney}}</td>\r\n					<td>{{sumList.sumAlreadyColseAccountMoney}}</td>\r\n					<td>{{sumList.sumUnCloseAccountMoney}}</td>\r\n					<td>\r\n						{{if sumList.allCount != sumList.checkedCount}}\r\n	                      <span style="color:#ff9900"> {{sumList.checkedCount}}{{"/"}}{{sumList.allCount}}</span>\r\n	                    {{/if}}\r\n	                    {{if sumList.allCount == sumList.checkedCount}}\r\n	                      <span style="color:green"> {{sumList.checkedCount}}{{"/"}}{{sumList.allCount}}</span>\r\n	                    {{/if}}\r\n					</td>\r\n					<td>\r\n						<a data-entity-id="{{sumList.guideId}}" class=" btn-divide btn-guide-checking cursor">\r\n							对账\r\n						</a><a href="" class="cursor"> |</a>\r\n						<a data-entity-id="{{sumList.guideId}}" class="btn-guide-view cursor btn-transfter btn-guide-clearing ">\r\n							结算\r\n						</a>\r\n					</td>\r\n				</tr>\r\n				{{/each}} \r\n				</tbody>\r\n			</table>\r\n			<div class="row pageMode">\r\n				<div class="col-xs-6">\r\n					<div class="dataTables_info" id="dynamic-table_info" role="status" aria-live="polite">共计 {{recordSize}} 条记录</div>\r\n				</div>\r\n\r\n				<div class="col-xs-6">\r\n					<div class="dataTables_paginate paging_simple_numbers" id="dynamic-table_paginate">\r\n						<ul class="pagination">\r\n							<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="first" href="javascript:void(0)">首页</a></li>\r\n							<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="previous"href="javascript:void(0)">上一页</a></li>\r\n							<li class="paginate_button" aria-controls="dynamic-table" tabindex="0">\r\n								<a href="javascript:void(0)">\r\n									{{if totalPage == 0}}\r\n									0/0\r\n									{{else}}\r\n									{{pageNo+1}}/{{totalPage}}\r\n									{{/if}}\r\n								</a>\r\n							</li>\r\n							<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="next"  href="javascript:void(0)">下一页</a></li>\r\n							<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="last" href="javascript:void(0)">尾页</a></li>\r\n						</ul>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});