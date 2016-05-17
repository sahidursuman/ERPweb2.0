/*TMODJS:{"debug":true,"version":10,"md5":"8510a471f758e6cff32b31279cb66bd2"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeCenter/transferView/busArrange", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, outRemarkList = $data.outRemarkList, $escape = ($data.Busplan, 
            $data.$index, $utils.$escape), shuttleType = $data.shuttleType, unifyId = $data.unifyId, outBusList = $data.outBusList, status = ($data.outBus, 
            $data.status), $out = "";
            return $out += '<div class="T-planbus globalAdd "> <button class="btn btn-sm btn-success mar-b-10 T-add-BusTransfersId"><i class="ace-icon fa fa-plus"></i>添加安排 </button> <table class="table table-striped table-bordered"> <thead> <tr class="bg-blur"> <th>中转信息</th> <th>类型</th> <th>客人信息</th> <th>抵达时间</th> <th>班次</th> <th>要求</th> <th>操作</th> </tr> </thead> <tbody class="T-arrange"> ', 
            $line = 16, $each(outRemarkList, function(Busplan) {
                $out += ' <tr class="T-task-list"> <td class="h-touristGroupInfo"> <input type="hidden" name="outRemarkId" value="', 
                $line = 19, $out += $escape(Busplan.id), $out += '"> <p>中转单号：<span class="orderNumber">', 
                $line = 20, $out += $escape(Busplan.orderNumber), $out += '</span></p> <p><span><span class="lineProductName">&lt;', 
                $line = 21, $out += $escape(Busplan.lineProductName), $out += '&gt;</span></span> </p> <p><span class="startTime">', 
                $line = 23, $out += $escape(Busplan.startTime), $out += '</span> <span class="partnerAgencyName">', 
                $line = 24, $out += $escape(Busplan.partnerAgencyName), $out += '</span>外联销售： <span class="outOPUserName">', 
                $line = 25, $out += $escape(Busplan.outOPUserName), $out += '</span></p> <p>收客单号：<span class="tgOrderNumber">', 
                $line = 26, $out += $escape(Busplan.tgOrderNumber), $out += "</span></p> </td> <td> <span> ", 
                $line = 30, 1 == Busplan.shuttleType ? ($out += " 接团 ", $line = 30) : 2 == Busplan.shuttleType && ($out += " 送团", 
                $line = 30), $out += ' </span> <input type="hidden" name="shuttleType" value="', 
                $line = 32, 1 == Busplan.shuttleType ? ($out += " 1 ", $line = 32) : 2 == Busplan.shuttleType && ($out += " 2", 
                $line = 32), $out += '"> </td> <td> <p><span cals="contactMemberName">', $line = 35, 
                $out += $escape(Busplan.contactMemberName), $out += '</span></p> <p> <span class="adultCount">', 
                $line = 37, $out += $escape(Busplan.adultCount), $out += '</span>大 <span class="childCount">', 
                $line = 38, $out += $escape(Busplan.childCount), $out += '</span>小 </p> <p><span class="contactMemberPhoneNumber">', 
                $line = 40, $out += $escape(Busplan.contactMemberPhoneNumber), $out += "</span></p> </td> <td>", 
                $line = 42, $out += $escape(Busplan.arriveTime), $out += "</td> <td>", $line = 43, 
                $out += $escape(Busplan.shift), $out += '</td> <td><span class="require">', $line = 44, 
                $out += $escape(Busplan.require), $out += '</span></td> <td> <a class="cursor T-del-bus" title="删除"> 删除 </a> </td> </tr> ', 
                $line = 51;
            }), $out += ' </tbody> </table> <input type="hidden" name="shuttleType" value="', 
            $line = 54, $out += $escape(shuttleType), $out += '"> <input type="hidden" name="unifyId" value="', 
            $line = 55, $out += $escape(unifyId), $out += '"> <div class="form-group form-inline"> <span class="mar-r-10 title-size">车</span> <button class="btn btn-sm btn-success T-add-bus"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </div> <table class="table table-striped table-bordered table-hover T-busListTable margin-top" style="border:1px solid #ddd;"> <thead> <tr> <th class="th-border"><span class="necessary">*</span>车队</th> <th class="th-border">车座数</th> <th class="th-border">车辆品牌</th> <th class="th-border">车牌</th> <th class="th-border">司机</th> <th class="th-border">司机电话</th> <th class="th-border" style="width: 150px"><span class="necessary">*</span>用车时间</th> <th class="th-border"><span class="necessary">*</span>上车地点</th> <th class="th-border">目的地</th> <th class="th-border">车费</th> <th class="th-border">优惠</th> <th class="th-border">应付款</th> <th class="th-border">预付款</th> <th class="th-border">计划代收</th> <th class="th-border">备注</th> <th class="th-border">对账状态</th> <th class="th-border" style="width: 50px">操作</th> </tr> </thead> <tbody class="T-bus-plan" id="busplan_body"> ', 
            $line = 83, $each(outBusList, function(outBus) {
                $out += ' <tr data-entity-id="', $line = 84, $out += $escape(outBus.outBusId), $out += '"> <td> <div class="col-sm-12"> <input type="hidden" value="', 
                $line = 87, $out += $escape(outBus.outBusId), $out += '" name="outBusId"> <input type="hidden" name="serviceType" value="', 
                $line = 88, 0 == outBus.serviceType ? ($out += "0", $line = 88) : ($out += "1", 
                $line = 88), $out += '" /> <input class="col-sm-12 bind-change T-busCompanyName" ', 
                $line = 89, 1 == outBus.isConfirmAccount ? ($out += 'disabled="disabled" ', $line = 89) : ($out += ' type="text" ', 
                $line = 89), $out += 'name="busCompanyName" value="', $line = 89, $out += $escape(outBus.busCompanyName), 
                $out += '" /> <input type="hidden" name="busCompanyId" value="', $line = 90, $out += $escape(outBus.busCompanyId), 
                $out += '" /> <span class="addResourceBtn T-addBusCompanyResource R-right" data-right="1020002" title="添加车队"> <i class="ace-icon fa fa-plus bigger-110 icon-only"></i> </span> <input type="hidden" name="outRemarkId" value="', 
                $line = 94, $out += $escape(outBusList.id), $out += '" /> </div> </td> <td> <input ', 
                $line = 98, 1 == outBus.isConfirmAccount ? ($out += 'disabled="disabled" ', $line = 98) : ($out += ' type="text" ', 
                $line = 98), $out += ' class="col-sm-12 T-chooseSeatCount" name="seatCount" value="', 
                $line = 98, $out += $escape(outBus.seatCount), $out += '" /> </td> <td> <input class="col-sm-12 T-chooseBusBrand" name="brand" ', 
                $line = 101, 1 == outBus.isConfirmAccount ? ($out += 'disabled="disabled" ', $line = 101) : ($out += ' type="text" ', 
                $line = 101), $out += ' value="', $line = 101, $out += $escape(outBus.brand), $out += '" /> </td> <td> <div class="col-sm-12"> <input class="col-sm-12 T-chooseBusLicenseNumber bind-change" name="licenseNumber" ', 
                $line = 105, 1 == outBus.isConfirmAccount ? ($out += 'disabled="disabled" ', $line = 105) : ($out += ' type="text" ', 
                $line = 105), $out += 'value="', $line = 105, $out += $escape(outBus.licenseNumber), 
                $out += '" /> <input type="hidden" name="busId" value="', $line = 106, $out += $escape(outBus.busId), 
                $out += '" /> <span class="addResourceBtn T-addBusResource R-right" data-right="1020002" title="添加车辆"> <i class="ace-icon fa fa-plus bigger-110 icon-only"></i> </span> </div> </td> <td> <div class="col-sm-12"> <input class="col-sm-12 T-chooseDriver bind-change" name="driverName" ', 
                $line = 114, 1 == outBus.isConfirmAccount ? ($out += 'disabled="disabled" ', $line = 114) : ($out += ' type="text" ', 
                $line = 114), $out += ' value="', $line = 114, null != outBus && ($line = 114, $out += $escape(outBus.driverName), 
                $line = 114), $out += '" /> <input type="hidden" name="driverId" value="', $line = 115, 
                null != outBus.driverId && ($line = 115, $out += $escape(outBus.driverId), $line = 115), 
                $out += '" /> <span class="addResourceBtn T-addDriverResource R-right" data-right="1020002" title="添加司机"> <i class="ace-icon fa fa-plus bigger-110 icon-only"></i> </span> </div> </td> <td> <input class="col-sm-12" name="MobileNumber" readonly="readonly" type="text" value="', 
                $line = 122, $out += $escape(outBus.driverMobileNumber), $out += '" /> </td> <td> <input class="col-sm-12 T-dateTimePicker" name="useTime" ', 
                $line = 125, 1 == outBus.isConfirmAccount ? ($out += 'disabled="disabled" ', $line = 125) : ($out += ' type="text" ', 
                $line = 125), $out += ' value="', $line = 125, null != outBus.useTime && ($line = 125, 
                $out += $escape(outBus.useTime), $line = 125), $out += '" /> </td> <td> <input class="col-sm-12" name="boardLocation" ', 
                $line = 128, 1 == outBus.isConfirmAccount ? ($out += 'disabled="disabled" ', $line = 128) : ($out += ' type="text" ', 
                $line = 128), $out += ' maxlength="20" value="', $line = 128, $out += $escape(outBus.boardLocation), 
                $out += '" /> </td> <td> <input class="col-sm-12" name="destination" ', $line = 131, 
                1 == outBus.isConfirmAccount ? ($out += 'disabled="disabled" ', $line = 131) : ($out += ' type="text" ', 
                $line = 131), $out += ' maxlength="20" value="', $line = 131, $out += $escape(outBus.destination), 
                $out += '" /> </td> <td> <input class="col-sm-12 T-number price F-float F-money" name="fee" ', 
                $line = 134, 1 == outBus.isConfirmAccount ? ($out += 'disabled="disabled" ', $line = 134) : ($out += ' type="text" ', 
                $line = 134), $out += ' maxlength="9" value="', $line = 134, $out += $escape(outBus.fee), 
                $out += '" /> <input type="hidden" class="count" value="1" /> </td> <td> <input class="col-sm-12 T-number discount F-float F-money" name="reduceMoney" maxlength="9" ', 
                $line = 138, 1 == outBus.isConfirmAccount ? ($out += 'disabled="disabled" ', $line = 138) : ($out += ' type="text" ', 
                $line = 138), $out += ' value="', $line = 138, $out += $escape(outBus.reduceMoney), 
                $out += '" /> </td> <td> <input class="col-sm-12 needPay F-float F-money" readonly="readonly" name="needPayMoney" maxlength="9" type="text" value="', 
                $line = 141, $out += $escape(outBus.needPayMoney), $out += '" /> </td> <td> <input class="col-sm-12 T-number T-prePayMoney F-float F-money" name="prePayMoney" maxlength="9" ', 
                $line = 144, 1 == outBus.isConfirmAccount ? ($out += 'disabled="disabled" ', $line = 144) : ($out += ' type="text" ', 
                $line = 144), $out += ' value="', $line = 144, $out += $escape(outBus.prePayMoney), 
                $out += '" /> </td> <td> <input type="text" name="collection" class="T-collection" data-type = "bus" readonly value="', 
                $line = 147, $out += $escape(outBus.collection), $out += '"> <input type="hidden" name="collectionList" value=""> </td> <td> <input class="col-sm-12" name="remark" ', 
                $line = 151, 1 == outBus.isConfirmAccount ? ($out += 'disabled="disabled" ', $line = 151) : ($out += ' type="text" ', 
                $line = 151), $out += ' value="', $line = 151, $out += $escape(outBus.remark), $out += '" maxlength="1000" /> </td> <td> ', 
                $line = 154, 0 == outBus.isConfirmAccount ? ($out += "未对账", $line = 154) : ($out += "已对账", 
                $line = 154), $out += " </td> <td> ", $line = 157, 1 == outBus.isConfirmAccount ? ($out += ' <a class="cursor" style="color:#bbb;" data-catename="bus" title="删除">删除</a> ', 
                $line = 158) : ($out += ' <a class="cursor T-action T-arrange-delete" data-catename="bus" title="删除">删除</a> ', 
                $line = 159), $out += " </td> </tr> ", $line = 162;
            }), $out += ' </tbody> </table> <div class="col-md-12 text-center mar-t-20"> <button class="btn btn-sm btn-primary T-cancel"> <i class="ace-icon fa fa-times-circle"></i> 取消 </button> <button class="btn btn-sm btn-primary mar-r-20 T-bus-save"> <i class="ace-icon fa fa-check-circle"></i> 提交信息 </button> <span class="checkbox checkbox-inline mar-0" data-target="#transit_receive_bus"> <label> <input name="status" type="checkbox" class="ace T-finishedArrange" ', 
            $line = 170, 3 == status && ($out += "checked", $line = 170), $out += '> <span class="lbl font-w">安排完成</span> </label> </span> </div> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="T-planbus globalAdd ">\r\n    <button class="btn btn-sm btn-success mar-b-10 T-add-BusTransfersId"><i class="ace-icon fa fa-plus"></i>添加安排 </button>\r\n    <table class="table table-striped table-bordered">\r\n        <thead>\r\n            <tr class="bg-blur">\r\n            <th>中转信息</th>\r\n            <th>类型</th>\r\n            <th>客人信息</th>\r\n            <th>抵达时间</th>\r\n            <th>班次</th>\r\n            <th>要求</th>\r\n            <th>操作</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody class="T-arrange">\r\n            {{each outRemarkList as Busplan}}\r\n            <tr class="T-task-list">\r\n                <td class="h-touristGroupInfo">\r\n                    <input type="hidden" name="outRemarkId" value="{{Busplan.id}}">\r\n                    <p>中转单号：<span class="orderNumber">{{Busplan.orderNumber}}</span></p>\r\n                    <p><span><span class="lineProductName">&lt;{{Busplan.lineProductName}}&gt;</span></span>\r\n                    </p>\r\n                    <p><span class="startTime">{{Busplan.startTime}}</span>\r\n                        <span class="partnerAgencyName">{{Busplan.partnerAgencyName}}</span>外联销售：\r\n                        <span class="outOPUserName">{{Busplan.outOPUserName}}</span></p>\r\n                    <p>收客单号：<span class="tgOrderNumber">{{Busplan.tgOrderNumber}}</span></p>\r\n                </td>\r\n                <td>\r\n                    <span>\r\n                    {{if Busplan.shuttleType == 1}} 接团 {{else if Busplan.shuttleType == 2}} 送团{{/if}}\r\n                    </span>\r\n                    <input type="hidden" name="shuttleType" value="{{if Busplan.shuttleType == 1}} 1 {{else if Busplan.shuttleType == 2}} 2{{/if}}">\r\n                </td>\r\n                <td>\r\n                    <p><span cals="contactMemberName">{{Busplan.contactMemberName}}</span></p>\r\n                    <p>\r\n                        <span class="adultCount">{{Busplan.adultCount}}</span>大\r\n                        <span class="childCount">{{Busplan.childCount}}</span>小\r\n                    </p>\r\n                    <p><span class="contactMemberPhoneNumber">{{Busplan.contactMemberPhoneNumber}}</span></p>\r\n                </td>\r\n                <td>{{Busplan.arriveTime}}</td>\r\n                <td>{{Busplan.shift}}</td>\r\n                <td><span class="require">{{Busplan.require}}</span></td>\r\n                <td>\r\n                    <a class="cursor T-del-bus" title="删除">\r\n                        删除\r\n                    </a>\r\n                </td>\r\n            </tr>\r\n            {{/each}}\r\n        </tbody>\r\n    </table>\r\n    <input type="hidden" name="shuttleType" value="{{shuttleType}}">\r\n    <input type="hidden" name="unifyId" value="{{unifyId}}">\r\n    <div class="form-group form-inline">\r\n        <span class="mar-r-10 title-size">车</span>\r\n        <button class="btn btn-sm btn-success T-add-bus"> <i class="ace-icon fa fa-plus"></i> 新增 </button>\r\n    </div>\r\n    <table class="table table-striped table-bordered table-hover T-busListTable margin-top" style="border:1px solid #ddd;">\r\n        <thead>\r\n            <tr>\r\n                <th class="th-border"><span class="necessary">*</span>车队</th>\r\n                <th class="th-border">车座数</th>\r\n                <th class="th-border">车辆品牌</th>\r\n                <th class="th-border">车牌</th>\r\n                <th class="th-border">司机</th>\r\n                <th class="th-border">司机电话</th>\r\n                <th class="th-border" style="width: 150px"><span class="necessary">*</span>用车时间</th>\r\n                <th class="th-border"><span class="necessary">*</span>上车地点</th>\r\n                <th class="th-border">目的地</th>\r\n                <th class="th-border">车费</th>\r\n                <th class="th-border">优惠</th>\r\n                <th class="th-border">应付款</th>\r\n                <th class="th-border">预付款</th>\r\n                <th class="th-border">计划代收</th>\r\n                <th class="th-border">备注</th>\r\n                <th class="th-border">对账状态</th>\r\n                <th class="th-border" style="width: 50px">操作</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-bus-plan" id="busplan_body">\r\n            {{each outBusList as outBus}}\r\n            <tr data-entity-id="{{outBus.outBusId}}">\r\n                <td>\r\n                    <div class="col-sm-12">\r\n                        <input type="hidden" value="{{outBus.outBusId}}" name="outBusId">\r\n                        <input type="hidden" name="serviceType" value="{{if outBus.serviceType == 0}}0{{else}}1{{/if}}" />\r\n                        <input class="col-sm-12 bind-change T-busCompanyName" {{ if outBus.isConfirmAccount==1 }}disabled="disabled" {{else}} type="text" {{/if}}name="busCompanyName" value="{{outBus.busCompanyName}}" />\r\n                        <input type="hidden" name="busCompanyId" value="{{outBus.busCompanyId}}" />\r\n                        <span class="addResourceBtn T-addBusCompanyResource R-right" data-right="1020002" title="添加车队">\r\n                            <i class="ace-icon fa fa-plus bigger-110 icon-only"></i>\r\n                        </span>\r\n                        <input type="hidden" name="outRemarkId" value="{{outBusList.id}}" />\r\n                    </div>\r\n                </td>\r\n                <td>\r\n                    <input {{ if outBus.isConfirmAccount==1 }}disabled="disabled" {{else}} type="text" {{/if}} class="col-sm-12 T-chooseSeatCount" name="seatCount" value="{{outBus.seatCount}}" />\r\n                </td>\r\n                <td>\r\n                    <input class="col-sm-12 T-chooseBusBrand" name="brand" {{ if outBus.isConfirmAccount==1 }}disabled="disabled" {{else}} type="text" {{/if}} value="{{outBus.brand}}" />\r\n                </td>\r\n                <td>\r\n                    <div class="col-sm-12">\r\n                        <input class="col-sm-12 T-chooseBusLicenseNumber bind-change" name="licenseNumber" {{ if outBus.isConfirmAccount==1 }}disabled="disabled" {{else}} type="text" {{/if}}value="{{outBus.licenseNumber}}" />\r\n                        <input type="hidden" name="busId" value="{{outBus.busId}}" />\r\n                        <span class="addResourceBtn T-addBusResource R-right" data-right="1020002" title="添加车辆">\r\n                            <i class="ace-icon fa fa-plus bigger-110 icon-only"></i>\r\n                        </span>\r\n                    </div>\r\n                </td>\r\n                <td>\r\n                    <div class="col-sm-12">\r\n                        <input class="col-sm-12 T-chooseDriver bind-change" name="driverName" {{ if outBus.isConfirmAccount==1 }}disabled="disabled" {{else}} type="text" {{/if}} value="{{if outBus != null}}{{outBus.driverName}}{{/if}}" />\r\n                        <input type="hidden" name="driverId" value="{{if outBus.driverId != null}}{{outBus.driverId}}{{/if}}" />\r\n                        <span class="addResourceBtn T-addDriverResource R-right" data-right="1020002" title="添加司机">\r\n                            <i class="ace-icon fa fa-plus bigger-110 icon-only"></i>\r\n                        </span>\r\n                    </div>\r\n                </td>\r\n                <td>\r\n                    <input class="col-sm-12" name="MobileNumber" readonly="readonly" type="text" value="{{outBus.driverMobileNumber}}" />\r\n                </td>\r\n                <td>\r\n                    <input class="col-sm-12 T-dateTimePicker" name="useTime" {{ if outBus.isConfirmAccount==1 }}disabled="disabled" {{else}} type="text" {{/if}} value="{{if outBus.useTime != null}}{{outBus.useTime}}{{/if}}" />\r\n                </td>\r\n                <td>\r\n                    <input class="col-sm-12" name="boardLocation" {{ if outBus.isConfirmAccount==1 }}disabled="disabled" {{else}} type="text" {{/if}} maxlength="20" value="{{outBus.boardLocation}}" />\r\n                </td>\r\n                <td>\r\n                    <input class="col-sm-12" name="destination" {{ if outBus.isConfirmAccount==1 }}disabled="disabled" {{else}} type="text" {{/if}} maxlength="20" value="{{outBus.destination}}" />\r\n                </td>\r\n                <td>\r\n                    <input class="col-sm-12 T-number price F-float F-money" name="fee" {{ if outBus.isConfirmAccount==1 }}disabled="disabled" {{else}} type="text" {{/if}} maxlength="9" value="{{outBus.fee}}" />\r\n                    <input type="hidden" class="count" value="1" />\r\n                </td>\r\n                <td>\r\n                    <input class="col-sm-12 T-number discount F-float F-money" name="reduceMoney" maxlength="9" {{ if outBus.isConfirmAccount==1 }}disabled="disabled" {{else}} type="text" {{/if}} value="{{outBus.reduceMoney}}" />\r\n                </td>\r\n                <td>\r\n                    <input class="col-sm-12 needPay F-float F-money" readonly="readonly" name="needPayMoney" maxlength="9" type="text" value="{{outBus.needPayMoney}}" />\r\n                </td>\r\n                <td>\r\n                    <input class="col-sm-12 T-number T-prePayMoney F-float F-money" name="prePayMoney" maxlength="9" {{ if outBus.isConfirmAccount==1 }}disabled="disabled" {{else}} type="text" {{/if}} value="{{outBus.prePayMoney}}" />\r\n                </td>\r\n                <td>\r\n                    <input type="text" name="collection" class="T-collection" data-type = "bus" readonly value="{{outBus.collection}}">\r\n                    <input type="hidden" name="collectionList"  value="">\r\n                </td>\r\n                <td>\r\n                    <input class="col-sm-12" name="remark" {{ if outBus.isConfirmAccount==1 }}disabled="disabled" {{else}} type="text" {{/if}} value="{{outBus.remark}}" maxlength="1000" />\r\n                </td>\r\n                <td>\r\n                    {{if outBus.isConfirmAccount == 0 }}未对账{{else}}已对账{{/if}}\r\n                </td>\r\n                <td>\r\n                    {{ if outBus.isConfirmAccount == 1 }}\r\n                    <a class="cursor" style="color:#bbb;" data-catename="bus" title="删除">删除</a> {{else}}\r\n                    <a class="cursor T-action T-arrange-delete" data-catename="bus" title="删除">删除</a> {{/if}}\r\n                </td>\r\n            </tr>\r\n            {{/each}}\r\n        </tbody>\r\n    </table>\r\n    <div class="col-md-12 text-center mar-t-20">\r\n        <button class="btn btn-sm btn-primary T-cancel"> <i class="ace-icon fa fa-times-circle"></i> 取消 </button>\r\n        <button class="btn btn-sm btn-primary mar-r-20  T-bus-save"> <i class="ace-icon fa fa-check-circle"></i> 提交信息 </button>\r\n        <span class="checkbox checkbox-inline mar-0" data-target="#transit_receive_bus">\r\n            <label>\r\n                <input name="status" type="checkbox" class="ace T-finishedArrange" {{if status == 3}}checked{{/if}}>\r\n                <span class="lbl font-w">安排完成</span>\r\n        </label>\r\n        </span>\r\n    </div>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});