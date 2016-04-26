/*TMODJS:{"debug":true,"version":7,"md5":"7161642caf45571469919f023da7b64d"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeCenter/bookingView/scenceView", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, bookingOrder = $data.bookingOrder, required = $data.required, arrangeList = $data.arrangeList, $each = $utils.$each, status = ($data.rs, 
            $data.$index, $data.status), $out = "";
            return $out += '<div class="base-info" data-id="', $line = 1, $out += $escape(bookingOrder.id), 
            $out += '"> 代订单号：<span class="mar-r-20">', $line = 2, $out += $escape(bookingOrder.orderNumber), 
            $out += '</span> 客人信息： <span class="mar-r-20">', $line = 3, $out += $escape(bookingOrder.touristRealname), 
            $out += " ", $line = 3, $out += $escape(bookingOrder.adultCount), $out += "大", $line = 3, 
            $out += $escape(bookingOrder.childCount), $out += "小</span> 外联销售：", $line = 3, $out += $escape(bookingOrder.outOPUserName), 
            $out += ' </div> <div class=" ui-sortable-handle"> <h5 class=""> <label class="middle title-size">景区</label> </h5> <p class="panel hct-mh-required">现景区计划要求：', 
            $line = 9, $out += $escape(required), $out += '</p> <div class="widget-body"> <div class="widget-main no-padding"> <table class="table table-striped table-bordered table-hover margin-top" style="border: 1px solid #ccc"> <thead> <tr> <th class="th-border" width="110"><span class="necessary">*</span>日期</th> <th class="th-border" width="70">时段</th> <th class="th-border"><span class="necessary">*</span>景区</th> <th class="th-border"><span class="necessary">*</span>收费项目</th> <th class="th-border" width="60">时长</th> <th class="th-border" width="80">单价</th> <th class="th-border" width="80">数量</th> <th class="th-border" width="80">优惠</th> <th class="th-border">订单号</th> <th class="th-border" width="80">应付</th> <th class="th-border" width="80">预付款</th> <th class="th-border">备注</th> </tr> </thead> <tbody class="T-scenicList"> ', 
            $line = 30, arrangeList && arrangeList.length > 0 && ($out += " ", $line = 31, $each(arrangeList, function(rs) {
                $out += ' <tr data-id="', $line = 32, $out += $escape(rs.id), $out += '"> <td>', 
                $line = 33, $out += $escape($helpers.dateFormat(rs.startTime, "yyyy-MM-dd")), $out += "</td> <td>", 
                $line = 34, $out += $escape(rs.tourTime), $out += "</td> <td>", $line = 35, $out += $escape(rs.scenicName), 
                $out += "</td> <td>", $line = 36, $out += $escape(rs.scenicItemName), $out += "</td> <td>", 
                $line = 37, $out += $escape(rs.tourDuration), $out += '</td> <td class="F-float F-money">', 
                $line = 38, $out += $escape(rs.costPrice), $out += '</td> <td class="F-float F-count">', 
                $line = 39, $out += $escape(rs.roomCount), $out += '</td> <td class="F-float F-money">', 
                $line = 40, $out += $escape(rs.reduceMoney), $out += "</td> <td>", $line = 41, $out += $escape(rs.orderNumber), 
                $out += '</td> <td class="F-float F-money">', $line = 42, $out += $escape(rs.sumCostMoney), 
                $out += '</td> <td class="F-float F-money">', $line = 43, $out += $escape(rs.prePayMoney), 
                $out += "</td> <td>", $line = 44, $out += $escape(rs.remark), $out += "</td> </tr> ", 
                $line = 46;
            }), $out += " ", $line = 47), $out += ' </tbody> </table> </div> </div> </div> <div class="text-center mar-t-20"> <span class="checkbox checkbox-inline mar-0" data-target="#booking_receive_scence"> <button class="btn btn-xs btn-default T-btn-close btn-primary w100 mar-r-20"> <i class="ace-icon fa fa-times"></i> 关闭 </button> <label> <input name="status" type="checkbox" class="ace T-finishedArrange" disabled ', 
            $line = 58, 1 == status && ($out += "checked", $line = 58), $out += '> <span class="lbl font-w"> 景区安排完成</span> </label> </span> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="base-info" data-id="{{bookingOrder.id}}">\r\n    代订单号：<span class="mar-r-20">{{bookingOrder.orderNumber}}</span> 客人信息：\r\n    <span class="mar-r-20">{{bookingOrder.touristRealname}} {{bookingOrder.adultCount}}大{{bookingOrder.childCount}}小</span> 外联销售：{{bookingOrder.outOPUserName}}\r\n</div>\r\n<div class=" ui-sortable-handle">\r\n    <h5 class="">\r\n        <label class="middle title-size">景区</label>\r\n    </h5>\r\n    <p class="panel hct-mh-required">现景区计划要求：{{required}}</p>\r\n    <div class="widget-body">\r\n        <div class="widget-main no-padding">\r\n            <table class="table table-striped table-bordered table-hover margin-top" style="border: 1px solid #ccc">\r\n                <thead>\r\n                    <tr>\r\n                        <th class="th-border" width="110"><span class="necessary">*</span>日期</th>\r\n                        <th class="th-border" width="70">时段</th>\r\n                        <th class="th-border"><span class="necessary">*</span>景区</th>\r\n                        <th class="th-border"><span class="necessary">*</span>收费项目</th>\r\n                        <th class="th-border" width="60">时长</th>\r\n                        <th class="th-border" width="80">单价</th>\r\n                        <th class="th-border" width="80">数量</th>\r\n                        <th class="th-border" width="80">优惠</th>\r\n                        <th class="th-border">订单号</th>\r\n                        <th class="th-border" width="80">应付</th>\r\n                        <th class="th-border" width="80">预付款</th>\r\n                        <th class="th-border">备注</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody class="T-scenicList">\r\n                {{if !!arrangeList && arrangeList.length > 0}}\r\n                {{each arrangeList as rs}}\r\n                    <tr data-id="{{rs.id}}">\r\n                        <td>{{rs.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n                        <td>{{rs.tourTime}}</td>\r\n                        <td>{{rs.scenicName}}</td>\r\n                        <td>{{rs.scenicItemName}}</td>\r\n                        <td>{{rs.tourDuration}}</td>\r\n                        <td class="F-float F-money">{{rs.costPrice}}</td>\r\n                        <td class="F-float F-count">{{rs.roomCount}}</td>\r\n                        <td class="F-float F-money">{{rs.reduceMoney}}</td>\r\n                        <td>{{rs.orderNumber}}</td>\r\n                        <td class="F-float F-money">{{rs.sumCostMoney}}</td>\r\n                        <td class="F-float F-money">{{rs.prePayMoney}}</td>\r\n                        <td>{{rs.remark}}</td>\r\n                    </tr>\r\n                {{/each}}\r\n                {{/if}}\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class="text-center mar-t-20">\r\n    <span class="checkbox checkbox-inline mar-0" data-target="#booking_receive_scence">\r\n        <button class="btn btn-xs btn-default T-btn-close btn-primary w100 mar-r-20"> <i class="ace-icon fa fa-times"></i> 关闭 </button>\r\n        <label>\r\n            <input name="status" type="checkbox" class="ace T-finishedArrange" disabled {{if status == 1}}checked{{/if}}>\r\n            <span class="lbl font-w"> 景区安排完成</span>\r\n        </label>\r\n    </span>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});