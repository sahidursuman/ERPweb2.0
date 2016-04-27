/*TMODJS:{"debug":true,"version":101,"md5":"9c377894543410ebb26ee40f2127f786"}*/
define(function(require) {
    return require("../../../template")("resource/lineProduct/view/selfPayList", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, selfPayList = $data.selfPayList, $escape = ($data.rs, 
            $data.$index, $utils.$escape), recordSize = ($data.item, $data.index, $data.recordSize), $out = "";
            return $out += '<table class="table table-striped table-bordered T-showHighLight table-hover"> <thead> <tr> <th class="th-border">商家名称</th> <th class="th-border">自费项目</th> <th class="th-border">操作</th> </tr> </thead> <tbody> ', 
            $line = 10, $each(selfPayList, function(rs) {
                $out += ' <tr data-entity-id="', $line = 11, $out += $escape(rs.id), $out += '" data-entity-name="', 
                $line = 11, $out += $escape(rs.name), $out += '" data-entity-itemname="', $line = 11, 
                $each(rs.selfPayItemList, function(item, index) {
                    $line = 11, 0 == index && ($line = 11, $out += $escape(item.name), $line = 11), 
                    $line = 11;
                }), $out += '"> <td style="vertical-align:middle" rowspan="', $line = 12, $out += $escape(rs.selfPayItemList.length), 
                $out += '">', $line = 12, $out += $escape(rs.name), $out += "</td> ", $line = 13, 
                $each(rs.selfPayItemList, function(item, index) {
                    $out += " ", $line = 14, 0 == index && ($out += " <td> ", $line = 16, $out += $escape(item.name), 
                    $out += '<input name="itemId" type="hidden" value="', $line = 16, $out += $escape(item.id), 
                    $out += '"> </td> <td><label class="pos-rel"><input type="checkbox" class="ace T-add"> <span class="lbl"></span></label></td> ', 
                    $line = 19), $out += " ", $line = 20;
                }), $out += " </tr> ", $line = 22, $each(rs.selfPayItemList, function(item, index) {
                    $out += " ", $line = 23, index > 0 && ($out += ' <tr data-entity-id="', $line = 24, 
                    $out += $escape(rs.id), $out += '" data-entity-name="', $line = 24, $out += $escape(rs.name), 
                    $out += '" data-entity-itemname="', $line = 24, $out += $escape(item.name), $out += '"> <td> ', 
                    $line = 26, $out += $escape(item.name), $out += '<input name="itemId" type="hidden" value="', 
                    $line = 26, $out += $escape(item.id), $out += '"> </td> <td><label class="pos-rel"><input type="checkbox" class="ace T-add"> <span class="lbl"></span></label></td> </tr> ', 
                    $line = 30), $out += " ", $line = 31;
                }), $out += " ", $line = 32;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 38, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<table class="table table-striped table-bordered T-showHighLight  table-hover">\r\n	<thead>\r\n		<tr>\r\n			<th class="th-border">商家名称</th>\r\n			<th class="th-border">自费项目</th>\r\n			<th class="th-border">操作</th>\r\n		</tr>\r\n	</thead>\r\n	<tbody>\r\n		{{each selfPayList as rs}}\r\n		<tr data-entity-id="{{rs.id}}" data-entity-name="{{rs.name}}" data-entity-itemname="{{each rs.selfPayItemList as item index}}{{if index == 0}}{{item.name}}{{/if}}{{/each}}">\r\n			<td style="vertical-align:middle" rowspan="{{rs.selfPayItemList.length}}">{{rs.name}}</td>\r\n			{{each rs.selfPayItemList as item index}}\r\n			{{if index == 0}}\r\n			<td>\r\n				{{item.name}}<input name="itemId" type="hidden" value="{{item.id}}">\r\n			</td>\r\n			<td><label class="pos-rel"><input type="checkbox" class="ace T-add"> <span class="lbl"></span></label></td>\r\n			{{/if}}\r\n			{{/each}}\r\n		</tr>\r\n			{{each rs.selfPayItemList as item index}}\r\n				{{if index > 0}}\r\n				<tr data-entity-id="{{rs.id}}" data-entity-name="{{rs.name}}" data-entity-itemname="{{item.name}}">\r\n					<td>\r\n						{{item.name}}<input name="itemId" type="hidden" value="{{item.id}}">\r\n					</td>\r\n					<td><label class="pos-rel"><input type="checkbox" class="ace T-add"> <span class="lbl"></span></label></td>\r\n				</tr>\r\n				{{/if}}\r\n			{{/each}}\r\n		{{/each}}\r\n\r\n	</tbody>\r\n</table>\r\n<div class="row pageMode">\r\n	<div class="col-xs-6">\r\n		<small>共计 {{recordSize}} 条记录</small>\r\n	</div>\r\n	<div class="col-xs-6">\r\n		<div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});