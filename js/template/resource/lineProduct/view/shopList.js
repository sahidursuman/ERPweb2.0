/*TMODJS:{"debug":true,"version":75,"md5":"0c40ee23b2f569cd075f9338a005c82d"}*/
define(function(require) {
    return require("../../../template")("resource/lineProduct/view/shopList", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, shopList = $data.shopList, $escape = ($data.rs, 
            $data.$index, $utils.$escape), recordSize = ($data.item, $data.index, $data.recordSize), $out = "";
            return $out += '<table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr> <th class="th-border">商家名称</th> <th class="th-border">商品列表</th> <th class="th-border">操作</th> </tr> </thead> <tbody> ', 
            $line = 10, $each(shopList, function(rs) {
                $out += ' <tr data-entity-id="', $line = 11, $out += $escape(rs.id), $out += '" data-entity-name="', 
                $line = 11, $out += $escape(rs.name), $out += '" data-entity-item="', $line = 11, 
                $each(rs.shopPolicyList, function(item, index) {
                    $line = 11, index == rs.shopPolicyList.length - 1 ? ($line = 11, $out += $escape(item.name), 
                    $line = 11) : ($line = 11, $out += $escape(item.name), $out += "、", $line = 11), 
                    $line = 11;
                }), $out += '"> <td>', $line = 12, $out += $escape(rs.name), $out += "</td> <td> ", 
                $line = 14, $each(rs.shopPolicyList, function(item, index) {
                    $out += " ", $line = 15, index == rs.shopPolicyList.length - 1 ? ($line = 15, $out += $escape(item.name), 
                    $line = 15) : ($line = 15, $out += $escape(item.name), $out += "、", $line = 15), 
                    $out += " ", $line = 16;
                }), $out += ' </td> <td><label class="pos-rel"><input type="checkbox" class="ace T-add"> <span class="lbl"></span></label></td> </tr> ', 
                $line = 20;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 25, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<table class="table table-striped table-bordered table-hover T-showHighLight">\r\n	<thead>\r\n		<tr>\r\n			<th class="th-border">商家名称</th>\r\n			<th class="th-border">商品列表</th>\r\n			<th class="th-border">操作</th>\r\n		</tr>\r\n	</thead>\r\n	<tbody>\r\n		{{each shopList as rs}}\r\n		<tr data-entity-id="{{rs.id}}" data-entity-name="{{rs.name}}" data-entity-item="{{each rs.shopPolicyList as item index}}{{if index == rs.shopPolicyList.length - 1}}{{item.name}}{{else}}{{item.name}}、{{/if}}{{/each}}">\r\n			<td>{{rs.name}}</td>\r\n			<td>\r\n				{{each rs.shopPolicyList as item index}}\r\n					{{if index == rs.shopPolicyList.length - 1}}{{item.name}}{{else}}{{item.name}}、{{/if}}\r\n				{{/each}}\r\n			</td>\r\n			<td><label class="pos-rel"><input type="checkbox" class="ace T-add"> <span class="lbl"></span></label></td>\r\n		</tr>\r\n		{{/each}}\r\n	</tbody>\r\n</table>\r\n<div class="row pageMode">\r\n	<div class="col-xs-6">\r\n		<small>共计 {{recordSize}} 条记录</small>\r\n	</div>\r\n	<div class="col-xs-6">\r\n		<div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});