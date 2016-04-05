/*TMODJS:{"debug":true,"version":59,"md5":"a7059d35ce4e571b6a2529d8adf88f5d"}*/
define(function(require) {
    return require("../../../template")("arrange/quote/view/busInquiryList", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, result = $data.result, $escape = ($data.busCompany, 
            $data.$index, $utils.$escape), searchParam = ($data.bus, $data.index, $data.searchParam), $out = "";
            return $out += '<div class="col-xs-12"> <table class="table table-striped table-bordered table-hover"> <thead> <tr class="bg-blur"> <th>车队</th> <th>所在地区</th> <th>联系人</th> <th>联系电话</th> <th>车座数</th> <th>车辆品牌</th> <th>协议价</th> <th>操作</th> </tr> </thead> <tbody>', 
            $line = 16, $each(result, function(busCompany) {
                $out += ' <tr data-entity-id="', $line = 17, $out += $escape(busCompany.id), $out += '"> <td style="vertical-align: middle" rowspan="', 
                $line = 18, $out += $escape(busCompany.busList.length), $out += '" class="T-name">', 
                $line = 18, $out += $escape(busCompany.companyName), $out += '</td> <td style="vertical-align: middle" rowspan="', 
                $line = 19, $out += $escape(busCompany.busList.length), $out += '">', $line = 19, 
                null != busCompany.province && ($line = 19, $out += $escape(busCompany.province.name), 
                $line = 19), $out += "-", $line = 19, null != busCompany.city && ($line = 19, $out += $escape(busCompany.city.name), 
                $line = 19), $out += "-", $line = 19, null != busCompany.district && ($line = 19, 
                $out += $escape(busCompany.district.name), $line = 19), $out += '</td> <td style="vertical-align: middle" rowspan="', 
                $line = 20, $out += $escape(busCompany.busList.length), $out += '" class="T-managerName">', 
                $line = 20, $out += $escape(busCompany.managerName), $out += '</td> <td style="vertical-align: middle" rowspan="', 
                $line = 21, $out += $escape(busCompany.busList.length), $out += '" class="T-mobileNumber">', 
                $line = 21, $out += $escape(busCompany.mobileNumber), $out += "</td> ", $line = 22, 
                0 == busCompany.busList.length ? ($out += " <td>-</td> <td>-</td> <td>-</td> ", 
                $line = 26) : ($out += " ", $line = 27, $each(busCompany.busList, function(bus, index) {
                    $out += " ", $line = 28, 0 == index && ($out += ' <td><span class="F-float F-count">', 
                    $line = 29, $out += $escape(bus.seatCount), $out += "</span></td> <td>", $line = 30, 
                    $out += $escape(bus.brand), $out += '</td> <td><span class="F-float F-money">', 
                    $line = 31, $out += $escape($helpers.toFixed(bus.price)), $out += "</span></td> ", 
                    $line = 32), $out += " ", $line = 33;
                }), $out += " ", $line = 34), $out += ' <td style="vertical-align: middle" rowspan="', 
                $line = 35, $out += $escape(busCompany.busList.length), $out += '"> <label class="pos-rel"><input type="checkbox" class="ace T-chooseBus"> <span class="lbl"></span> </label> </td> </tr> ', 
                $line = 39, $each(busCompany.busList, function(bus, index) {
                    $out += " ", $line = 40, index > 0 && ($out += " <tr> <td>", $line = 42, $out += $escape(bus.seatCount), 
                    $out += "</td> <td>", $line = 43, $out += $escape(bus.brand), $out += "</td> <td>", 
                    $line = 44, $out += $escape($helpers.toFixed(bus.price)), $out += "</td> </tr> ", 
                    $line = 46), $out += " ", $line = 47;
                }), $out += " ", $line = 48;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 53, $out += $escape(searchParam.totalCount), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12">\r\n	<table class="table table-striped table-bordered table-hover">\r\n		<thead>\r\n			<tr class="bg-blur">  \r\n				<th>车队</th>\r\n				<th>所在地区</th>\r\n				<th>联系人</th>               \r\n				<th>联系电话</th>\r\n				<th>车座数</th>\r\n				<th>车辆品牌</th>\r\n				<th>协议价</th>\r\n				<th>操作</th>\r\n			</tr>\r\n		</thead>\r\n	\r\n		<tbody>{{each result as busCompany}}\r\n			<tr data-entity-id="{{busCompany.id}}">\r\n				<td style="vertical-align: middle" rowspan="{{busCompany.busList.length}}" class="T-name">{{busCompany.companyName}}</td>\r\n				<td style="vertical-align: middle" rowspan="{{busCompany.busList.length}}">{{if busCompany.province != null}}{{busCompany.province.name}}{{/if}}-{{if busCompany.city != null}}{{busCompany.city.name}}{{/if}}-{{if busCompany.district != null}}{{busCompany.district.name}}{{/if}}</td>\r\n				<td style="vertical-align: middle" rowspan="{{busCompany.busList.length}}" class="T-managerName">{{busCompany.managerName}}</td>\r\n				<td style="vertical-align: middle" rowspan="{{busCompany.busList.length}}" class="T-mobileNumber">{{busCompany.mobileNumber}}</td>\r\n				{{if busCompany.busList.length == 0}}\r\n				<td>-</td>\r\n				<td>-</td>\r\n				<td>-</td>\r\n				{{else}}\r\n				{{each busCompany.busList as bus index}}\r\n				{{if index == 0}}\r\n				<td><span class="F-float F-count">{{bus.seatCount}}</span></td>\r\n				<td>{{bus.brand}}</td>\r\n				<td><span class="F-float F-money">{{bus.price | toFixed}}</span></td>\r\n				{{/if}}\r\n				{{/each}}\r\n				{{/if}}\r\n				<td style="vertical-align: middle" rowspan="{{busCompany.busList.length}}"><!-- <a class="T-chooseBus">添加</a> -->\r\n					<label class="pos-rel"><input type="checkbox" class="ace T-chooseBus"> <span class="lbl"></span> </label>\r\n				</td>\r\n			</tr>\r\n			{{each busCompany.busList as bus index}}\r\n			{{if index > 0}}\r\n				<tr>\r\n				<td>{{bus.seatCount}}</td>\r\n				<td>{{bus.brand}}</td>\r\n				<td>{{bus.price | toFixed}}</td>\r\n				</tr>\r\n			{{/if}}\r\n			{{/each}}\r\n			{{/each}}\r\n		</tbody>\r\n	</table>\r\n	<div class="row pageMode">\r\n		<div class="col-xs-6">\r\n			<small>共计 {{searchParam.totalCount}} 条记录</small>\r\n		</div>\r\n		<div class="col-xs-6">\r\n			<div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});