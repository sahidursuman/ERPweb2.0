/*TMODJS:{"debug":true,"version":18,"md5":"f5f90a56dcfafee285f8deaf097cc7b4"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeCenter/transferView/viewBus", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, outRemarkList = $data.outRemarkList, $escape = ($data.viewlist, 
            $data.$index, $utils.$escape), outBusList = ($data.itme, $data.outBusList), $out = ($data.view, 
            "");
            return $out += '<div class="T-planbus globalAdd "> <h5 class="base-title">基本信息</h5> ', 
            $line = 3, $each(outRemarkList, function(viewlist) {
                $out += ' <table class="table table-striped table-bordered mar-b-20"> <tbody class="T-task-list T-arrange"> <tr> <td style="text-align: left;"> <input type="hidden" name="outRemarkId" value="', 
                $line = 8, $out += $escape(viewlist.outRemarkId), $out += '"> <label class="control-label mar-r-20">中转单号：', 
                $line = 9, $out += $escape(viewlist.orderNumber), $out += '</label> <label class="control-label mar-r-20">人数：', 
                $line = 10, $out += $escape(viewlist.adultCount), $out += " 大 ", $line = 10, $out += $escape(viewlist.childCount), 
                $out += '小</label> <label class="control-label mar-r-20">游客小组联系人： ', $line = 12, 
                $each(viewlist.contactMemberList, function(itme) {
                    $out += " <span>", $line = 13, $out += $escape(itme.contactMemberName), $out += '</span> <span class="mar-r-10">(', 
                    $line = 14, $out += $escape(itme.contactMemberPhoneNumber), $out += ")</span> ", 
                    $line = 15;
                }), $out += ' </label> <label class="control-label mar-r-20">抵达时间：', $line = 17, 
                $out += $escape(viewlist.arriveTime), $out += '</label> <label class="control-label mar-r-20">线路名称：', 
                $line = 18, $out += $escape(viewlist.lineProductName), $out += '</label> <label class="control-label">外联销售：', 
                $line = 19, $out += $escape(viewlist.outOPUserName), $out += '</label> </td> </tr> <tr > <td style="text-align: left;"> <label class="control-label mar-r-20">客户名：', 
                $line = 24, $out += $escape(viewlist.partnerAgencyName), $out += ' </label> <label class="control-label mar-r-20">要求：', 
                $line = 25, $out += $escape(viewlist.require), $out += '</label> <label class="control-label mar-r-20">班次：', 
                $line = 26, $out += $escape(viewlist.shift), $out += '</label> <label class="control-label mar-r-20">类型：', 
                $line = 27, 1 == viewlist.shuttleType ? ($out += "接团", $line = 27) : 2 == viewlist.shuttleType && ($out += "送团 ", 
                $line = 27), $out += '</label> <label class="control-label mar-r-20">出游日期：', $line = 28, 
                $out += $escape(viewlist.startTime), $out += '</label> <label class="control-label">收客单号：', 
                $line = 29, $out += $escape(viewlist.tgOrderNumber), $out += "</label> </td> </tr> </tbody> </table> ", 
                $line = 34;
            }), $out += ' <h5 class="base-title"><i class="fa fa-bus" aria-hidden="true"></i> 车辆安排</h5> <table class="table table-striped table-bordered table-hover "> <thead> <tr> <th class="th-border"><span class="necessary">*</span>车队</th> <th class="th-border">车座数</th> <th class="th-border">车辆品牌</th> <th class="th-border">车牌</th> <th class="th-border">司机</th> <th class="th-border">司机电话</th> <th class="th-border"><span class="necessary">*</span>用车时间</th> <th class="th-border"><span class="necessary">*</span>上车地点</th> <th class="th-border">目的地</th> <th class="th-border">车费</th> <th class="th-border">优惠</th> <th class="th-border">应付款</th> <th class="th-border">预付款</th> <th class="th-border">计划代收</th> <th class="th-border">备注</th> </tr> </thead> <tbody class="T-bus-plan"> ', 
            $line = 57, $each(outBusList, function(view) {
                $out += ' <tr data-entity-id="', $line = 58, $out += $escape(view.outBusId), $out += '" > <td> ', 
                $line = 60, $out += $escape(view.busCompanyName), $out += " </td> <td> ", $line = 63, 
                $out += $escape(view.seatCount), $out += " </td> <td> ", $line = 66, $out += $escape(view.brand), 
                $out += " </td> <td> ", $line = 69, $out += $escape(view.licenseNumber), $out += " </td> <td>", 
                $line = 71, $out += $escape(view.driverName), $out += "</td> <td> ", $line = 73, 
                $out += $escape(view.driverMobileNumber), $out += " </td> <td> ", $line = 76, $out += $escape(view.useTime), 
                $out += " </td> <td> ", $line = 79, $out += $escape(view.boardLocation), $out += " </td> <td> ", 
                $line = 82, $out += $escape(view.destination), $out += " </td> <td> ", $line = 85, 
                $out += $escape(view.fee), $out += " </td> <td> ", $line = 88, $out += $escape(view.reduceMoney), 
                $out += " </td> <td> ", $line = 91, $out += $escape(view.needPayMoney), $out += " </td> <td> ", 
                $line = 94, $out += $escape(view.prePayMoney), $out += ' </td> <td> <a class="cursor T-collection" data-type="bus">', 
                $line = 97, $out += $escape(view.collection), $out += "</a> </td> <td> ", $line = 100, 
                $out += $escape(view.remark), $out += " </td> </tr> ", $line = 103;
            }), $out += " </tbody> </table> </div> ", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="T-planbus globalAdd ">\r\n<h5 class="base-title">基本信息</h5>\r\n{{each outRemarkList as viewlist}}\r\n    <table class="table table-striped table-bordered mar-b-20">\r\n        <tbody class="T-task-list T-arrange">\r\n            <tr>\r\n                <td style="text-align: left;">\r\n                    <input type="hidden" name="outRemarkId" value="{{viewlist.outRemarkId}}">\r\n                    <label class="control-label mar-r-20">中转单号：{{viewlist.orderNumber}}</label>\r\n                    <label class="control-label mar-r-20">人数：{{viewlist.adultCount}} 大 {{viewlist.childCount}}小</label>\r\n                    <label class="control-label mar-r-20">游客小组联系人：\r\n                    {{each viewlist.contactMemberList as itme}}\r\n                    <span>{{itme.contactMemberName}}</span>\r\n                    <span class="mar-r-10">({{itme.contactMemberPhoneNumber}})</span>\r\n                    {{/each}}\r\n                    </label>\r\n                    <label class="control-label mar-r-20">抵达时间：{{viewlist.arriveTime}}</label>\r\n                    <label class="control-label mar-r-20">线路名称：{{viewlist.lineProductName}}</label>\r\n                    <label class="control-label">外联销售：{{viewlist.outOPUserName}}</label>\r\n                </td>\r\n            </tr>\r\n            <tr >\r\n                <td style="text-align: left;">\r\n                    <label class="control-label mar-r-20">客户名：{{viewlist.partnerAgencyName}} </label>\r\n                    <label class="control-label mar-r-20">要求：{{viewlist.require}}</label>\r\n                    <label class="control-label mar-r-20">班次：{{viewlist.shift}}</label>\r\n                    <label class="control-label mar-r-20">类型：{{if viewlist.shuttleType == 1}}接团{{else if viewlist.shuttleType == 2}}送团 {{/if}}</label>\r\n                    <label class="control-label mar-r-20">出游日期：{{viewlist.startTime}}</label>\r\n                    <label class="control-label">收客单号：{{viewlist.tgOrderNumber}}</label>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n{{/each}}\r\n<h5 class="base-title"><i class="fa fa-bus" aria-hidden="true"></i> 车辆安排</h5>\r\n    <table class="table table-striped table-bordered table-hover ">\r\n        <thead>\r\n            <tr>\r\n                <th class="th-border"><span class="necessary">*</span>车队</th>\r\n                <th class="th-border">车座数</th>\r\n                <th class="th-border">车辆品牌</th>\r\n                <th class="th-border">车牌</th>\r\n                <th class="th-border">司机</th>\r\n                <th class="th-border">司机电话</th>\r\n                <th class="th-border"><span class="necessary">*</span>用车时间</th>\r\n                <th class="th-border"><span class="necessary">*</span>上车地点</th>\r\n                <th class="th-border">目的地</th>\r\n                <th class="th-border">车费</th>\r\n                <th class="th-border">优惠</th>\r\n                <th class="th-border">应付款</th>\r\n                <th class="th-border">预付款</th>\r\n                <th class="th-border">计划代收</th>\r\n                <th class="th-border">备注</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-bus-plan">\r\n            {{each outBusList as view}}\r\n            <tr data-entity-id="{{view.outBusId}}" >\r\n                <td>\r\n                    {{view.busCompanyName}}\r\n                </td>\r\n                <td>\r\n                    {{view.seatCount}}\r\n                </td>\r\n                <td>\r\n                    {{view.brand}}\r\n                </td>\r\n                <td>\r\n                    {{view.licenseNumber}}\r\n                </td>\r\n                <td>{{view.driverName}}</td>\r\n                <td>\r\n                    {{view.driverMobileNumber}}\r\n                </td>\r\n                <td>\r\n                    {{view.useTime}}\r\n                </td>\r\n                <td>\r\n                    {{view.boardLocation}}\r\n                </td>\r\n                <td>\r\n                    {{view.destination}}\r\n                </td>\r\n                <td>\r\n                    {{view.fee}}\r\n                </td>\r\n                <td>\r\n                    {{view.reduceMoney}}\r\n                </td>\r\n                <td>\r\n                    {{view.needPayMoney}}\r\n                </td>\r\n                <td>\r\n                    {{view.prePayMoney}}\r\n                </td>\r\n                <td>\r\n                    <a class="cursor T-collection" data-type="bus">{{view.collection}}</a>\r\n                </td>\r\n                <td>\r\n                    {{view.remark}}\r\n                </td>\r\n            </tr>\r\n            {{/each}}\r\n        </tbody>\r\n    </table>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});