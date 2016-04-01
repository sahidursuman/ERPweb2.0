/*TMODJS:{"debug":true,"version":44,"md5":"b607b5aec917a99f95b21b4896076189"}*/
define(function(require) {
    return require("/js/template/template")("arrange/arrangeCenter/transfer/busArrange", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, outRemarkList = $data.outRemarkList, $escape = ($data.Busplan, 
            $data.$index, $utils.$escape), shuttleType = $data.shuttleType, outBusList = $data.outBusList, status = ($data.outBus, 
            $data.status), $out = "";
            return $out += '<div class="T-planbus globalAdd "> ', $line = 2, $each(outRemarkList, function(Busplan) {
                $out += ' <div class="form-group"> <input type="hidden" name="outRemarkId" value="', 
                $line = 4, $out += $escape(Busplan.outRemarkId), $out += '"> <label class="control-label mar-r-20">中转单号：', 
                $line = 5, $out += $escape(Busplan.orderNumber), $out += '</label> <label class="control-label mar-r-20">线路产品：', 
                $line = 6, $out += $escape(Busplan.lineProductName), $out += '</label> <label class="control-label mar-r-20">用车时间：', 
                $line = 7, $out += $escape(Busplan.arriveTime), $out += '</label> <label class="control-label mar-r-20">客人信息：<span class="F-float F-count">', 
                $line = 8, $out += $escape(Busplan.adultCount), $out += '</span>大<span class="F-float F-count">', 
                $line = 8, $out += $escape(Busplan.childCount), $out += '</span></label> <label class="control-label ">外联销售：<span class="F-float F-money">', 
                $line = 9, $out += $escape(Busplan.outOPUserName), $out += '</span></label> </div> <div class="bg-gray form-group">现车辆计划要求：', 
                $line = 11, $out += $escape(Busplan.require), $out += "</div> ", $line = 12;
            }), $out += ' <input type="hidden" name="shuttleType" value="', $line = 13, $out += $escape(shuttleType), 
            $out += '"> <div class="form-group form-inline"> <span class="mar-r-10 title-size">车</span> <button class="btn btn-sm btn-success T-add-bus"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </div> <table class="table table-striped table-bordered table-hover T-busListTable margin-top" style="border:1px solid #ddd;"> <thead> <tr> <th class="th-border"><span class="necessary">*</span>车队</th> <th class="th-border">车座数</th> <th class="th-border">车辆品牌</th> <th class="th-border">车牌</th> <th class="th-border">司机</th> <th class="th-border">司机电话</th> <th class="th-border"><span class="necessary">*</span>用车时间</th> <th class="th-border"><span class="necessary">*</span>上车地点</th> <th class="th-border">目的地</th> <th class="th-border">车费</th> <th class="th-border">优惠</th> <th class="th-border">应付款</th> <th class="th-border">预付款</th> <th class="th-border">备注</th> <th class="th-border" style="width: 100px">操作</th> </tr> </thead> <tbody class="T-bus-plan" id="busplan_body"> ', 
            $line = 39, $each(outBusList, function(outBus) {
                $out += ' <tr entity-id="', $line = 40, $out += $escape(outBus.outRemarkId), $out += '"> <td> <div class="col-sm-12"> <input type="hidden" name="serviceType" value="', 
                $line = 43, 0 == outBus.serviceType ? ($out += "0", $line = 43) : ($out += "1", 
                $line = 43), $out += '" /> <input class="col-sm-12 bind-change T-busCompanyName" name="busCompanyName" type="text" value="', 
                $line = 44, $out += $escape(outBus.busCompanyName), $out += '" /> <input type="hidden" name="busCompanyId" value="', 
                $line = 45, $out += $escape(outBus.busCompanyId), $out += '" /> <span class="addResourceBtn T-addBusCompanyResource R-right" data-right="1020002" title="添加车队"> <i class="ace-icon fa fa-plus bigger-110 icon-only"></i> </span> <input type="hidden" name="outRemarkId" value="', 
                $line = 49, $out += $escape(outBusList.id), $out += '" /> </div> </td> <td> <input type="text" class="col-sm-12 T-chooseSeatCount" name="seatCount" value="', 
                $line = 53, $out += $escape(outBus.seatCount), $out += '" /> </td> <td> <input class="col-sm-12 T-chooseBusBrand" name="brand" type="text" value="', 
                $line = 56, $out += $escape(outBus.brand), $out += '" /> </td> <td> <div class="col-sm-12"> <input class="col-sm-12 T-chooseBusLicenseNumber bind-change" name="licenseNumber" type="text" value="', 
                $line = 60, $out += $escape(outBus.licenseNumber), $out += '" /> <input type="hidden" name="busId" value="', 
                $line = 61, null != outBus.bus && ($line = 61, $out += $escape(outBus.bus.id), $line = 61), 
                $out += '" /> <span class="addResourceBtn T-addBusResource R-right" data-right="1020002" title="添加车辆"> <i class="ace-icon fa fa-plus bigger-110 icon-only"></i> </span> </div> </td> <td> <div class="col-sm-12"> <input class="col-sm-12 T-chooseDriver bind-change" name="driverName" type="text" value="', 
                $line = 69, null != outBus && ($line = 69, $out += $escape(outBus.driverName), $line = 69), 
                $out += '" /> <input type="hidden" name="driverId" value="', $line = 70, null != outBus.driver && ($line = 70, 
                $out += $escape(outBus.driverId), $line = 70), $out += '" /> <span class="addResourceBtn T-addDriverResource R-right" data-right="1020002" title="添加司机"> <i class="ace-icon fa fa-plus bigger-110 icon-only"></i> </span> </div> </td> <td> <input class="col-sm-12" name="MobileNumber" readonly="readonly" type="text" value="', 
                $line = 77, $out += $escape(outBus.driverMobileNumber), $out += '" /> </td> <td> <input class="col-sm-12 T-dateTimePicker" name="useTime" type="text" value="', 
                $line = 80, null != outBus.useTime && ($line = 80, $out += $escape(outBus.useTime), 
                $line = 80), $out += '" /> </td> <td> <input class="col-sm-12" name="boardLocation" type="text" maxlength="20" value="', 
                $line = 83, $out += $escape(outBus.boardLocation), $out += '" /> </td> <td> <input class="col-sm-12" name="destination" type="text" maxlength="20" value="', 
                $line = 86, $out += $escape(outBus.destination), $out += '" /> </td> <td> <input class="col-sm-12 T-number price F-float F-money" name="fee" type="text" maxlength="9" value="', 
                $line = 89, $out += $escape(outBus.fee), $out += '" /> <input type="hidden" class="count" value="1" /> </td> <td> <input class="col-sm-12 T-number discount F-float F-money" name="reduceMoney" maxlength="9" type="text" value="', 
                $line = 93, $out += $escape(outBus.reduceMoney), $out += '" /> </td> <td> <input class="col-sm-12 needPay F-float F-money" readonly="readonly" name="needPayMoney" maxlength="9" type="text" value="', 
                $line = 96, $out += $escape(outBus.needPayMoney), $out += '" /> </td> <td> <input class="col-sm-12 T-number T-prePayMoney F-float F-money" name="prePayMoney" maxlength="9" type="text" value="', 
                $line = 99, $out += $escape(outBus.prePayMoney), $out += '" /> </td> <td> <input class="col-sm-12" name="remark" type="text" value="', 
                $line = 102, $out += $escape(outBus.remark), $out += '" maxlength="1000" /> </td> <td> <a class="cursor T-action T-arrange-delete" data-catename="bus" title="删除"> 删除 </a> </td> </tr> ', 
                $line = 110;
            }), $out += ' </tbody> </table> <div class="col-md-12 text-center mar-t-20"> <button class="btn btn-sm btn-primary T-cancel"> <i class="ace-icon fa fa-times-circle"></i> 取消 </button> <button class="btn btn-sm btn-primary mar-r-20 T-bus-save"> <i class="ace-icon fa fa-check-circle"></i> 提交信息 </button> <!-- <span class="checkbox checkbox-inline mar-0" data-target="#transit_receive_bus"> <label> <input name="status" type="checkbox" class="ace T-finishedArrange" ', 
            $line = 118, 3 == status && ($out += "checked", $line = 118), $out += '> <span class="lbl font-w"> 接团车辆安排完成</span> </label> </span> --> </div> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="T-planbus globalAdd ">\r\n    {{each outRemarkList as Busplan}}\r\n    <div class="form-group">\r\n        <input type="hidden" name="outRemarkId" value="{{Busplan.outRemarkId}}">\r\n        <label class="control-label mar-r-20">中转单号：{{Busplan.orderNumber}}</label>\r\n        <label class="control-label mar-r-20">线路产品：{{Busplan.lineProductName}}</label>\r\n        <label class="control-label mar-r-20">用车时间：{{Busplan.arriveTime}}</label>\r\n        <label class="control-label mar-r-20">客人信息：<span class="F-float F-count">{{Busplan.adultCount}}</span>大<span class="F-float F-count">{{Busplan.childCount}}</span></label>\r\n        <label class="control-label ">外联销售：<span class="F-float F-money">{{Busplan.outOPUserName}}</span></label>\r\n    </div>\r\n    <div class="bg-gray form-group">现车辆计划要求：{{Busplan.require}}</div>\r\n    {{/each}}\r\n    <input type="hidden" name="shuttleType" value="{{shuttleType}}">\r\n    <div class="form-group form-inline">\r\n        <span class="mar-r-10 title-size">车</span>\r\n        <button class="btn btn-sm btn-success T-add-bus"> <i class="ace-icon fa fa-plus"></i> 新增 </button>\r\n    </div>\r\n    <table class="table table-striped table-bordered table-hover T-busListTable margin-top" style="border:1px solid #ddd;">\r\n        <thead>\r\n            <tr>\r\n                <th class="th-border"><span class="necessary">*</span>车队</th>\r\n                <th class="th-border">车座数</th>\r\n                <th class="th-border">车辆品牌</th>\r\n                <th class="th-border">车牌</th>\r\n                <th class="th-border">司机</th>\r\n                <th class="th-border">司机电话</th>\r\n                <th class="th-border"><span class="necessary">*</span>用车时间</th>\r\n                <th class="th-border"><span class="necessary">*</span>上车地点</th>\r\n                <th class="th-border">目的地</th>\r\n                <th class="th-border">车费</th>\r\n                <th class="th-border">优惠</th>\r\n                <th class="th-border">应付款</th>\r\n                <th class="th-border">预付款</th>\r\n                <th class="th-border">备注</th>\r\n                <th class="th-border" style="width: 100px">操作</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-bus-plan" id="busplan_body">\r\n            {{each outBusList as outBus}}\r\n            <tr entity-id="{{outBus.outRemarkId}}">\r\n                <td>\r\n                    <div class="col-sm-12">\r\n                        <input type="hidden" name="serviceType" value="{{if outBus.serviceType == 0}}0{{else}}1{{/if}}" />\r\n                        <input class="col-sm-12 bind-change T-busCompanyName" name="busCompanyName" type="text" value="{{outBus.busCompanyName}}" />\r\n                        <input type="hidden" name="busCompanyId" value="{{outBus.busCompanyId}}" />\r\n                        <span class="addResourceBtn T-addBusCompanyResource R-right" data-right="1020002" title="添加车队">\r\n                            <i class="ace-icon fa fa-plus bigger-110 icon-only"></i>\r\n                        </span>\r\n                        <input type="hidden" name="outRemarkId" value="{{outBusList.id}}" />\r\n                    </div>\r\n                </td>\r\n                <td>\r\n                    <input type="text" class="col-sm-12 T-chooseSeatCount" name="seatCount" value="{{outBus.seatCount}}" />\r\n                </td>\r\n                <td>\r\n                    <input class="col-sm-12 T-chooseBusBrand" name="brand" type="text" value="{{outBus.brand}}" />\r\n                </td>\r\n                <td>\r\n                    <div class="col-sm-12">\r\n                        <input class="col-sm-12 T-chooseBusLicenseNumber bind-change" name="licenseNumber" type="text" value="{{outBus.licenseNumber}}" />\r\n                        <input type="hidden" name="busId" value="{{if outBus.bus != null}}{{outBus.bus.id}}{{/if}}" />\r\n                        <span class="addResourceBtn T-addBusResource R-right" data-right="1020002" title="添加车辆">\r\n                            <i class="ace-icon fa fa-plus bigger-110 icon-only"></i>\r\n                        </span>\r\n                    </div>\r\n                </td>\r\n                <td>\r\n                    <div class="col-sm-12">\r\n                        <input class="col-sm-12 T-chooseDriver bind-change" name="driverName" type="text" value="{{if outBus != null}}{{outBus.driverName}}{{/if}}" />\r\n                        <input type="hidden" name="driverId" value="{{if outBus.driver != null}}{{outBus.driverId}}{{/if}}" />\r\n                        <span class="addResourceBtn T-addDriverResource R-right" data-right="1020002" title="添加司机">\r\n                            <i class="ace-icon fa fa-plus bigger-110 icon-only"></i>\r\n                        </span>\r\n                    </div>\r\n                </td>\r\n                <td>\r\n                    <input class="col-sm-12" name="MobileNumber" readonly="readonly" type="text" value="{{outBus.driverMobileNumber}}" />\r\n                </td>\r\n                <td>\r\n                    <input class="col-sm-12 T-dateTimePicker" name="useTime" type="text" value="{{if outBus.useTime != null}}{{outBus.useTime}}{{/if}}" />\r\n                </td>\r\n                <td>\r\n                    <input class="col-sm-12" name="boardLocation" type="text" maxlength="20" value="{{outBus.boardLocation}}" />\r\n                </td>\r\n                <td>\r\n                    <input class="col-sm-12" name="destination" type="text" maxlength="20" value="{{outBus.destination}}" />\r\n                </td>\r\n                <td>\r\n                    <input class="col-sm-12 T-number price F-float F-money" name="fee" type="text" maxlength="9" value="{{outBus.fee}}" />\r\n                    <input type="hidden" class="count" value="1" />\r\n                </td>\r\n                <td>\r\n                    <input class="col-sm-12 T-number discount F-float F-money" name="reduceMoney" maxlength="9" type="text" value="{{outBus.reduceMoney}}" />\r\n                </td>\r\n                <td>\r\n                    <input class="col-sm-12 needPay F-float F-money" readonly="readonly" name="needPayMoney" maxlength="9" type="text" value="{{outBus.needPayMoney}}" />\r\n                </td>\r\n                <td>\r\n                    <input class="col-sm-12 T-number T-prePayMoney F-float F-money" name="prePayMoney" maxlength="9" type="text" value="{{outBus.prePayMoney}}" />\r\n                </td>\r\n                <td>\r\n                    <input class="col-sm-12" name="remark" type="text" value="{{outBus.remark}}" maxlength="1000" />\r\n                </td>\r\n                <td>\r\n                    <a class="cursor T-action T-arrange-delete" data-catename="bus" title="删除">\r\n                        删除\r\n                    </a>\r\n                </td>\r\n            </tr>\r\n            {{/each}}\r\n        </tbody>\r\n    </table>\r\n    <div class="col-md-12 text-center mar-t-20">\r\n        <button class="btn btn-sm btn-primary T-cancel"> <i class="ace-icon fa fa-times-circle"></i> 取消 </button>\r\n        <button class="btn btn-sm btn-primary mar-r-20  T-bus-save"> <i class="ace-icon fa fa-check-circle"></i> 提交信息 </button>\r\n        <!-- <span class="checkbox checkbox-inline mar-0" data-target="#transit_receive_bus">\r\n            <label>\r\n                <input name="status" type="checkbox" class="ace T-finishedArrange" {{if status == 3}}checked{{/if}}>\r\n                <span class="lbl font-w"> 接团车辆安排完成</span>\r\n            </label>\r\n        </span> -->\r\n    </div>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});