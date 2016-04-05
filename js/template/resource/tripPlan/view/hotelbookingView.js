/*TMODJS:{"debug":true,"version":44,"md5":"58dd897e2f031084ee0f1afc8bbd75e2"}*/
define(function(require) {
    return require("../../../template")("resource/tripPlan/view/hotelbookingView", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, hotelOrderJson = $data.hotelOrderJson, $escape = ($data.hotOrderList, 
            $data.$index, $utils.$escape), $out = "";
            return $out += ' <div class="row col-xs-12" style="padding: 20px 0 0 25px"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">订单号</th> <th class="th-border">类型</th> <th class="th-border">类型编号</th> <th class="th-border">酒店</th> <th class="th-border">星级</th> <th class="th-border">房型</th> <th class="th-border">数量</th> <th class="th-border">单价</th> <th class="th-border">金额</th> <th class="th-border">操作人</th> <th class="th-border">操作时间</th> <th class="th-border">备注</th> <th class="th-border">状态</th> </tr> </thead> <tbody class="T-Hotel-list"> ', 
            $line = 23, $each(hotelOrderJson, function(hotOrderList) {
                $out += ' <tr data-value="', $line = 24, $out += $escape(hotOrderList.id), $out += '"> <td style="vertical-align:middle">', 
                $line = 25, $out += $escape(hotOrderList.orderNumber), $out += '</td> <td style="vertical-align:middle">发团</td> <td style="vertical-align:middle">', 
                $line = 27, $out += $escape(hotOrderList.tripNumber), $out += '</td> <td style="vertical-align:middle">', 
                $line = 28, $out += $escape(hotOrderList.name), $out += '</td> <td style="vertical-align:middle"> ', 
                $line = 30, 1 == hotOrderList.level ? ($out += "三星以下 ", $line = 31) : 2 == hotOrderList.level ? ($out += "三星 ", 
                $line = 32) : 3 == hotOrderList.level ? ($out += "准四星 ", $line = 33) : (hotOrderList.level = 4) ? ($out += "四星 ", 
                $line = 34) : 5 == hotOrderList.level ? ($out += "准五星 ", $line = 35) : 6 == hotOrderList.level ? ($out += "五星 ", 
                $line = 36) : 7 == hotOrderList.level && ($out += "五星以上 ", $line = 37), $out += " </td> <td>", 
                $line = 39, $out += $escape(hotOrderList.type), $out += '</td> <td class="count F-float F-count">', 
                $line = 40, $out += $escape(hotOrderList.count), $out += '</td> <td class="price F-float F-money">', 
                $line = 41, $out += $escape(hotOrderList.price), $out += '</td> <td class="totalMoney F-float F-money">', 
                $line = 42, $out += $escape(hotOrderList.price * hotOrderList.count), $out += '</td> <td style="vertical-align:middle">', 
                $line = 43, $out += $escape(hotOrderList.creator), $out += "</td> <td>", $line = 44, 
                $out += $escape($helpers.dateFormat(hotOrderList.createTime, "yyyy-MM-dd hh:mm:ss")), 
                $out += '</td> <td style="vertical-align:middle" class="T-ctrl-tip">', $line = 45, 
                $out += $escape(hotOrderList.remark), $out += "</td> <td>", $line = 46, $out += $escape(hotOrderList.status), 
                $out += "</td> </tr> ", $line = 48;
            }), $out += " </tbody> </table> </div> ", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<!--酒店start-->\r\n<div class="row col-xs-12" style="padding: 20px 0 0 25px">	\r\n	<table class="table table-striped table-bordered table-hover">\r\n			<thead>\r\n				<tr>\r\n					<th class="th-border">订单号</th>\r\n					<th class="th-border">类型</th>\r\n					<th class="th-border">类型编号</th>\r\n					<th class="th-border">酒店</th>\r\n					<th class="th-border">星级</th>\r\n					<th class="th-border">房型</th>\r\n					<th class="th-border">数量</th>\r\n					<th class="th-border">单价</th>\r\n					<th class="th-border">金额</th>\r\n					<th class="th-border">操作人</th>\r\n					<th class="th-border">操作时间</th>\r\n					<th class="th-border">备注</th>\r\n					<th class="th-border">状态</th>\r\n\r\n				</tr>\r\n			</thead>\r\n			<tbody class="T-Hotel-list">\r\n			{{each hotelOrderJson as hotOrderList}}\r\n				<tr data-value="{{hotOrderList.id}}">\r\n				    <td style="vertical-align:middle">{{hotOrderList.orderNumber}}</td>\r\n				    <td style="vertical-align:middle">发团</td>\r\n				    <td style="vertical-align:middle">{{hotOrderList.tripNumber}}</td>\r\n				    <td style="vertical-align:middle">{{hotOrderList.name}}</td>\r\n					<td style="vertical-align:middle">\r\n							{{if hotOrderList.level==1}}三星以下\r\n								{{else if hotOrderList.level==2}}三星\r\n								{{else if hotOrderList.level==3}}准四星\r\n								{{else if hotOrderList.level=4}}四星\r\n								{{else if hotOrderList.level==5}}准五星\r\n								{{else if hotOrderList.level==6}}五星\r\n								{{else if hotOrderList.level==7}}五星以上\r\n							{{/if}}\r\n					</td>\r\n					<td>{{hotOrderList.type}}</td>\r\n					<td class="count F-float F-count">{{hotOrderList.count}}</td>\r\n					<td class="price F-float F-money">{{hotOrderList.price}}</td>\r\n					<td class="totalMoney F-float F-money">{{hotOrderList.price * hotOrderList.count}}</td>\r\n					<td style="vertical-align:middle">{{hotOrderList.creator}}</td>\r\n					<td>{{hotOrderList.createTime | dateFormat: \'yyyy-MM-dd hh:mm:ss\'}}</td>			    				    	    \r\n					<td style="vertical-align:middle" class="T-ctrl-tip">{{hotOrderList.remark}}</td>\r\n					<td>{{hotOrderList.status}}</td>\r\n				</tr>\r\n			{{/each}}\r\n			</tbody>\r\n	</table>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});