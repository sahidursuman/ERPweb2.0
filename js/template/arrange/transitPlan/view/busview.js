/*TMODJS:{"debug":true,"version":114,"md5":"f47d94de57891356eca27e9c53be898b"}*/
define(function(require) {
    return require("../../../template")("arrange/transitPlan/view/busview", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, outRemark = $data.outRemark, $each = $utils.$each, outBusList = $data.outBusList, $out = ($data.view, 
            $data.$index, "");
            return $out += '<div class="T-planbus globalAdd "> <div class="form-group"> <label class="control-label mar-r-20">中转单号：', 
            $line = 3, $out += $escape(outRemark.orderNumber), $out += '</label> <label class="control-label mar-r-20">人数：', 
            $line = 4, $out += $escape(outRemark.adultCount), $out += " 大 ", $line = 4, $out += $escape(outRemark.childCount), 
            $out += '小</label> <label class="control-label mar-r-20">抵达时间：', $line = 5, $out += $escape(outRemark.arriveTime), 
            $out += '</label> <label class="control-label mar-r-20">游客联系人：', $line = 6, $out += $escape(outRemark.contactMemberName), 
            $out += '</label> <label class="control-label mar-r-20">线路名称：', $line = 7, $out += $escape(outRemark.lineProductName), 
            $out += '</label> <label class="control-label">外联销售：', $line = 8, $out += $escape(outRemark.outOPUserName), 
            $out += '</label> </div> <div class="form-group"> <label class="control-label mar-r-20">客户名：', 
            $line = 11, $out += $escape(outRemark.partnerAgencyName), $out += ' </label> <label class="control-label mar-r-20">要求：', 
            $line = 12, $out += $escape(outRemark.require), $out += '</label> <label class="control-label mar-r-20">班次：', 
            $line = 13, $out += $escape(outRemark.shift), $out += '</label> <label class="control-label mar-r-20">类型：', 
            $line = 14, 1 == outRemark.shuttleType ? ($out += "接团", $line = 14) : 2 == outRemark.shuttleType && ($out += "送团 ", 
            $line = 14), $out += '</label> <label class="control-label mar-r-20">出游日期：', $line = 15, 
            $out += $escape(outRemark.startTime), $out += '</label> <label class="control-label">收客单号：', 
            $line = 16, $out += $escape(outRemark.tgOrderNumber), $out += '</label> </div> <table class="table table-striped table-bordered table-hover "> <thead> <tr> <th class="th-border"><span class="necessary">*</span>车队</th> <th class="th-border">车座数</th> <th class="th-border">车辆品牌</th> <th class="th-border">车牌</th> <th class="th-border">司机</th> <th class="th-border">司机电话</th> <th class="th-border"><span class="necessary">*</span>用车时间</th> <th class="th-border"><span class="necessary">*</span>上车地点</th> <th class="th-border">目的地</th> <th class="th-border">车费</th> <th class="th-border">优惠</th> <th class="th-border">应付款</th> <th class="th-border">预付款</th> <th class="th-border">备注</th> </tr> </thead> <tbody class="T-insuranceForm"> ', 
            $line = 38, $each(outBusList, function(view) {
                $out += " <tr> <td> ", $line = 41, $out += $escape(view.busCompanyName), $out += " </td> <td> ", 
                $line = 44, $out += $escape(view.seatCount), $out += " </td> <td> ", $line = 47, 
                $out += $escape(view.brand), $out += " </td> <td> ", $line = 50, $out += $escape(view.licenseNumber), 
                $out += " </td> <td>", $line = 52, $out += $escape(view.driverName), $out += "</td> <td> ", 
                $line = 54, $out += $escape(view.driverMobileNumber), $out += " </td> <td> ", $line = 57, 
                $out += $escape(view.useTime), $out += " </td> <td> ", $line = 60, $out += $escape(view.boardLocation), 
                $out += " </td> <td> ", $line = 63, $out += $escape(view.destination), $out += " </td> <td> ", 
                $line = 66, $out += $escape(view.fee), $out += " </td> <td> ", $line = 69, $out += $escape(view.reduceMoney), 
                $out += " </td> <td> ", $line = 72, $out += $escape(view.needPayMoney), $out += " </td> <td> ", 
                $line = 75, $out += $escape(view.prePayMoney), $out += " </td> <td> ", $line = 78, 
                $out += $escape(view.remark), $out += " </td> </tr> ", $line = 81;
            }), $out += " </tbody> </table> </div> ", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="T-planbus globalAdd ">\r\n    <div class="form-group"> \r\n        <label class="control-label mar-r-20">中转单号：{{outRemark.orderNumber}}</label>\r\n        <label class="control-label mar-r-20">人数：{{outRemark.adultCount}} 大 {{outRemark.childCount}}小</label>\r\n        <label class="control-label mar-r-20">抵达时间：{{outRemark.arriveTime}}</label> \r\n        <label class="control-label mar-r-20">游客联系人：{{outRemark.contactMemberName}}</label> \r\n        <label class="control-label mar-r-20">线路名称：{{outRemark.lineProductName}}</label>\r\n        <label class="control-label">外联销售：{{outRemark.outOPUserName}}</label> \r\n    </div>\r\n    <div class="form-group"> \r\n        <label class="control-label mar-r-20">客户名：{{outRemark.partnerAgencyName}} </label>\r\n        <label class="control-label mar-r-20">要求：{{outRemark.require}}</label> \r\n        <label class="control-label mar-r-20">班次：{{outRemark.shift}}</label> \r\n        <label class="control-label mar-r-20">类型：{{if outRemark.shuttleType == 1}}接团{{else if outRemark.shuttleType == 2}}送团 {{/if}}</label>\r\n        <label class="control-label mar-r-20">出游日期：{{outRemark.startTime}}</label>\r\n        <label class="control-label">收客单号：{{outRemark.tgOrderNumber}}</label> \r\n    </div>\r\n    <table class="table table-striped table-bordered table-hover ">\r\n        <thead>\r\n            <tr>\r\n                <th class="th-border"><span class="necessary">*</span>车队</th>\r\n                <th class="th-border">车座数</th>\r\n                <th class="th-border">车辆品牌</th>\r\n                <th class="th-border">车牌</th>\r\n                <th class="th-border">司机</th>\r\n                <th class="th-border">司机电话</th>\r\n                <th class="th-border"><span class="necessary">*</span>用车时间</th>\r\n                <th class="th-border"><span class="necessary">*</span>上车地点</th>\r\n                <th class="th-border">目的地</th>\r\n                <th class="th-border">车费</th>\r\n                <th class="th-border">优惠</th>\r\n                <th class="th-border">应付款</th>\r\n                <th class="th-border">预付款</th>\r\n                <th class="th-border">备注</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-insuranceForm">\r\n        {{each outBusList as view}}\r\n            <tr>\r\n                <td>\r\n                    {{view.busCompanyName}}\r\n                </td>\r\n                <td>\r\n                    {{view.seatCount}}\r\n                </td>\r\n                <td>\r\n                    {{view.brand}}\r\n                </td>\r\n                <td>\r\n                    {{view.licenseNumber}}\r\n                </td>\r\n                <td>{{view.driverName}}</td>\r\n                <td>\r\n                    {{view.driverMobileNumber}}\r\n                </td>\r\n                <td>\r\n                    {{view.useTime}}\r\n                </td>\r\n                <td>\r\n                    {{view.boardLocation}}\r\n                </td>\r\n                <td>\r\n                    {{view.destination}}\r\n                </td>\r\n                <td>\r\n                   {{view.fee}}\r\n                </td>\r\n                <td>\r\n                    {{view.reduceMoney}}\r\n                </td>\r\n                <td>\r\n                   {{view.needPayMoney}}\r\n                </td>\r\n                <td>\r\n                    {{view.prePayMoney}}\r\n                </td>\r\n                <td>\r\n                    {{view.remark}}\r\n                </td>\r\n            </tr>\r\n            {{/each}}\r\n        </tbody>\r\n    </table>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});