/*TMODJS:{"debug":true,"version":78,"md5":"a2b73703cb52c39187ff0fe85f02fbf5"}*/
define(function(require) {
    return require("../../../template")("resource/travelLine/view/scenicItem", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, scenicList = $data.scenicList, $escape = ($data.scenic, 
            $data.$index, $data.scenicItem, $data.index, $utils.$escape), recordSize = $data.recordSize, $out = "";
            return $out += '<table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr> <th class="th-border">景区名称</th> <th class="th-border">收费项目</th> <th class="th-border">操作</th> </tr> </thead> <tbody class="T-scenic-list"> ', 
            $line = 10, $each(scenicList, function(scenic) {
                $out += " ", $line = 11, $each(scenic.scenicItemList, function(scenicItem, index) {
                    $out += ' <tr data-entity-id="', $line = 12, $out += $escape(scenic.id), $out += '" data-entity-name="', 
                    $line = 12, $out += $escape(scenic.name), $out += '" data-entity-itemname="', $line = 12, 
                    $out += $escape(scenicItem.name), $out += '"> ', $line = 13, 0 == index && ($out += '<td rowspan="', 
                    $line = 13, $out += $escape(scenic.scenicItemList.length), $out += '" style="">', 
                    $line = 13, $out += $escape(scenic.name), $out += "</td>", $line = 13), $out += " <td>", 
                    $line = 14, $out += $escape(scenicItem.name), $out += '<input type="hidden" name="itemId" value="', 
                    $line = 14, $out += $escape(scenicItem.id), $out += '"></td> <td><label class="pos-rel"><input type="checkbox" class="ace T-add"> <span class="lbl"></span> </label> </td> </tr> ', 
                    $line = 18;
                }), $out += " ", $line = 19;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 25, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<table class="table table-striped table-bordered table-hover T-showHighLight">\r\n	<thead>\r\n		<tr>\r\n			<th class="th-border">景区名称</th>\r\n			<th class="th-border">收费项目</th>\r\n			<th class="th-border">操作</th>\r\n		</tr>\r\n	</thead>\r\n	<tbody class="T-scenic-list">\r\n	{{each scenicList as scenic }}\r\n		{{each scenic.scenicItemList as scenicItem index}}\r\n			<tr data-entity-id="{{scenic.id}}" data-entity-name="{{scenic.name}}" data-entity-itemname="{{scenicItem.name}}">\r\n				{{if index==0}}<td rowspan="{{scenic.scenicItemList.length}}" style="">{{scenic.name}}</td>{{/if}}\r\n				<td>{{scenicItem.name}}<input type="hidden" name="itemId" value="{{scenicItem.id}}"></td>\r\n				<td><label class="pos-rel"><input type="checkbox" class="ace T-add"> <span class="lbl"></span> </label>\r\n				</td>\r\n			</tr>\r\n		{{/each}}\r\n	{{/each}}\r\n	</tbody>\r\n</table>\r\n\r\n<div class="row pageMode">\r\n	<div class="col-xs-6">\r\n		<small>共计 {{recordSize}} 条记录</small>\r\n	</div>\r\n	<div class="col-xs-6">\r\n		<div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n		</div>\r\n	</div>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});