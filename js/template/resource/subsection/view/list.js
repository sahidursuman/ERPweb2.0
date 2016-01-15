/*TMODJS:{"debug":true,"version":448,"md5":"c204335a82b50eaa785f6c83821c800a"}*/
define(function(require) {
    return require("../../../template")("resource/subsection/view/list", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, transitSubTgroupList = $data.transitSubTgroupList, $escape = ($data.subList, 
            $data.indexA, $utils.$escape), recordSize = ($data.subDetails, $data.index, $data.recordSize), $out = "";
            return $out += '<div style="clear: both;margin-bottom:10px;border-top:1px dotted #ccc;padding-bottom:5px;"></div> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr class="bg-blur"> <th>客户来源</th> <th>线路产品</th> <th>应用范围</th> <th>出游日期</th> <th>天数</th> <th>现收</th> <th>联系人</th> <th>人数</th> <th>操作人</th> <th class="col-sm-1">操作时间</th> <th>状态</th> <th>操作</th> </tr> </thead> <tbody>', 
            $line = 21, $each(transitSubTgroupList, function(subList, indexA) {
                $out += ' <tr data-entity-id="', $line = 22, $out += $escape(subList.id), $out += '"> <td>', 
                $line = 23, subList.partnerAgency && ($line = 23, $out += $escape(subList.partnerAgency.travelAgencyName), 
                $line = 23), $out += "</td> <td>", $line = 24, $out += $escape(subList.lineProduct.name), 
                $out += " ", $line = 25, null != subList.subTouristGroupDetails && ($out += ' <label class="lineProductArea" style="float: right;"> <button class="btn btn-success btn-sm btn-white show" index="', 
                $line = 27, $out += $escape(indexA), $out += '"> <i class="ace-icon fa fa-plus bigger-110 icon-only"></i> </button> </label> ', 
                $line = 31), $out += " </td> <td>", $line = 33, 0 == subList.lineProduct.customerType ? ($out += "散客", 
                $line = 33) : ($out += "团体", $line = 33), $out += "</td> <td>", $line = 34, $out += $escape($helpers.dateFormat(subList.startTime, "yyyy-MM-dd")), 
                $out += '</td> <td><span class="F-float F-count">', $line = 35, $out += $escape(subList.lineProduct.days), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 36, $out += $escape(subList.currentNeedPayMoney), 
                $out += "</span></td> <td>", $line = 37, null != subList.contactMember && ($line = 37, 
                $out += $escape(subList.contactMember.name), $line = 37), $out += '</td> <td><span class="F-float F-count">', 
                $line = 38, $out += $escape(subList.adultCount), $out += '</span>大<span class="F-float F-count">', 
                $line = 38, $out += $escape(subList.childCount), $out += "</span>小</td> <td>", $line = 39, 
                null != subList.subOperatorUser ? ($line = 39, $out += $escape(subList.subOperatorUser.realName), 
                $line = 39) : ($out += "-", $line = 39), $out += "</td> <td>", $line = 40, null != subList.subOperateTime ? ($line = 40, 
                $out += $escape(subList.subOperateTime), $line = 40) : ($out += "-", $line = 40), 
                $out += "</td> <td>", $line = 41, 1 == subList.status ? ($out += "未分团", $line = 41) : 5 == subList.status && ($out += "已分段", 
                $line = 41), $out += '</td> <td> <div class="hidden-sm hidden-xs btn-group"> <a data-entity-id="', 
                $line = 44, $out += $escape(subList.id), $out += '" class="', $line = 44, 1 == subList.isEdit ? ($out += "gray", 
                $line = 44) : ($out += "T-btn-subsection", $line = 44), $out += ' cursor R-right" data-right="1350001" title="', 
                $line = 44, 1 == subList.isEdit && ($out += "财务审核后已设置不可修改数据，请联系财务", $line = 44), 
                $out += '"> 分段 </a> <a data-entity-id="', $line = 47, $out += $escape(subList.id), 
                $out += '" class="', $line = 47, 5 == subList.status && ($out += "T-btn-subsection-revoke", 
                $line = 47), $out += ' cursor R-right" data-right="1350002" ', $line = 47, 5 != subList.status && ($out += 'style="color:#bbb;"', 
                $line = 47), $out += '> <label class="padding-right20">|</label> 撤销 </a> </div> </td> </tr> ', 
                $line = 54, null != subList.subTouristGroupDetails && ($out += " ", $line = 55, 
                $each(subList.subTouristGroupDetails, function(subDetails, index) {
                    $out += " ", $line = 56, 0 == index ? ($out += ' <tr class="T-tr_', $line = 57, 
                    $out += $escape(indexA), $out += '" style="display: none;"> <td rowspan="', $line = 58, 
                    $out += $escape(subList.subTouristGroupDetails.length), $out += '"></td> <td>', 
                    $line = 59, $out += $escape(subDetails.lineProductName), $out += "</td> <td>", $line = 60, 
                    0 == subDetails.customerType ? ($out += "散客", $line = 60) : ($out += "团体", $line = 60), 
                    $out += "</td> <td>", $line = 61, $out += $escape($helpers.dateFormat(subDetails.startTime, "yyyy-MM-dd")), 
                    $out += '</td> <td><span class="F-float F-count">', $line = 62, $out += $escape(subDetails.days), 
                    $out += "</span></td> <td>", $line = 63, 0 == subDetails.operateCurrentNeedPayMoney ? ($out += "-", 
                    $line = 63) : ($out += "本段现收", $line = 63), $out += '</td> <td colspan="4"></td> <td>', 
                    $line = 65, 1 == subDetails.status ? ($out += " 未分团 ", $line = 67) : 2 == subDetails.status ? ($out += " 已分团 ", 
                    $line = 69) : 3 == subDetails.status ? ($out += " 已转客 ", $line = 71) : 4 == subDetails.status ? ($out += " 已取消 ", 
                    $line = 73) : 5 == subDetails.status ? ($out += " 已拆分 ", $line = 75) : 6 == subDetails.status ? ($out += " 已内转 ", 
                    $line = 77) : ($out += " 已发团 ", $line = 79), $out += ' </td> <td rowspan="', $line = 81, 
                    $out += $escape(subList.subTouristGroupDetails.length), $out += '"></td> </tr> ', 
                    $line = 83) : ($out += ' <tr class="T-tr_', $line = 84, $out += $escape(indexA), 
                    $out += '" style="display: none;"> <td>', $line = 85, $out += $escape(subDetails.lineProductName), 
                    $out += "</td> <td>", $line = 86, 0 == subDetails.customerType ? ($out += "散客", 
                    $line = 86) : ($out += "团体", $line = 86), $out += "</td> <td>", $line = 87, $out += $escape($helpers.dateFormat(subDetails.startTime, "yyyy-MM-dd")), 
                    $out += "</td> <td>", $line = 88, $out += $escape(subDetails.days), $out += "</td> <td>", 
                    $line = 89, 0 == subDetails.operateCurrentNeedPayMoney ? ($out += "-", $line = 89) : ($out += "本段现收", 
                    $line = 89), $out += '</td> <td colspan="4"></td> <td>', $line = 91, 1 == subDetails.status ? ($out += " 未分团 ", 
                    $line = 93) : 2 == subDetails.status ? ($out += " 已分团 ", $line = 95) : 3 == subDetails.status ? ($out += " 已转客 ", 
                    $line = 97) : 4 == subDetails.status ? ($out += " 已取消 ", $line = 99) : 5 == subDetails.status ? ($out += " 已拆分 ", 
                    $line = 101) : 6 == subDetails.status ? ($out += " 已内转 ", $line = 103) : ($out += " 已发团 ", 
                    $line = 105), $out += " </td> </tr> ", $line = 108), $out += " ", $line = 109;
                }), $out += " ", $line = 110), $out += " ", $line = 111;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 117, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div style="clear: both;margin-bottom:10px;border-top:1px dotted #ccc;padding-bottom:5px;"></div>\r\n<div class="col-xs-12">\r\n	<table class="table table-striped table-bordered table-hover T-showHighLight">\r\n		<thead>\r\n			<tr class="bg-blur">  \r\n				<th>客户来源</th>\r\n				<th>线路产品</th>\r\n				<th>应用范围</th>               \r\n				<th>出游日期</th>\r\n				<th>天数</th>\r\n				<th>现收</th>\r\n				<th>联系人</th>\r\n				<th>人数</th>\r\n				<th>操作人</th>\r\n				<th class="col-sm-1">操作时间</th>\r\n				<th>状态</th>\r\n				<th>操作</th>\r\n			</tr>\r\n		</thead>\r\n	\r\n		<tbody>{{each transitSubTgroupList as subList indexA}}\r\n			<tr data-entity-id="{{subList.id}}">\r\n				<td>{{if !!subList.partnerAgency}}{{subList.partnerAgency.travelAgencyName}}{{/if}}</td>\r\n				<td>{{subList.lineProduct.name}}\r\n					{{if subList.subTouristGroupDetails != null}}\r\n					<label class="lineProductArea" style="float: right;">\r\n						<button class="btn btn-success btn-sm btn-white show" index="{{indexA}}">\r\n							<i class="ace-icon fa fa-plus bigger-110 icon-only"></i><!-- fa-minus -->\r\n						</button>\r\n					</label>\r\n					{{/if}}\r\n				</td>\r\n				<td>{{if subList.lineProduct.customerType == 0}}散客{{else}}团体{{/if}}</td>\r\n				<td>{{subList.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n				<td><span class="F-float F-count">{{subList.lineProduct.days}}</span></td>\r\n				<td><span class="F-float F-money">{{subList.currentNeedPayMoney}}</span></td>\r\n				<td>{{if subList.contactMember!=null}}{{subList.contactMember.name}}{{/if}}</td>\r\n				<td><span class="F-float F-count">{{subList.adultCount}}</span>大<span class="F-float F-count">{{subList.childCount}}</span>小</td>\r\n				<td>{{if subList.subOperatorUser != null}}{{subList.subOperatorUser.realName}}{{else}}-{{/if}}</td>\r\n				<td>{{if subList.subOperateTime != null}}{{subList.subOperateTime}}{{else}}-{{/if}}</td>\r\n				<td>{{if subList.status == 1}}未分团{{else if subList.status == 5}}已分段{{/if}}</td>\r\n				<td>\r\n					<div class="hidden-sm hidden-xs btn-group">\r\n						<a data-entity-id="{{subList.id}}" class="{{if subList.isEdit == 1}}gray{{else}}T-btn-subsection{{/if}} cursor R-right" data-right="1350001" title="{{if subList.isEdit == 1}}财务审核后已设置不可修改数据，请联系财务{{/if}}">\r\n							分段\r\n						</a>\r\n						<a data-entity-id="{{subList.id}}" class="{{if subList.status == 5}}T-btn-subsection-revoke{{/if}} cursor R-right" data-right="1350002" {{if subList.status != 5}}style="color:#bbb;"{{/if}}>\r\n							<label class="padding-right20">|</label>\r\n							撤销\r\n						</a>\r\n					</div>\r\n				</td>\r\n			</tr>\r\n			 {{if subList.subTouristGroupDetails != null}}\r\n			 	{{each subList.subTouristGroupDetails as subDetails index}}\r\n			 	{{if index == 0}}\r\n			 	<tr class="T-tr_{{indexA}}" style="display: none;">\r\n			 		<td rowspan="{{subList.subTouristGroupDetails.length}}"></td>\r\n			 		<td>{{subDetails.lineProductName}}</td>\r\n			 		<td>{{if subDetails.customerType == 0}}散客{{else}}团体{{/if}}</td>\r\n			 		<td>{{subDetails.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n					<td><span class="F-float F-count">{{subDetails.days}}</span></td>\r\n			 		<td>{{if subDetails.operateCurrentNeedPayMoney == 0}}-{{else}}本段现收{{/if}}</td>\r\n					<td colspan="4"></td>\r\n					<td>{{if subDetails.status == 1}}\r\n							未分团\r\n						{{else if subDetails.status == 2}}\r\n							已分团\r\n						{{else if subDetails.status == 3}}\r\n							已转客\r\n						{{else if subDetails.status == 4}}\r\n							已取消\r\n						{{else if subDetails.status == 5}}\r\n							已拆分\r\n						{{else if subDetails.status == 6}}\r\n							已内转\r\n						{{else}}\r\n							已发团\r\n						{{/if}}\r\n					</td>\r\n			 		<td rowspan="{{subList.subTouristGroupDetails.length}}"></td>\r\n			 	</tr> \r\n			 	{{else}}\r\n			 	<tr class="T-tr_{{indexA}}" style="display: none;">\r\n			 		<td>{{subDetails.lineProductName}}</td>\r\n			 		<td>{{if subDetails.customerType == 0}}散客{{else}}团体{{/if}}</td>\r\n			 		<td>{{subDetails.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n					<td>{{subDetails.days}}</td>\r\n			 		<td>{{if subDetails.operateCurrentNeedPayMoney == 0}}-{{else}}本段现收{{/if}}</td>\r\n					<td colspan="4"></td>\r\n					<td>{{if subDetails.status == 1}}\r\n							未分团\r\n						{{else if subDetails.status == 2}}\r\n							已分团\r\n						{{else if subDetails.status == 3}}\r\n							已转客\r\n						{{else if subDetails.status == 4}}\r\n							已取消\r\n						{{else if subDetails.status == 5}}\r\n							已拆分\r\n						{{else if subDetails.status == 6}}\r\n							已内转\r\n						{{else}}\r\n							已发团\r\n						{{/if}}\r\n					</td>\r\n			 	</tr> \r\n			 	{{/if}}\r\n			 	{{/each}}\r\n			 {{/if}}\r\n			{{/each}}\r\n		</tbody>\r\n	</table>\r\n	\r\n	<div class="row pageMode">\r\n		<div class="col-xs-6">\r\n			<small>共计 {{recordSize}} 条记录</small>\r\n		</div>\r\n		<div class="col-xs-6">\r\n			<div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});