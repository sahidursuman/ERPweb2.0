/*TMODJS:{"debug":true,"version":3,"md5":"426de6dcb3f6bee43ec7359638133a60"}*/
define(function(require) {
    return require("/js/template/template")("arrange/arrangeCenter/transfer/viewBus", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, outRemarkList = $data.outRemarkList, $escape = ($data.viewlist, 
            $data.$index, $utils.$escape), outBusList = $data.outBusList, $out = ($data.view, 
            "");
            return $out += '<div class="T-planbus globalAdd "> ', $line = 2, $each(outRemarkList, function(viewlist) {
                $out += ' <div class="form-group"> <label class="control-label mar-r-20">中转单号：', 
                $line = 4, $out += $escape(viewlist.orderNumber), $out += '</label> <label class="control-label mar-r-20">人数：', 
                $line = 5, $out += $escape(viewlist.adultCount), $out += " 大 ", $line = 5, $out += $escape(viewlist.childCount), 
                $out += '小</label> <label class="control-label mar-r-20">抵达时间：', $line = 6, $out += $escape(viewlist.arriveTime), 
                $out += '</label> <label class="control-label mar-r-20">游客联系人：', $line = 7, $out += $escape(viewlist.contactMemberName), 
                $out += '</label> <label class="control-label mar-r-20">线路名称：', $line = 8, $out += $escape(viewlist.lineProductName), 
                $out += '</label> <label class="control-label">外联销售：', $line = 9, $out += $escape(viewlist.outOPUserName), 
                $out += '</label> </div> <div class="form-group"> <label class="control-label mar-r-20">客户名：', 
                $line = 12, $out += $escape(viewlist.partnerAgencyName), $out += ' </label> <label class="control-label mar-r-20">要求：', 
                $line = 13, $out += $escape(viewlist.require), $out += '</label> <label class="control-label mar-r-20">班次：', 
                $line = 14, $out += $escape(viewlist.shift), $out += '</label> <label class="control-label mar-r-20">类型：', 
                $line = 15, 1 == viewlist.shuttleType ? ($out += "接团", $line = 15) : 2 == viewlist.shuttleType && ($out += "送团 ", 
                $line = 15), $out += '</label> <label class="control-label mar-r-20">出游日期：', $line = 16, 
                $out += $escape(viewlist.startTime), $out += '</label> <label class="control-label">收客单号：', 
                $line = 17, $out += $escape(viewlist.tgOrderNumber), $out += "</label> </div> ", 
                $line = 19;
            }), $out += ' <table class="table table-striped table-bordered table-hover "> <thead> <tr> <th class="th-border"><span class="necessary">*</span>车队</th> <th class="th-border">车座数</th> <th class="th-border">车辆品牌</th> <th class="th-border">车牌</th> <th class="th-border">司机</th> <th class="th-border">司机电话</th> <th class="th-border"><span class="necessary">*</span>用车时间</th> <th class="th-border"><span class="necessary">*</span>上车地点</th> <th class="th-border">目的地</th> <th class="th-border">车费</th> <th class="th-border">优惠</th> <th class="th-border">应付款</th> <th class="th-border">预付款</th> <th class="th-border">备注</th> </tr> </thead> <tbody class="T-insuranceForm"> ', 
            $line = 40, $each(outBusList, function(view) {
                $out += " <tr> <td> ", $line = 43, $out += $escape(view.busCompanyName), $out += " </td> <td> ", 
                $line = 46, $out += $escape(view.seatCount), $out += " </td> <td> ", $line = 49, 
                $out += $escape(view.brand), $out += " </td> <td> ", $line = 52, $out += $escape(view.licenseNumber), 
                $out += " </td> <td>", $line = 54, $out += $escape(view.driverName), $out += "</td> <td> ", 
                $line = 56, $out += $escape(view.driverMobileNumber), $out += " </td> <td> ", $line = 59, 
                $out += $escape(view.useTime), $out += " </td> <td> ", $line = 62, $out += $escape(view.boardLocation), 
                $out += " </td> <td> ", $line = 65, $out += $escape(view.destination), $out += " </td> <td> ", 
                $line = 68, $out += $escape(view.fee), $out += " </td> <td> ", $line = 71, $out += $escape(view.reduceMoney), 
                $out += " </td> <td> ", $line = 74, $out += $escape(view.needPayMoney), $out += " </td> <td> ", 
                $line = 77, $out += $escape(view.prePayMoney), $out += " </td> <td> ", $line = 80, 
                $out += $escape(view.remark), $out += " </td> </tr> ", $line = 83;
            }), $out += " </tbody> </table> </div> ", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="T-planbus globalAdd ">\r\n{{each outRemarkList as viewlist}}\r\n    <div class="form-group"> \r\n        <label class="control-label mar-r-20">中转单号：{{viewlist.orderNumber}}</label>\r\n        <label class="control-label mar-r-20">人数：{{viewlist.adultCount}} 大 {{viewlist.childCount}}小</label>\r\n        <label class="control-label mar-r-20">抵达时间：{{viewlist.arriveTime}}</label> \r\n        <label class="control-label mar-r-20">游客联系人：{{viewlist.contactMemberName}}</label> \r\n        <label class="control-label mar-r-20">线路名称：{{viewlist.lineProductName}}</label>\r\n        <label class="control-label">外联销售：{{viewlist.outOPUserName}}</label> \r\n    </div>\r\n    <div class="form-group"> \r\n        <label class="control-label mar-r-20">客户名：{{viewlist.partnerAgencyName}} </label>\r\n        <label class="control-label mar-r-20">要求：{{viewlist.require}}</label> \r\n        <label class="control-label mar-r-20">班次：{{viewlist.shift}}</label> \r\n        <label class="control-label mar-r-20">类型：{{if viewlist.shuttleType == 1}}接团{{else if viewlist.shuttleType == 2}}送团 {{/if}}</label>\r\n        <label class="control-label mar-r-20">出游日期：{{viewlist.startTime}}</label>\r\n        <label class="control-label">收客单号：{{viewlist.tgOrderNumber}}</label> \r\n    </div>\r\n{{/each}}\r\n    <table class="table table-striped table-bordered table-hover ">\r\n        <thead>\r\n            <tr>\r\n                <th class="th-border"><span class="necessary">*</span>车队</th>\r\n                <th class="th-border">车座数</th>\r\n                <th class="th-border">车辆品牌</th>\r\n                <th class="th-border">车牌</th>\r\n                <th class="th-border">司机</th>\r\n                <th class="th-border">司机电话</th>\r\n                <th class="th-border"><span class="necessary">*</span>用车时间</th>\r\n                <th class="th-border"><span class="necessary">*</span>上车地点</th>\r\n                <th class="th-border">目的地</th>\r\n                <th class="th-border">车费</th>\r\n                <th class="th-border">优惠</th>\r\n                <th class="th-border">应付款</th>\r\n                <th class="th-border">预付款</th>\r\n                <th class="th-border">备注</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-insuranceForm">\r\n        {{each outBusList as view}}\r\n            <tr>\r\n                <td>\r\n                    {{view.busCompanyName}}\r\n                </td>\r\n                <td>\r\n                    {{view.seatCount}}\r\n                </td>\r\n                <td>\r\n                    {{view.brand}}\r\n                </td>\r\n                <td>\r\n                    {{view.licenseNumber}}\r\n                </td>\r\n                <td>{{view.driverName}}</td>\r\n                <td>\r\n                    {{view.driverMobileNumber}}\r\n                </td>\r\n                <td>\r\n                    {{view.useTime}}\r\n                </td>\r\n                <td>\r\n                    {{view.boardLocation}}\r\n                </td>\r\n                <td>\r\n                    {{view.destination}}\r\n                </td>\r\n                <td>\r\n                   {{view.fee}}\r\n                </td>\r\n                <td>\r\n                    {{view.reduceMoney}}\r\n                </td>\r\n                <td>\r\n                   {{view.needPayMoney}}\r\n                </td>\r\n                <td>\r\n                    {{view.prePayMoney}}\r\n                </td>\r\n                <td>\r\n                    {{view.remark}}\r\n                </td>\r\n            </tr>\r\n            {{/each}}\r\n        </tbody>\r\n    </table>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});