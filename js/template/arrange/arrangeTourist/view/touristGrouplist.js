/*TMODJS:{"debug":true,"version":92,"md5":"06258777bd9a110cc26ad0d597892c26"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeTourist/view/touristGrouplist", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, arrangeTouristGroupList = $data.arrangeTouristGroupList, $escape = ($data.arrangeTourist, 
            $data.$index, $utils.$escape), recordSize = $data.recordSize, $out = "";
            return $out += '<table class="table table-striped table-bordered table-hover globalAdd"> <thead> <tr class="bg-blur"> <th>线路产品</th> <th>类别</th> <th>应用范围</th> <th>天数</th> <th>出游日期</th> <th>人数</th> <th>未分团人数</th> <th>操作</th> </tr> </thead> <tbody class="T-arrageGroup-list"> ', 
            $line = 15, $each(arrangeTouristGroupList, function(arrangeTourist) {
                $out += ' <tr data-entity-id="', $line = 16, $out += $escape(arrangeTourist.lineProductId), 
                $out += '" data-entity-startTime="', $line = 16, $out += $escape(arrangeTourist.startTime), 
                $out += '" data-entity-days="', $line = 16, $out += $escape(arrangeTourist.days), 
                $out += '" data-entity-name="', $line = 16, $out += $escape(arrangeTourist.name), 
                $out += '" data-entity-type="', $line = 16, $out += $escape(arrangeTourist.type), 
                $out += '" data-entity-memberCount="', $line = 16, $out += $escape(arrangeTourist.sumNoOperationAdultCount + arrangeTourist.sumNoOperationChildCount), 
                $out += '" class="tr-', $line = 16, $out += $escape(arrangeTourist.lineProductId), 
                $out += "-", $line = 16, $out += $escape(arrangeTourist.startTime), $out += '"> <td>', 
                $line = 17, $out += $escape(arrangeTourist.name), $out += "</td> <td>", $line = 18, 
                $out += $escape(arrangeTourist.type), $out += "</td> <td> ", $line = 20, 0 == arrangeTourist.customerType ? ($out += " 散客 ", 
                $line = 22) : ($out += " 团体 ", $line = 24), $out += " </td> <td>", $line = 26, $out += $escape(arrangeTourist.days), 
                $out += "</td> <td>", $line = 27, $out += $escape(arrangeTourist.startTime), $out += "</td> <td>大人", 
                $line = 28, $out += $escape(arrangeTourist.sumAdultCount), $out += "小孩", $line = 28, 
                $out += $escape(arrangeTourist.sumChildCount), $out += "</td> <td>大人", $line = 29, 
                $out += $escape(arrangeTourist.sumNoOperationAdultCount), $out += "小孩", $line = 29, 
                $out += $escape(arrangeTourist.sumNoOperationChildCount), $out += '</td> <td> <a data-entity-id="', 
                $line = 31, $out += $escape(arrangeTourist.lineProductId), $out += '" data-entity-startTime="', 
                $line = 31, $out += $escape(arrangeTourist.startTime), $out += '" class="T-divide T-action cursor R-right" data-right="1130002"> 分团 </a> <a data-entity-id="', 
                $line = 34, $out += $escape(arrangeTourist.lineProductId), $out += '" data-entity-startTime="', 
                $line = 34, $out += $escape(arrangeTourist.startTime), $out += '" class="T-transfer T-action cursor R-right" data-right="1130003"> <label class="padding-right20">|</label> 转客 </a> <a data-entity-id="', 
                $line = 38, $out += $escape(arrangeTourist.lineProductId), $out += '" data-entity-startTime="', 
                $line = 38, $out += $escape(arrangeTourist.startTime), $out += '" class="T-inTransfer T-action cursor R-right" data-right="1130005"> <label class="padding-right20">|</label> 内转 </a> </td> </tr> ', 
                $line = 44;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计', 
            $line = 50, $out += $escape(recordSize), $out += '条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<table class="table table-striped table-bordered table-hover globalAdd">\r\n	<thead>\r\n		<tr class="bg-blur">\r\n			<th>线路产品</th>\r\n			<th>类别</th>\r\n			<th>应用范围</th>\r\n			<th>天数</th>\r\n			<th>出游日期</th>\r\n			<th>人数</th>\r\n			<th>未分团人数</th>\r\n			<th>操作</th>\r\n		</tr>\r\n	</thead>\r\n	<tbody class="T-arrageGroup-list">\r\n		{{each arrangeTouristGroupList as arrangeTourist}}\r\n			<tr data-entity-id="{{arrangeTourist.lineProductId}}" data-entity-startTime="{{arrangeTourist.startTime}}" data-entity-days="{{arrangeTourist.days}}" data-entity-name="{{arrangeTourist.name}}" data-entity-type="{{arrangeTourist.type}}" data-entity-memberCount="{{arrangeTourist.sumNoOperationAdultCount+arrangeTourist.sumNoOperationChildCount}}" class="tr-{{arrangeTourist.lineProductId}}-{{arrangeTourist.startTime}}">\r\n				<td>{{arrangeTourist.name}}</td>\r\n				<td>{{arrangeTourist.type}}</td>\r\n				<td>\r\n					{{if arrangeTourist.customerType == 0}}\r\n						散客\r\n					{{else}}\r\n						团体\r\n					{{/if}}\r\n				</td>\r\n				<td>{{arrangeTourist.days}}</td>\r\n				<td>{{arrangeTourist.startTime}}</td>\r\n				<td>大人{{arrangeTourist.sumAdultCount}}小孩{{arrangeTourist.sumChildCount}}</td>\r\n				<td>大人{{arrangeTourist.sumNoOperationAdultCount}}小孩{{arrangeTourist.sumNoOperationChildCount}}</td>\r\n				<td>\r\n					<a data-entity-id="{{arrangeTourist.lineProductId}}" data-entity-startTime="{{arrangeTourist.startTime}}" class="T-divide T-action cursor R-right" data-right="1130002">\r\n						分团\r\n					</a>\r\n					<a data-entity-id="{{arrangeTourist.lineProductId}}" data-entity-startTime="{{arrangeTourist.startTime}}" class="T-transfer T-action  cursor R-right" data-right="1130003">\r\n						<label class="padding-right20">|</label>\r\n						转客\r\n					</a>\r\n					<a data-entity-id="{{arrangeTourist.lineProductId}}" data-entity-startTime="{{arrangeTourist.startTime}}" class="T-inTransfer T-action  cursor R-right" data-right="1130005">\r\n						<label class="padding-right20">|</label>\r\n						内转\r\n					</a>\r\n				</td>\r\n			</tr>\r\n		{{/each}}\r\n	</tbody>\r\n</table>\r\n\r\n<div class="row pageMode">\r\n	<div class="col-xs-6">\r\n		<small>共计{{recordSize}}条记录</small>\r\n	</div>\r\n	<div class="col-xs-6">\r\n		<div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n		</div>\r\n	</div>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});