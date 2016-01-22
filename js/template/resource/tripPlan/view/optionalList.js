/*TMODJS:{"debug":true,"version":34,"md5":"d9b60ca6c63e608393af1605bbe6d21b"}*/
define(function(require) {
    return require("../../../template")("resource/tripPlan/view/optionalList", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, restaurantList = $data.restaurantList, $escape = ($data.restaurant, 
            $data.$index, $utils.$escape), recordSize = ($data.standard, $data.index, $data.recordSize), $out = "";
            return $out += '<table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">餐厅</th> <th class="th-border">用餐类型</th> <th class="th-border">餐标<span style="font-size:12px;">(元/人)</span></th> <th class="th-border">菜单</th> <th class="th-border">操作</th> </tr> </thead> <tbody>', 
            $line = 11, $each(restaurantList, function(restaurant) {
                $out += ' <tr data-entity-id="', $line = 12, $out += $escape(restaurant.id), $out += '" data-entity-name="', 
                $line = 12, $out += $escape(restaurant.name), $out += '" data-entity-managerName= "', 
                $line = 12, $out += $escape(restaurant.managerName), $out += '" data-entity-mobileNumber="', 
                $line = 12, $out += $escape(restaurant.mobileNumber), $out += '"> <td ', $line = 13, 
                restaurant.restaurantStandardList.length > 1 && ($out += 'rowspan="', $line = 13, 
                $out += $escape(restaurant.restaurantStandardList.length), $out += '"', $line = 13), 
                $out += ' style="vertical-align:middle">', $line = 13, $out += $escape(restaurant.name), 
                $out += "</td> ", $line = 14, 0 == restaurant.restaurantStandardList.length && ($out += "<td></td><td></td><td></td>", 
                $line = 14), $out += " ", $line = 15, $each(restaurant.restaurantStandardList, function(standard, index) {
                    $out += " ", $line = 16, 0 == index && ($out += " <td>", $line = 17, $out += $escape(standard.type), 
                    $out += '</td> <td class="F-float F-money">', $line = 18, $out += $escape(standard.price), 
                    $out += '<input type="hidden" name="restaurantStandardId" value="', $line = 18, 
                    $out += $escape(standard.id), $out += '" /></td> <td>', $line = 19, $out += $escape(standard.menuList), 
                    $out += "</td> ", $line = 20), $out += " ", $line = 21;
                }), $out += " <td ", $line = 22, restaurant.restaurantStandardList.length > 1 && ($out += 'rowspan="', 
                $line = 22, $out += $escape(restaurant.restaurantStandardList.length), $out += '"', 
                $line = 22), $out += ' style="vertical-align:middle"><label class="pos-rel"><input type="checkbox" class="ace T-add"> <span class="lbl"></span> </label></td> </tr> ', 
                $line = 24, $each(restaurant.restaurantStandardList, function(standard, index) {
                    $out += " ", $line = 25, index > 0 && ($out += " <tr> <td>", $line = 27, $out += $escape(standard.type), 
                    $out += "</td> <td>", $line = 28, $out += $escape(standard.price), $out += '<input type="hidden" name="restaurantStandardId" value="', 
                    $line = 28, $out += $escape(standard.id), $out += '" /></td> <td>', $line = 29, 
                    $out += $escape(standard.menuList), $out += "</td> </tr> ", $line = 31), $out += " ", 
                    $line = 32;
                }), $out += " ", $line = 33;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 38, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<table class="table table-striped table-bordered table-hover">\r\n	<thead>\r\n		<tr>\r\n			<th class="th-border">餐厅</th>\r\n			<th class="th-border">用餐类型</th>\r\n			<th class="th-border">餐标<span style="font-size:12px;">(元/人)</span></th>\r\n			<th class="th-border">菜单</th>\r\n			<th class="th-border">操作</th>\r\n		</tr>\r\n	</thead>\r\n	<tbody>{{each restaurantList as restaurant}}\r\n		<tr data-entity-id="{{restaurant.id}}" data-entity-name="{{restaurant.name}}" data-entity-managerName= "{{restaurant.managerName}}" data-entity-mobileNumber="{{restaurant.mobileNumber}}">\r\n			<td {{if restaurant.restaurantStandardList.length > 1}}rowspan="{{restaurant.restaurantStandardList.length}}"{{/if}} style="vertical-align:middle">{{restaurant.name}}</td>\r\n			{{if restaurant.restaurantStandardList.length == 0}}<td></td><td></td><td></td>{{/if}}\r\n			{{each restaurant.restaurantStandardList as standard index}}\r\n			{{if index == 0}}\r\n			<td>{{standard.type}}</td>\r\n			<td class="F-float F-money">{{standard.price}}<input type="hidden" name="restaurantStandardId" value="{{standard.id}}" /></td>\r\n			<td>{{standard.menuList}}</td>\r\n			{{/if}}\r\n			{{/each}}\r\n			<td {{if restaurant.restaurantStandardList.length > 1}}rowspan="{{restaurant.restaurantStandardList.length}}"{{/if}} style="vertical-align:middle"><label class="pos-rel"><input type="checkbox" class="ace T-add"> <span class="lbl"></span> </label></td>\r\n		</tr>\r\n		{{each restaurant.restaurantStandardList as standard index}}\r\n		{{if index > 0}}\r\n		<tr>\r\n			<td>{{standard.type}}</td>\r\n			<td>{{standard.price}}<input type="hidden" name="restaurantStandardId" value="{{standard.id}}" /></td>\r\n			<td>{{standard.menuList}}</td>\r\n		</tr>\r\n		{{/if}}\r\n		{{/each}}\r\n		{{/each}}\r\n	</tbody>\r\n</table>\r\n<div class="row pageMode">\r\n	<div class="col-xs-6">\r\n		<small>共计 {{recordSize}} 条记录</small>\r\n	</div>\r\n	<div class="col-xs-6">\r\n		<div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});