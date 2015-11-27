/*TMODJS:{"debug":true,"version":267,"md5":"63c6ed5851faca70a28d94e3b67d2aa9"}*/
define(function(require) {
    return require("../../../template")("financial/guide/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, guideInfoList = $data.guideInfoList, $escape = ($data.guideInfo, 
            $data.$index, $utils.$escape), guideId = $data.guideId, yearList = $data.yearList, year = ($data.yearInfo, 
            $data.year), monthList = $data.monthList, month = ($data.monthInfo, $data.month), financialGuideSumList = $data.financialGuideSumList, recordSize = ($data.sumList, 
            $data.recordSize), $out = "";
            return $out += '<div class="row globalAdd"> <div class="form-group guideMainForm T-search-area"> <label class=" control-label " style="float: left;margin-top:3px">导游：</label> <select name="guideId" class="col-xs-12 T-search-name" style="width: 220px;" > <option value="">全部</option> ', 
            $line = 6, $each(guideInfoList, function(guideInfo) {
                $out += ' <option value="', $line = 7, $out += $escape(guideInfo.guideId), $out += '" ', 
                $line = 7, guideInfo.guideId == guideId && ($out += 'selected="selected"', $line = 7), 
                $out += ">", $line = 7, $out += $escape(guideInfo.guideName), $out += "</option> ", 
                $line = 8;
            }), $out += ' </select> <label class=" control-label no-padding-right pull-left marginLeft-30" style="margin-top: 3px"> 账期： </label> <select name="year" class="col-sm-1 T-search-year"> ', 
            $line = 14, $each(yearList, function(yearInfo) {
                $out += ' <option value="', $line = 15, $out += $escape(yearInfo), $out += '" ', 
                $line = 15, yearInfo == year && ($out += 'selected="selected"', $line = 15), $out += ">", 
                $line = 15, $out += $escape(yearInfo), $out += "</option> ", $line = 16;
            }), $out += ' </select> <select name="month" class="col-sm-1 marginLeft-30 T-search-month"> <option value="">全部</option> ', 
            $line = 20, $each(monthList, function(monthInfo) {
                $out += ' <option value="', $line = 21, $out += $escape(monthInfo), $out += '" ', 
                $line = 21, monthInfo == month && ($out += 'selected="selected"', $line = 21), $out += ">", 
                $line = 21, $out += $escape(monthInfo), $out += "月</option> ", $line = 22;
            }), $out += ' </select> <button class=" btn-sm T-btn-search search-btn marginLeft-30" > <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> <div class="row guideList"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr class="bg-blur"> <th>导游</th> <th>总账面退补</th> <th>总实际退补</th> <th>总已结账</th> <th>总未结账</th> <th>对账进度</th> <th>操作</th> </tr> </thead> <tbody class="T-list"> ', 
            $line = 44, $each(financialGuideSumList, function(sumList) {
                $out += ' <tr data-id="', $line = 45, $out += $escape(sumList.guideId), $out += '"> <td>', 
                $line = 46, $out += $escape(sumList.guideName), $out += "</td> <td>", $line = 47, 
                $out += $escape(sumList.sumBackGuideMoney), $out += "</td> <td>", $line = 48, $out += $escape(sumList.sumRealBackGuideMoney), 
                $out += "</td> <td>", $line = 49, $out += $escape(sumList.sumAlreadyColseAccountMoney), 
                $out += "</td> <td>", $line = 50, $out += $escape(sumList.sumUnCloseAccountMoney), 
                $out += "</td> <td> ", $line = 52, sumList.allCount != sumList.checkedCount && ($out += ' <span style="color:#ff9900"> ', 
                $line = 53, $out += $escape(sumList.checkedCount), $line = 53, $out += $escape("/"), 
                $line = 53, $out += $escape(sumList.allCount), $out += "</span> ", $line = 54), 
                $out += " ", $line = 55, sumList.allCount == sumList.checkedCount && ($out += ' <span style="color:green"> ', 
                $line = 56, $out += $escape(sumList.checkedCount), $line = 56, $out += $escape("/"), 
                $line = 56, $out += $escape(sumList.allCount), $out += "</span> ", $line = 57), 
                $out += ' </td> <td> <a data-entity-id="', $line = 60, $out += $escape(sumList.guideId), 
                $out += '" class=" btn-divide T-action T-checking cursor R-right" data-right="1200002"> 对账 </a> <label class="cursor R-right" data-right="1200002"><a class="R-right" data-right="1200003"> |</a></label> <a data-entity-id="', 
                $line = 64, $out += $escape(sumList.guideId), $out += '" class="R-right cursor T-action T-clearing " data-right="1200003"> 结算 </a> </td> </tr> ', 
                $line = 69;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 74, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row globalAdd">\r\n	<div class="form-group guideMainForm T-search-area">\r\n		<label class=" control-label " style="float: left;margin-top:3px">导游：</label>\r\n			<select name="guideId" class="col-xs-12 T-search-name" style="width: 220px;" >\r\n			    <option value="">全部</option>\r\n				{{each guideInfoList as guideInfo}}\r\n				<option value="{{guideInfo.guideId}}" {{if guideInfo.guideId == guideId}}selected="selected"{{/if}}>{{guideInfo.guideName}}</option>\r\n				{{/each}}\r\n			</select>\r\n		<label class=" control-label no-padding-right  pull-left marginLeft-30" style="margin-top: 3px">\r\n			账期：\r\n		</label>\r\n		<select name="year" class="col-sm-1 T-search-year">\r\n		    {{each yearList as yearInfo}}\r\n			<option value="{{yearInfo}}" {{if yearInfo == year}}selected="selected"{{/if}}>{{yearInfo}}</option>\r\n			{{/each}}\r\n		</select>\r\n		<select name="month" class="col-sm-1 marginLeft-30 T-search-month">\r\n		    <option value="">全部</option>\r\n		    {{each monthList as monthInfo}}\r\n		    <option value="{{monthInfo}}" {{if monthInfo == month}}selected="selected"{{/if}}>{{monthInfo}}月</option>\r\n		    {{/each}}\r\n		</select>\r\n		<button class=" btn-sm T-btn-search search-btn marginLeft-30" >\r\n			<i class="ace-icon fa fa-search"></i>\r\n			搜索\r\n		</button>\r\n	</div>\r\n	<div class="row guideList">\r\n		<div class="col-xs-12">\r\n			<table class="table table-striped table-bordered table-hover T-showHighLight">\r\n				<thead>\r\n				<tr class="bg-blur">\r\n					<th>导游</th>\r\n					<th>总账面退补</th>\r\n					<th>总实际退补</th>\r\n					<th>总已结账</th>\r\n					<th>总未结账</th>\r\n					<th>对账进度</th>\r\n					<th>操作</th>\r\n				</tr>\r\n				</thead>\r\n				<tbody class="T-list">\r\n				{{each financialGuideSumList as sumList}}\r\n				<tr data-id="{{sumList.guideId}}">\r\n					<td>{{sumList.guideName}}</td>\r\n					<td>{{sumList.sumBackGuideMoney}}</td>\r\n					<td>{{sumList.sumRealBackGuideMoney}}</td>\r\n					<td>{{sumList.sumAlreadyColseAccountMoney}}</td>\r\n					<td>{{sumList.sumUnCloseAccountMoney}}</td>\r\n					<td>\r\n						{{if sumList.allCount != sumList.checkedCount}}\r\n	                      <span style="color:#ff9900"> {{sumList.checkedCount}}{{"/"}}{{sumList.allCount}}</span>\r\n	                    {{/if}}\r\n	                    {{if sumList.allCount == sumList.checkedCount}}\r\n	                      <span style="color:green"> {{sumList.checkedCount}}{{"/"}}{{sumList.allCount}}</span>\r\n	                    {{/if}}\r\n					</td>\r\n					<td>\r\n						<a data-entity-id="{{sumList.guideId}}" class=" btn-divide T-action T-checking cursor R-right" data-right="1200002">\r\n							对账\r\n						</a>\r\n						<label class="cursor R-right" data-right="1200002"><a class="R-right" data-right="1200003"> |</a></label>\r\n						<a data-entity-id="{{sumList.guideId}}" class="R-right cursor T-action T-clearing " data-right="1200003">\r\n							结算\r\n						</a>\r\n					</td>\r\n				</tr>\r\n				{{/each}} \r\n				</tbody>\r\n			</table>\r\n			<div class="row pageMode">\r\n				<div class="col-xs-6">\r\n					<small>共计 {{recordSize}} 条记录</small>\r\n				</div>\r\n				<div class="col-xs-6">\r\n					<div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});