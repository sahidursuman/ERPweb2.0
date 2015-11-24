/*TMODJS:{"debug":true,"version":264,"md5":"535fd3d75da175d644591801f3260d0b"}*/
define(function(require) {
    return require("../../../template")("financial/guide/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, guideInfoList = $data.guideInfoList, $escape = ($data.guideInfo, 
            $data.$index, $utils.$escape), yearList = $data.yearList, financialGuideSumList = ($data.year, 
            $data.financialGuideSumList), recordSize = ($data.sumList, $data.recordSize), $out = "";
            return $out += '<div class="row globalAdd"> <div class="form-group guideMainForm "> <label class=" control-label " style="float: left;margin-top:3px">导游：</label> <select name="guideId" class="col-xs-12" style="width: 220px;" > <option value="">全部</option> ', 
            $line = 6, $each(guideInfoList, function(guideInfo) {
                $out += ' <option value="', $line = 7, $out += $escape(guideInfo.guideId), $out += '">', 
                $line = 7, $out += $escape(guideInfo.guideName), $out += "</option> ", $line = 8;
            }), $out += ' </select> <label class=" control-label no-padding-right pull-left marginLeft-30" style="margin-top: 3px"> 账期： </label> <select name="year" class="col-sm-1"> ', 
            $line = 14, $each(yearList, function(year) {
                $out += ' <option value="', $line = 15, $out += $escape(year), $out += '">', $line = 15, 
                $out += $escape(year), $out += "</option> ", $line = 16;
            }), $out += ' </select> <select name="month" class="col-sm-1 marginLeft-30"> <option value="">全部</option> <option value="1">1月</option> <option value="2">2月</option> <option value="3">3月</option> <option value="4">4月</option> <option value="5">5月</option> <option value="6">6月</option> <option value="7">7月</option> <option value="8">8月</option> <option value="9">9月</option> <option value="10">10月</option> <option value="11">11月</option> <option value="12">12月</option> </select> <button class=" btn-sm btn-financialguide-search search-btn marginLeft-30" > <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> <div class="row guideList"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr class="bg-blur"> <th>导游</th> <th>总账面退补</th> <th>总实际退补</th> <th>总已结账</th> <th>总未结账</th> <th>对账进度</th> <th>操作</th> </tr> </thead> <tbody> ', 
            $line = 53, $each(financialGuideSumList, function(sumList) {
                $out += " <tr> <td>", $line = 55, $out += $escape(sumList.guideName), $out += "</td> <td>", 
                $line = 56, $out += $escape(sumList.sumBackGuideMoney), $out += "</td> <td>", $line = 57, 
                $out += $escape(sumList.sumRealBackGuideMoney), $out += "</td> <td>", $line = 58, 
                $out += $escape(sumList.sumAlreadyColseAccountMoney), $out += "</td> <td>", $line = 59, 
                $out += $escape(sumList.sumUnCloseAccountMoney), $out += "</td> <td> ", $line = 61, 
                sumList.allCount != sumList.checkedCount && ($out += ' <span style="color:#ff9900"> ', 
                $line = 62, $out += $escape(sumList.checkedCount), $line = 62, $out += $escape("/"), 
                $line = 62, $out += $escape(sumList.allCount), $out += "</span> ", $line = 63), 
                $out += " ", $line = 64, sumList.allCount == sumList.checkedCount && ($out += ' <span style="color:green"> ', 
                $line = 65, $out += $escape(sumList.checkedCount), $line = 65, $out += $escape("/"), 
                $line = 65, $out += $escape(sumList.allCount), $out += "</span> ", $line = 66), 
                $out += ' </td> <td> <a data-entity-id="', $line = 69, $out += $escape(sumList.guideId), 
                $out += '" class=" btn-divide btn-guide-checking cursor R-right" data-right="1200002"> 对账 </a> <label class="cursor R-right" data-right="1200002"><a class="R-right" data-right="1200003"> |</a></label> <a data-entity-id="', 
                $line = 73, $out += $escape(sumList.guideId), $out += '" class="btn-guide-view R-right cursor btn-transfter btn-guide-clearing " data-right="1200003"> 结算 </a> </td> </tr> ', 
                $line = 79;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 84, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row globalAdd">\r\n	<div class="form-group guideMainForm ">\r\n		<label class=" control-label " style="float: left;margin-top:3px">导游：</label>\r\n			<select name="guideId" class="col-xs-12" style="width: 220px;" >\r\n			    <option value="">全部</option>\r\n				{{each guideInfoList as guideInfo}}\r\n				<option value="{{guideInfo.guideId}}">{{guideInfo.guideName}}</option>\r\n				{{/each}}\r\n			</select>\r\n		<label class=" control-label no-padding-right  pull-left marginLeft-30" style="margin-top: 3px">\r\n			账期：\r\n		</label>\r\n		<select name="year" class="col-sm-1">\r\n		    {{each yearList as year}}\r\n			<option value="{{year}}">{{year}}</option>\r\n			{{/each}}\r\n		</select>\r\n		<select name="month" class="col-sm-1 marginLeft-30">\r\n		    <option value="">全部</option>\r\n			<option value="1">1月</option>\r\n			<option value="2">2月</option>\r\n			<option value="3">3月</option>\r\n			<option value="4">4月</option>\r\n			<option value="5">5月</option>\r\n			<option value="6">6月</option>\r\n			<option value="7">7月</option>\r\n			<option value="8">8月</option>\r\n			<option value="9">9月</option>\r\n			<option value="10">10月</option>\r\n			<option value="11">11月</option>\r\n			<option value="12">12月</option>\r\n		</select>\r\n		<button class=" btn-sm btn-financialguide-search search-btn marginLeft-30" >\r\n			<i class="ace-icon fa fa-search"></i>\r\n			搜索\r\n		</button>\r\n	</div>\r\n	<div class="row guideList">\r\n		<div class="col-xs-12">\r\n			<table class="table table-striped table-bordered table-hover T-showHighLight">\r\n				<thead>\r\n				<tr class="bg-blur">\r\n					<th>导游</th>\r\n					<th>总账面退补</th>\r\n					<th>总实际退补</th>\r\n					<th>总已结账</th>\r\n					<th>总未结账</th>\r\n					<th>对账进度</th>\r\n					<th>操作</th>\r\n				</tr>\r\n				</thead>\r\n				<tbody>\r\n				{{each financialGuideSumList as sumList}}\r\n				<tr>\r\n					<td>{{sumList.guideName}}</td>\r\n					<td>{{sumList.sumBackGuideMoney}}</td>\r\n					<td>{{sumList.sumRealBackGuideMoney}}</td>\r\n					<td>{{sumList.sumAlreadyColseAccountMoney}}</td>\r\n					<td>{{sumList.sumUnCloseAccountMoney}}</td>\r\n					<td>\r\n						{{if sumList.allCount != sumList.checkedCount}}\r\n	                      <span style="color:#ff9900"> {{sumList.checkedCount}}{{"/"}}{{sumList.allCount}}</span>\r\n	                    {{/if}}\r\n	                    {{if sumList.allCount == sumList.checkedCount}}\r\n	                      <span style="color:green"> {{sumList.checkedCount}}{{"/"}}{{sumList.allCount}}</span>\r\n	                    {{/if}}\r\n					</td>\r\n					<td>\r\n						<a data-entity-id="{{sumList.guideId}}" class=" btn-divide btn-guide-checking cursor R-right" data-right="1200002">\r\n							对账\r\n						</a>\r\n						<label class="cursor R-right" data-right="1200002"><a class="R-right" data-right="1200003"> |</a></label>\r\n						<a data-entity-id="{{sumList.guideId}}" class="btn-guide-view R-right cursor btn-transfter btn-guide-clearing " data-right="1200003">\r\n						\r\n							结算\r\n						</a>\r\n					</td>\r\n				</tr>\r\n				{{/each}} \r\n				</tbody>\r\n			</table>\r\n			<div class="row pageMode">\r\n				<div class="col-xs-6">\r\n					<small>共计 {{recordSize}} 条记录</small>\r\n				</div>\r\n				<div class="col-xs-6">\r\n					<div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});