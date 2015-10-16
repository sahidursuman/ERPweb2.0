/*TMODJS:{"debug":true,"version":358,"md5":"ebddccbde0644d4406c87e8fbea7afc2"}*/
define(function(require) {
    return require("../../../template")("resource/subsection/view/list", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, transitSubTgroupList = $data.transitSubTgroupList, $escape = ($data.subList, 
            $data.indexA, $utils.$escape), recordSize = ($data.subDetails, $data.index, $data.recordSize), totalPage = $data.totalPage, pageNo = $data.pageNo, $out = "";
            return $out += '<div style="clear: both;margin-bottom:10px;border-top:1px dotted #ccc;padding-bottom:5px;"></div> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover"> <thead> <tr class="bg-blur"> <th>客户来源</th> <th>线路产品</th> <th>应用范围</th> <th>出游日期</th> <th>现收</th> <th>联系人</th> <th>人数</th> <th>操作人</th> <th class="col-sm-1">操作时间</th> <th>状态</th> <th>操作</th> </tr> </thead> <tbody>', 
            $line = 20, $each(transitSubTgroupList, function(subList, indexA) {
                $out += ' <tr date-entity-id="', $line = 21, $out += $escape(subList.id), $out += '"> <td>', 
                $line = 22, $out += $escape(subList.partnerAgency.travelAgencyName), $out += "</td> <td>", 
                $line = 23, $out += $escape(subList.lineProduct.name), $out += " ", $line = 24, 
                null != subList.subTouristGroupDetails && ($out += ' <label class="lineProductArea" style="float: right;"> <button class="btn btn-success btn-sm btn-white show" index="', 
                $line = 26, $out += $escape(indexA), $out += '"> <i class="ace-icon fa fa-plus bigger-110 icon-only"></i> </button> </label> ', 
                $line = 30), $out += " </td> <td>", $line = 32, 0 == subList.lineProduct.customerType ? ($out += "散客", 
                $line = 32) : ($out += "团体", $line = 32), $out += "</td> <td>", $line = 33, $out += $escape($helpers.dateFormat(subList.startTime, "yyyy-MM-dd")), 
                $out += "</td> <td>", $line = 34, $out += $escape(subList.currentNeedPayMoney), 
                $out += "</td> <td>", $line = 35, $out += $escape(subList.contactMember.name), $out += "</td> <td>", 
                $line = 36, $out += $escape(subList.adultCount), $out += "大", $line = 36, $out += $escape(subList.childCount), 
                $out += "小</td> <td>", $line = 37, null != subList.subOperatorUser ? ($line = 37, 
                $out += $escape(subList.subOperatorUser.realName), $line = 37) : ($out += "-", $line = 37), 
                $out += "</td> <td>", $line = 38, null != subList.subOperateTime ? ($line = 38, 
                $out += $escape(subList.subOperateTime), $line = 38) : ($out += "-", $line = 38), 
                $out += "</td> <td>", $line = 39, 1 == subList.status ? ($out += "未分团", $line = 39) : 5 == subList.status && ($out += "已分段", 
                $line = 39), $out += '</td> <td> <div class="hidden-sm hidden-xs btn-group"> <a data-entity-id="', 
                $line = 42, $out += $escape(subList.id), $out += '" class=" btn-subsection cursor"> 分段 </a>| <a data-entity-id="', 
                $line = 45, $out += $escape(subList.id), $out += '" class="', $line = 45, 5 == subList.status && ($out += "btn-subsection-revoke", 
                $line = 45), $out += ' cursor" ', $line = 45, 5 != subList.status && ($out += 'style="color:#bbb;"', 
                $line = 45), $out += "> 撤销 </a> </div> </td> </tr> ", $line = 51, null != subList.subTouristGroupDetails && ($out += " ", 
                $line = 52, $each(subList.subTouristGroupDetails, function(subDetails, index) {
                    $out += " ", $line = 53, 0 == index ? ($out += ' <tr class="tr_', $line = 54, $out += $escape(indexA), 
                    $out += '" style="display: none;"> <td rowspan="', $line = 55, $out += $escape(subList.subTouristGroupDetails.length), 
                    $out += '"></td> <td>', $line = 56, $out += $escape(subDetails.lineProductName), 
                    $out += "</td> <td>", $line = 57, 0 == subDetails.customerType ? ($out += "散客", 
                    $line = 57) : ($out += "团体", $line = 57), $out += "</td> <td>", $line = 58, $out += $escape($helpers.dateFormat(subDetails.startTime, "yyyy-MM-dd")), 
                    $out += "</td> <td>", $line = 59, 0 == subDetails.operateCurrentNeedPayMoney ? ($out += "-", 
                    $line = 59) : ($out += "本段现收", $line = 59), $out += '</td> <td rowspan="', $line = 60, 
                    $out += $escape(subList.subTouristGroupDetails.length), $out += '" colspan="6"></td> </tr> ', 
                    $line = 62) : ($out += ' <tr class="tr_', $line = 63, $out += $escape(indexA), $out += '" style="display: none;"> <td>', 
                    $line = 64, $out += $escape(subDetails.lineProductName), $out += "</td> <td>", $line = 65, 
                    0 == subDetails.customerType ? ($out += "散客", $line = 65) : ($out += "团体", $line = 65), 
                    $out += "</td> <td>", $line = 66, $out += $escape($helpers.dateFormat(subDetails.startTime, "yyyy-MM-dd")), 
                    $out += "</td> <td>", $line = 67, 0 == subDetails.operateCurrentNeedPayMoney ? ($out += "-", 
                    $line = 67) : ($out += "本段现收", $line = 67), $out += "</td> </tr> ", $line = 69), 
                    $out += " ", $line = 70;
                }), $out += " ", $line = 71), $out += " ", $line = 72;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <div class="dataTables_info" id="dynamic-table_info" role="status" aria-live="polite">共计 ', 
            $line = 78, $out += $escape(recordSize), $out += ' 条记录</div> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers" id="dynamic-table_paginate"> <ul class="pagination"> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="first" href="javascript:void(0)">首页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="previous"href="javascript:void(0)">上一页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"> <a href="javascript:void(0)"> ', 
            $line = 87, 0 == totalPage ? ($out += " 0/0 ", $line = 89) : ($out += " ", $line = 90, 
            $out += $escape(pageNo + 1), $out += "/", $line = 90, $out += $escape(totalPage), 
            $out += " ", $line = 91), $out += ' </a> </li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="next" href="javascript:void(0)">下一页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="last" href="javascript:void(0)">尾页</a></li> </ul> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div style="clear: both;margin-bottom:10px;border-top:1px dotted #ccc;padding-bottom:5px;"></div>\r\n<div class="col-xs-12">\r\n	<table class="table table-striped table-bordered table-hover">\r\n		<thead>\r\n			<tr class="bg-blur">  \r\n				<th>客户来源</th>\r\n				<th>线路产品</th>\r\n				<th>应用范围</th>               \r\n				<th>出游日期</th>\r\n				<th>现收</th>\r\n				<th>联系人</th>\r\n				<th>人数</th>\r\n				<th>操作人</th>\r\n				<th class="col-sm-1">操作时间</th>\r\n				<th>状态</th>\r\n				<th>操作</th>\r\n			</tr>\r\n		</thead>\r\n	\r\n		<tbody>{{each transitSubTgroupList as subList indexA}}\r\n			<tr date-entity-id="{{subList.id}}">\r\n				<td>{{subList.partnerAgency.travelAgencyName}}</td>\r\n				<td>{{subList.lineProduct.name}}\r\n					{{if subList.subTouristGroupDetails != null}}\r\n					<label class="lineProductArea" style="float: right;">\r\n						<button class="btn btn-success btn-sm btn-white show" index="{{indexA}}">\r\n							<i class="ace-icon fa fa-plus bigger-110 icon-only"></i><!-- fa-minus -->\r\n						</button>\r\n					</label>\r\n					{{/if}}\r\n				</td>\r\n				<td>{{if subList.lineProduct.customerType == 0}}散客{{else}}团体{{/if}}</td>\r\n				<td>{{subList.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n				<td>{{subList.currentNeedPayMoney}}</td>\r\n				<td>{{subList.contactMember.name}}</td>\r\n				<td>{{subList.adultCount}}大{{subList.childCount}}小</td>\r\n				<td>{{if subList.subOperatorUser != null}}{{subList.subOperatorUser.realName}}{{else}}-{{/if}}</td>\r\n				<td>{{if subList.subOperateTime != null}}{{subList.subOperateTime}}{{else}}-{{/if}}</td>\r\n				<td>{{if subList.status == 1}}未分团{{else if subList.status == 5}}已分段{{/if}}</td>\r\n				<td>\r\n					<div class="hidden-sm hidden-xs btn-group">\r\n						<a data-entity-id="{{subList.id}}" class=" btn-subsection cursor">\r\n							分段\r\n						</a>|\r\n						<a data-entity-id="{{subList.id}}" class="{{if subList.status == 5}}btn-subsection-revoke{{/if}} cursor" {{if subList.status != 5}}style="color:#bbb;"{{/if}}>\r\n							撤销\r\n						</a>\r\n					</div>\r\n				</td>\r\n			</tr>\r\n			 {{if subList.subTouristGroupDetails != null}}\r\n			 	{{each subList.subTouristGroupDetails as subDetails index}}\r\n			 	{{if index == 0}}\r\n			 	<tr class="tr_{{indexA}}" style="display: none;">\r\n			 		<td rowspan="{{subList.subTouristGroupDetails.length}}"></td>\r\n			 		<td>{{subDetails.lineProductName}}</td>\r\n			 		<td>{{if subDetails.customerType == 0}}散客{{else}}团体{{/if}}</td>\r\n			 		<td>{{subDetails.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n			 		<td>{{if subDetails.operateCurrentNeedPayMoney == 0}}-{{else}}本段现收{{/if}}</td>\r\n			 		<td rowspan="{{subList.subTouristGroupDetails.length}}" colspan="6"></td>\r\n			 	</tr> \r\n			 	{{else}}\r\n			 	<tr class="tr_{{indexA}}" style="display: none;">\r\n			 		<td>{{subDetails.lineProductName}}</td>\r\n			 		<td>{{if subDetails.customerType == 0}}散客{{else}}团体{{/if}}</td>\r\n			 		<td>{{subDetails.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n			 		<td>{{if subDetails.operateCurrentNeedPayMoney == 0}}-{{else}}本段现收{{/if}}</td>\r\n			 	</tr> \r\n			 	{{/if}}\r\n			 	{{/each}}\r\n			 {{/if}}\r\n			{{/each}}\r\n		</tbody>\r\n	</table>\r\n	\r\n	<div class="row pageMode">\r\n		<div class="col-xs-6">\r\n			<div class="dataTables_info" id="dynamic-table_info" role="status" aria-live="polite">共计 {{recordSize}} 条记录</div>\r\n		</div>\r\n		<div class="col-xs-6">\r\n			<div class="dataTables_paginate paging_simple_numbers" id="dynamic-table_paginate">\r\n				<ul class="pagination">\r\n					<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="first" href="javascript:void(0)">首页</a></li>\r\n					<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="previous"href="javascript:void(0)">上一页</a></li>\r\n					<li class="paginate_button" aria-controls="dynamic-table" tabindex="0">\r\n						<a href="javascript:void(0)">\r\n							{{if totalPage == 0}}\r\n								0/0\r\n							{{else}}\r\n								{{pageNo+1}}/{{totalPage}}\r\n							{{/if}}\r\n						</a>\r\n					</li>\r\n					<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="next"  href="javascript:void(0)">下一页</a></li>\r\n					<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="last" href="javascript:void(0)">尾页</a></li>\r\n				</ul>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});