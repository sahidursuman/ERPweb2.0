/*TMODJS:{"debug":true,"version":13,"md5":"348a3a4d781c14be2685721c1b7fcffa"}*/
define(function(require) {
    return require("../../../template")("arrange/tripPlan/view/searchTeam", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, tourisGroupList = $data.tourisGroupList, $escape = ($data.rs, 
            $data.$index, $utils.$escape), recordSize = $data.recordSize, $out = "";
            return $out += '<table class="table table-striped table-bordered table-hover search-travelLineList-table"> <thead> <tr> <th class="th-border">客户来源</th> <th class="th-border">线路产品</th> <th class="th-border">针对客源</th> <th class="th-border">出游日期</th> <th class="th-border">报价单号</th> <th class="th-border">联系人</th> <th class="th-border">人数</th> <th class="th-border">买保险</th> <th class="th-border">组团单号</th> <th class="th-border">客源类型</th> <th class="th-border">接站牌</th> <th class="th-border">外联销售</th> <th class="th-border">录入时间</th> <th class="th-border" width="70">选择</th> </tr> </thead> <tbody class="T-quote-list"> ', 
            $line = 21, $each(tourisGroupList, function(rs) {
                $out += ' <tr data-id="', $line = 22, $out += $escape(rs.id), $out += '" data-orderNumber="', 
                $line = 22, $out += $escape(rs.orderNumber), $out += '"> <td name="partnerAgencyName">', 
                $line = 23, $out += $escape(rs.fromPartnerAgencyName), $out += "</td> <td>", $line = 24, 
                $out += $escape(rs.lineProductName), $out += "</td> <td>", $line = 25, 1 == rs.customerType ? ($out += "团体", 
                $line = 25) : ($out += "散客", $line = 25), $out += "</td> <td>", $line = 26, $out += $escape(rs.startTime), 
                $out += "</td> <td>", $line = 27, $out += $escape(rs.quoteNumber), $out += "</td> <td>", 
                $line = 28, $out += $escape(rs.contactMemberName), $out += "</td> <td>", $line = 29, 
                $out += $escape(rs.adultCount), $out += "大", $line = 29, 0 != rs.childCount && ($line = 29, 
                $out += $escape(rs.childCount), $out += "小", $line = 29), $out += "</td> <td>", 
                $line = 30, 1 == rs.buyInsurance ? ($out += "是", $line = 30) : ($out += "否", $line = 30), 
                $out += "</td> <td>", $line = 31, $out += $escape(rs.otaOrderNumber), $out += "</td> <td>", 
                $line = 32, 1 == rs.memberType ? ($out += "外宾", $line = 32) : ($out += "内宾", $line = 32), 
                $out += "</td> <td>", $line = 33, $out += $escape(rs.welcomeBoard), $out += "</td> <td>", 
                $line = 34, $out += $escape(rs.outOPUserName), $out += "</td> <td>", $line = 35, 
                $out += $escape(rs.createTime), $out += '</td> <td> <label class="T-team-radio"> <input type="radio" class="ace" name="team-radio"> <span class="lbl"> </span> </label> </td> </tr> ', 
                $line = 43;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-5"> <small>共计 ', 
            $line = 48, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-7"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"></div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<table class="table table-striped table-bordered table-hover search-travelLineList-table">\r\n	<thead>\r\n		<tr>\r\n			<th class="th-border">客户来源</th>\r\n			<th class="th-border">线路产品</th> \r\n			<th class="th-border">针对客源</th> \r\n			<th class="th-border">出游日期</th> \r\n			<th class="th-border">报价单号</th> \r\n			<th class="th-border">联系人</th> \r\n			<th class="th-border">人数</th> \r\n			<th class="th-border">买保险</th> \r\n			<th class="th-border">组团单号</th> \r\n			<th class="th-border">客源类型</th> \r\n			<th class="th-border">接站牌</th>\r\n			<th class="th-border">外联销售</th>\r\n			<th class="th-border">录入时间</th> \r\n			<th class="th-border" width="70">选择</th> \r\n		</tr> \r\n	</thead> \r\n	<tbody class="T-quote-list">\r\n		{{each tourisGroupList as rs}}\r\n		<tr data-id="{{rs.id}}" data-orderNumber="{{rs.orderNumber}}"> \r\n			<td name="partnerAgencyName">{{rs.fromPartnerAgencyName}}</td> \r\n			<td>{{rs.lineProductName}}</td> \r\n			<td>{{if rs.customerType == 1}}团体{{else}}散客{{/if}}</td> \r\n			<td>{{rs.startTime}}</td> \r\n			<td>{{rs.quoteNumber}}</td> \r\n			<td>{{rs.contactMemberName}}</td> \r\n			<td>{{rs.adultCount}}大{{if rs.childCount != 0}}{{rs.childCount}}小{{/if}}</td> \r\n			<td>{{if rs.buyInsurance == 1}}是{{else}}否{{/if}}</td> \r\n			<td>{{rs.otaOrderNumber}}</td> \r\n			<td>{{if rs.memberType == 1}}外宾{{else}}内宾{{/if}}</td> \r\n			<td>{{rs.welcomeBoard}}</td> \r\n			<td>{{rs.outOPUserName}}</td> \r\n			<td>{{rs.createTime}}</td> \r\n			<td> \r\n				<label class="T-team-radio"> \r\n					<input type="radio" class="ace" name="team-radio"> \r\n					<span class="lbl"> </span> \r\n				</label> \r\n			</td> \r\n		</tr>\r\n		{{/each}}\r\n	</tbody> \r\n</table>\r\n<div class="row pageMode">\r\n	<div class="col-xs-5">\r\n		<small>共计 {{recordSize}} 条记录</small>\r\n	</div>\r\n	<div class="col-xs-7">\r\n		<div class="dataTables_paginate paging_simple_numbers T-pagenation"></div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});