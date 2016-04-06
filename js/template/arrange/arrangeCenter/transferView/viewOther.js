/*TMODJS:{"debug":true,"version":12,"md5":"8065bea868dacd5ba9d3e40d09540bc2"}*/
define(function(require) {
    return require("/js/template/template")("arrange/arrangeCenter/transferView/viewOther", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, outRemark = $data.outRemark, restaurantStatus = $data.restaurantStatus, ticketStatus = $data.ticketStatus, otherStatus = $data.otherStatus, $each = $utils.$each, outRestaurantList = $data.outRestaurantList, outTicketList = ($data.outRestaurant, 
            $data.$index, $data.outTicketList), outOtherList = ($data.outTicket, $data.outOtherList), $out = ($data.outOther, 
            "");
            return $out += '<div class="form-group"> <input type="hidden" name="outRemarkId" value="', 
            $line = 2, $out += $escape(outRemark.outRemarkId), $out += '"> <label class="control-label mar-r-20">中转单号：', 
            $line = 3, $out += $escape(outRemark.orderNumber), $out += '</label> <label class="control-label mar-r-20">线路产品：', 
            $line = 4, $out += $escape(outRemark.lineProductName), $out += '</label> <label class="control-label mar-r-20">用车时间：', 
            $line = 5, $out += $escape(outRemark.arriveTime), $out += '</label> <label class="control-label mar-r-20">客人信息：<span class="F-float F-count">', 
            $line = 6, $out += $escape(outRemark.adultCount), $out += '</span>大<span class="F-float F-count">', 
            $line = 6, $out += $escape(outRemark.childCount), $out += '</span></label> <label class="control-label ">外联销售：<span class="F-float F-money">', 
            $line = 7, $out += $escape(outRemark.outOPUserName), $out += "</span></label> </div> ", 
            $line = 9, restaurantStatus && ($out += ' <p class="requirementsPlan">现餐厅要求：', $line = 10, 
            $out += $escape(outRemark.restaurantRequire), $out += "</p> ", $line = 11), $out += " ", 
            $line = 12, ticketStatus && ($out += ' <p class="requirementsPlan">现票务要求：', $line = 13, 
            $out += $escape(outRemark.ticketRequire), $out += "</p> ", $line = 14), $out += " ", 
            $line = 15, otherStatus && ($out += ' <p class="requirementsPlan">现其它要求：', $line = 16, 
            $out += $escape(outRemark.otherRequire), $out += "</p> ", $line = 17), $out += " ", 
            $line = 19, restaurantStatus && ($out += ' <div class="form-group restaurantList"> <h5 class="title-size"> <i class="ace-icon fa fa-cutlery"></i> <label class="middle title-size ">安排餐饮</label> </h5> <table class="table table-striped table-bordered table-hover restaurantListTable margin-top"> <thead> <tr> <th class="th-border">日期</th> <th class="th-border">餐厅</th> <th class="th-border">联系人</th> <th class="th-border">联系电话</th> <th class="th-border">类型</th> <th class="th-border">餐标<span style="font-size:12px;">(元/人)</span></th> <th class="th-border">人数</th> <th class="th-border">优惠</th> <th class="th-border">应付款</th> <th class="th-border">预付款</th> <th class="th-border">备注</th> </tr> </thead> <tbody>', 
            $line = 41, $each(outRestaurantList, function(outRestaurant) {
                $out += " ", $line = 41, null != outRestaurant.id && ($out += ' <tr data-entity-id="', 
                $line = 42, $out += $escape(outRestaurant.id), $out += '"> <td>', $line = 43, $out += $escape($helpers.dateFormat(outRestaurant.startTime, "yyyy-MM-dd")), 
                $out += "</td> <td>", $line = 44, $out += $escape(outRestaurant.restaurantName), 
                $out += "</td> <td>", $line = 45, $out += $escape(outRestaurant.restaurantManagerName), 
                $out += "</td> <td>", $line = 46, $out += $escape(outRestaurant.restaurantMobileNumber), 
                $out += "</td> <td>", $line = 47, "早餐" == outRestaurant.standardType ? ($out += "早餐", 
                $line = 47) : "午餐" == outRestaurant.standardType ? ($out += "午餐", $line = 47) : ($out += "晚餐", 
                $line = 47), $out += '</td> <td><span class=" F-float F-money">', $line = 48, $out += $escape(outRestaurant.price), 
                $out += '</span></td> <td><span class=" F-float F-count">', $line = 49, $out += $escape(outRestaurant.memberCount), 
                $out += '</span></td> <td><span class=" F-float F-money">', $line = 50, $out += $escape(outRestaurant.reduceMoney), 
                $out += '</span></td> <td><span class=" F-float F-money">', $line = 51, $out += $escape(outRestaurant.needPayMoney), 
                $out += '</span></td> <td><span class=" F-float F-money">', $line = 52, $out += $escape(outRestaurant.prePayMoney), 
                $out += "</span></td> <td>", $line = 53, $out += $escape(outRestaurant.remark), 
                $out += "</td> </tr>", $line = 54), $line = 54;
            }), $out += " </tbody> </table> </div> ", $line = 58), $out += " ", $line = 58, 
            ticketStatus && ($out += ' <div class="form-group ticketList"> <h5 class="title-size"> <i class="ace-icon fa fa-car"></i> <label class="middle title-size">安排票务</label> </h5> <table class="table table-striped table-bordered table-hover ticketListTable margin-top"> <thead> <tr> <th class="th-border">票务公司</th> <th class="th-border">类型</th> <th class="th-border">出发城市</th> <th class="th-border">到达城市</th> <th class="th-border">日期</th> <th class="th-border">班次</th> <th class="th-border">座位级别</th> <th class="th-border">单价</th> <th class="th-border">数量</th> <th class="th-border">优惠</th> <th class="th-border">应付款</th> <th class="th-border">预付款</th> <th class="th-border" width="100px">备注</th> </tr> </thead> <tbody>', 
            $line = 82, $each(outTicketList, function(outTicket) {
                $out += " ", $line = 82, null != outTicket.id && ($out += " <tr> <td>", $line = 84, 
                $out += $escape(outTicket.ticketName), $out += "</td> <td>", $line = 85, 1 == outTicket.type ? ($out += " 机票 ", 
                $line = 85) : 2 == outTicket.type ? ($out += " 汽车票 ", $line = 85) : 3 == outTicket.type && ($out += " 火车票 ", 
                $line = 85), $out += " </td> <td>", $line = 87, $out += $escape(outTicket.startingCity), 
                $out += "</td> <td>", $line = 88, $out += $escape(outTicket.arriveCity), $out += "</td> <td>", 
                $line = 89, null != outTicket.startTime && ($line = 89, $out += $escape(outTicket.startTime), 
                $line = 89), $out += "</td> <td>", $line = 90, $out += $escape(outTicket.shift), 
                $out += "</td> <td>", $line = 91, $out += $escape(outTicket.seatLevel), $out += '</td> <td><span class=" F-float F-money">', 
                $line = 92, $out += $escape(outTicket.price), $out += '</span></td> <td><span class=" F-float F-count">', 
                $line = 93, $out += $escape(outTicket.memberCount), $out += '</span></td> <td><span class=" F-float F-money">', 
                $line = 94, $out += $escape(outTicket.reduceMoney), $out += '</span></td> <td><span class=" F-float F-money">', 
                $line = 95, $out += $escape(outTicket.needPayMoney), $out += '</span></td> <td><span class=" F-float F-money">', 
                $line = 96, $out += $escape(outTicket.prePayMoney), $out += "</span></td> <td>", 
                $line = 97, $out += $escape(outTicket.remark), $out += "</td> </tr>", $line = 98), 
                $line = 98;
            }), $out += " </tbody> </table> </div> ", $line = 102), $out += " ", $line = 102, 
            otherStatus && ($out += ' <div class="form-group otherList"> <h5 class="title-size"> <i class="ace-icon fa fa fa-smile-o"></i> <label class="middle title-size">安排其它</label> </h5> <table class="table table-striped table-bordered table-hover otherListTable margin-top"> <thead> <tr> <th class="th-border">日期</th> <th class="th-border">项目</th> <th class="th-border">联系人</th> <th class="th-border">联系电话</th> <th class="th-border">单价</th> <th class="th-border">数量</th> <th class="th-border">优惠</th> <th class="th-border">应付款</th> <th class="th-border">预付款</th> <th class="th-border" style="width: 100px">备注</th> </tr> </thead> <tbody>', 
            $line = 123, $each(outOtherList, function(outOther) {
                $out += " ", $line = 123, null != outOther && null != outOther.name && ($out += ' <tr data-entity-id="', 
                $line = 124, $out += $escape(outOther.id), $out += '"> <td>', $line = 125, $out += $escape($helpers.dateFormat(outOther.startTime, "yyyy-MM-dd")), 
                $out += "</td> <td>", $line = 126, $out += $escape(outOther.name), $out += "</td> <td>", 
                $line = 127, $out += $escape(outOther.managerName), $out += "</td> <td>", $line = 128, 
                $out += $escape(outOther.mobileNumber), $out += '</td> <td><span class=" F-float F-money">', 
                $line = 129, $out += $escape(outOther.price), $out += '</span></td> <td><span class=" F-float F-count">', 
                $line = 130, $out += $escape(outOther.memberCount), $out += '</span></td> <td><span class=" F-float F-money">', 
                $line = 131, $out += $escape(outOther.reduceMoney), $out += '</span></td> <td><span class=" F-float F-money">', 
                $line = 132, $out += $escape(outOther.needPayMoney), $out += '</span></td> <td><span class=" F-float F-money">', 
                $line = 133, $out += $escape(outOther.prePayMoney), $out += "</span></td> <td>", 
                $line = 134, $out += $escape(outOther.remark), $out += "</td> </tr>", $line = 135), 
                $line = 135;
            }), $out += " </tbody> </table> </div> ", $line = 139), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="form-group">\r\n    <input type="hidden" name="outRemarkId" value="{{outRemark.outRemarkId}}">\r\n    <label class="control-label mar-r-20">中转单号：{{outRemark.orderNumber}}</label>\r\n    <label class="control-label mar-r-20">线路产品：{{outRemark.lineProductName}}</label>\r\n    <label class="control-label mar-r-20">用车时间：{{outRemark.arriveTime}}</label>\r\n    <label class="control-label mar-r-20">客人信息：<span class="F-float F-count">{{outRemark.adultCount}}</span>大<span class="F-float F-count">{{outRemark.childCount}}</span></label>\r\n    <label class="control-label ">外联销售：<span class="F-float F-money">{{outRemark.outOPUserName}}</span></label>\r\n</div>\r\n{{if !!restaurantStatus}}\r\n<p class="requirementsPlan">现餐厅要求：{{outRemark.restaurantRequire}}</p>\r\n{{/if}} \r\n{{if !!ticketStatus}}\r\n<p class="requirementsPlan">现票务要求：{{outRemark.ticketRequire}}</p>\r\n{{/if}} \r\n{{if !!otherStatus}}\r\n<p class="requirementsPlan">现其它要求：{{outRemark.otherRequire}}</p>\r\n{{/if}} \r\n\r\n{{if !!restaurantStatus}}\r\n<div class="form-group restaurantList">\r\n    <h5 class="title-size">\r\n        <i class="ace-icon fa fa-cutlery"></i>\r\n        <label class="middle title-size ">安排餐饮</label>\r\n    </h5>\r\n	<table class="table table-striped table-bordered table-hover restaurantListTable margin-top">\r\n	    <thead>\r\n	        <tr>\r\n	            <th class="th-border">日期</th>\r\n	            <th class="th-border">餐厅</th>\r\n	            <th class="th-border">联系人</th>\r\n	            <th class="th-border">联系电话</th>\r\n	            <th class="th-border">类型</th>\r\n	            <th class="th-border">餐标<span style="font-size:12px;">(元/人)</span></th>\r\n	            <th class="th-border">人数</th>\r\n	            <th class="th-border">优惠</th>\r\n	            <th class="th-border">应付款</th>\r\n	            <th class="th-border">预付款</th>\r\n	            <th class="th-border">备注</th>\r\n	        </tr>\r\n	    </thead>\r\n	    <tbody>{{each outRestaurantList as outRestaurant}} {{if outRestaurant.id != null}}\r\n	        <tr data-entity-id="{{outRestaurant.id}}">\r\n	            <td>{{outRestaurant.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n	            <td>{{outRestaurant.restaurantName}}</td>\r\n	            <td>{{outRestaurant.restaurantManagerName}}</td>\r\n	            <td>{{outRestaurant.restaurantMobileNumber}}</td>\r\n	            <td>{{if outRestaurant.standardType == "早餐"}}早餐{{else if outRestaurant.standardType == "午餐"}}午餐{{else}}晚餐{{/if}}</td>\r\n	            <td><span class=" F-float F-money">{{outRestaurant.price}}</span></td>\r\n	            <td><span class=" F-float F-count">{{outRestaurant.memberCount}}</span></td>\r\n	            <td><span class=" F-float F-money">{{outRestaurant.reduceMoney}}</span></td>\r\n	            <td><span class=" F-float F-money">{{outRestaurant.needPayMoney}}</span></td>\r\n	            <td><span class=" F-float F-money">{{outRestaurant.prePayMoney}}</span></td>\r\n	            <td>{{outRestaurant.remark}}</td>\r\n	        </tr>{{/if}}{{/each}}\r\n	    </tbody>\r\n	</table>\r\n</div>\r\n{{/if}} {{if !!ticketStatus}}\r\n<div class="form-group ticketList">\r\n    <h5 class="title-size">\r\n	    <i class="ace-icon fa fa-car"></i>\r\n	    <label class="middle title-size">安排票务</label>\r\n	</h5>\r\n    <table class="table table-striped table-bordered table-hover ticketListTable margin-top">\r\n        <thead>\r\n            <tr>\r\n                <th class="th-border">票务公司</th>\r\n                <th class="th-border">类型</th>\r\n                <th class="th-border">出发城市</th>\r\n                <th class="th-border">到达城市</th>\r\n                <th class="th-border">日期</th>\r\n                <th class="th-border">班次</th>\r\n                <th class="th-border">座位级别</th>\r\n                <th class="th-border">单价</th>\r\n                <th class="th-border">数量</th>\r\n                <th class="th-border">优惠</th>\r\n                <th class="th-border">应付款</th>\r\n                <th class="th-border">预付款</th>\r\n                <th class="th-border" width="100px">备注</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>{{each outTicketList as outTicket}} {{if outTicket.id != null}}\r\n            <tr>\r\n                <td>{{outTicket.ticketName}}</td>\r\n                <td>{{if outTicket.type == 1}} 机票 {{else if outTicket.type == 2}} 汽车票 {{else if outTicket.type == 3}} 火车票 {{/if}}\r\n                </td>\r\n                <td>{{outTicket.startingCity}}</td>\r\n                <td>{{outTicket.arriveCity}}</td>\r\n                <td>{{if outTicket.startTime != null}}{{outTicket.startTime}}{{/if}}</td>\r\n                <td>{{outTicket.shift}}</td>\r\n                <td>{{outTicket.seatLevel}}</td>\r\n                <td><span class=" F-float F-money">{{outTicket.price}}</span></td>\r\n                <td><span class=" F-float F-count">{{outTicket.memberCount}}</span></td>\r\n                <td><span class=" F-float F-money">{{outTicket.reduceMoney}}</span></td>\r\n                <td><span class=" F-float F-money">{{outTicket.needPayMoney}}</span></td>\r\n                <td><span class=" F-float F-money">{{outTicket.prePayMoney}}</span></td>\r\n                <td>{{outTicket.remark}}</td>\r\n            </tr>{{/if}}{{/each}}\r\n        </tbody>\r\n    </table>\r\n</div>\r\n{{/if}} {{if !!otherStatus}}\r\n<div class="form-group otherList">\r\n    <h5 class="title-size">\r\n        <i class="ace-icon fa fa fa-smile-o"></i>\r\n        <label class="middle title-size">安排其它</label>\r\n    </h5>\r\n    <table class="table table-striped table-bordered table-hover otherListTable margin-top">\r\n        <thead>\r\n            <tr>\r\n                <th class="th-border">日期</th>\r\n                <th class="th-border">项目</th>\r\n                <th class="th-border">联系人</th>\r\n                <th class="th-border">联系电话</th>\r\n                <th class="th-border">单价</th>\r\n                <th class="th-border">数量</th>\r\n                <th class="th-border">优惠</th>\r\n                <th class="th-border">应付款</th>\r\n                <th class="th-border">预付款</th>\r\n                <th class="th-border" style="width: 100px">备注</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>{{each outOtherList as outOther}} {{if outOther != null && outOther.name != null}}\r\n            <tr data-entity-id="{{outOther.id}}">\r\n                <td>{{outOther.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n                <td>{{outOther.name}}</td>\r\n                <td>{{outOther.managerName}}</td>\r\n                <td>{{outOther.mobileNumber}}</td>\r\n                <td><span class=" F-float F-money">{{outOther.price}}</span></td>\r\n                <td><span class=" F-float F-count">{{outOther.memberCount}}</span></td>\r\n                <td><span class=" F-float F-money">{{outOther.reduceMoney}}</span></td>\r\n                <td><span class=" F-float F-money">{{outOther.needPayMoney}}</span></td>\r\n                <td><span class=" F-float F-money">{{outOther.prePayMoney}}</span></td>\r\n                <td>{{outOther.remark}}</td>\r\n            </tr>{{/if}}{{/each}}\r\n        </tbody>\r\n    </table>\r\n</div>\r\n{{/if}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});