/*TMODJS:{"debug":true,"version":57,"md5":"e68d5aade250105eade544210030645a"}*/
define(function(require) {
    return require("../../../template")("resource/travelLine/view/scenicItem", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, scenicList = $data.scenicList, $escape = ($data.scenic, 
            $data.$index, $data.scenicItem, $data.index, $utils.$escape), recordSize = $data.recordSize, $out = "";
            return $out += '<table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border" colspan="3">景点选择</th> </tr> </thead> <tbody> ', 
            $line = 8, $each(scenicList, function(scenic) {
                $out += " ", $line = 9, $each(scenic.scenicItemList, function(scenicItem, index) {
                    $out += ' <tr data-value="', $line = 10, $out += $escape(scenic.id), $out += '"> ', 
                    $line = 11, 0 == index && ($out += '<td rowspan="', $line = 11, $out += $escape(scenic.scenicItemList.length), 
                    $out += '">', $line = 11, $out += $escape(scenic.name), $out += "</td>", $line = 11), 
                    $out += ' <td data-entity-id="', $line = 12, $out += $escape(scenicItem.id), $out += '">', 
                    $line = 12, $out += $escape(scenicItem.name), $out += '</td> <td><label class="pos-rel"><input type="checkbox" class="ace T-add"> <span class="lbl"></span> </label> </td> </tr> ', 
                    $line = 16;
                }), $out += " ", $line = 17;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 23, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<table class="table table-striped table-bordered table-hover">\r\n	<thead>\r\n		<tr>\r\n			<th class="th-border" colspan="3">景点选择</th>\r\n		</tr>\r\n	</thead>\r\n	<tbody>\r\n	{{each scenicList as scenic }}\r\n		{{each scenic.scenicItemList as scenicItem index}}\r\n			<tr data-value="{{scenic.id}}">\r\n				{{if index==0}}<td rowspan="{{scenic.scenicItemList.length}}">{{scenic.name}}</td>{{/if}}\r\n				<td data-entity-id="{{scenicItem.id}}">{{scenicItem.name}}</td>\r\n				<td><label class="pos-rel"><input type="checkbox" class="ace T-add"> <span class="lbl"></span> </label>\r\n				</td>\r\n			</tr>\r\n		{{/each}}\r\n	{{/each}}\r\n	</tbody>\r\n</table>\r\n\r\n<div class="row pageMode">\r\n	<div class="col-xs-6">\r\n		<small>共计 {{recordSize}} 条记录</small>\r\n	</div>\r\n	<div class="col-xs-6">\r\n		<div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n		</div>\r\n	</div>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});