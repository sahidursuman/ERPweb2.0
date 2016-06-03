/*TMODJS:{"debug":true,"version":4,"md5":"6931489e40480c3746e3516bd3afd897"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeCenter/transferView/busArrange", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, outRemarkList = $data.outRemarkList, $escape = ($data.Busplan, 
            $data.$index, $utils.$escape), shuttleType = ($data.itme, $data.shuttleType), unifyId = $data.unifyId, outBusList = $data.outBusList, status = ($data.outBus, 
            $data.status), $out = "";
            return $out += '<div class="T-planbus globalAdd "> <button class="btn btn-sm btn-success mar-b-10 T-add-BusTransfersId"><i class="ace-icon fa fa-plus"></i>添加安排 </button> <table class="table table-striped table-bordered"> <thead> <tr class="bg-blur"> <th>中转信息</th> <th>类型</th> <th>客人信息</th> <th>抵达时间</th> <th>班次</th> <th>要求</th> <th>操作</th> </tr> </thead> <tbody class="T-arrange"> ', 
            $line = 16, $each(outRemarkList, function(Busplan) {
                $out += ' <tr class="T-task-list" data-touristgroupId="', $line = 17, $out += $escape(Busplan.touristGroupId), 
                $out += '"> <td class="h-touristGroupInfo"> <input type="hidden" name="outRemarkId" value="', 
                $line = 19, $out += $escape(Busplan.id), $out += '"> <p>中转单号：<span class="orderNumber">', 
                $line = 20, $out += $escape(Busplan.orderNumber), $out += '</span></p> <p><span><span class="lineProductName">', 
                $line = 21, $out += $escape(Busplan.lineProductName), $out += '</span></span> </p> <p><span class="startTime">', 
                $line = 23, $out += $escape(Busplan.startTime), $out += '</span> <span class="partnerAgencyName">', 
                $line = 24, $out += $escape(Busplan.partnerAgencyName), $out += '</span>外联销售： <span class="outOPUserName">', 
                $line = 25, $out += $escape(Busplan.outOPUserName), $out += '</span></p> <p>收客单号：<span class="tgOrderNumber">', 
                $line = 26, $out += $escape(Busplan.tgOrderNumber), $out += "</span></p> </td> <td> <span> ", 
                $line = 30, 1 == Busplan.shuttleType ? ($out += " 接团 ", $line = 30) : 2 == Busplan.shuttleType && ($out += " 送团", 
                $line = 30), $out += ' </span> <input type="hidden" name="shuttleType" value="', 
                $line = 32, 1 == Busplan.shuttleType ? ($out += " 1 ", $line = 32) : 2 == Busplan.shuttleType && ($out += " 2", 
                $line = 32), $out += '"> </td> <td> <p> <span class="adultCount">', $line = 36, 
                $out += $escape(Busplan.adultCount), $out += '</span>大 <span class="childCount">', 
                $line = 37, $out += $escape(Busplan.childCount), $out += "</span>小 </p> ", $line = 39, 
                $each(Busplan.contactMemberList, function(itme) {
                    $out += ' <p><span class="contactMemberName">', $line = 40, $out += $escape(itme.contactMemberName), 
                    $out += '</span> <span class="contactMemberPhoneNumber">(', $line = 41, $out += $escape(itme.contactMemberPhoneNumber), 
                    $out += ")</span></p> ", $line = 42;
                }), $out += " </td> <td>", $line = 44, $out += $escape(Busplan.arriveTime), $out += "</td> <td>", 
                $line = 45, $out += $escape(Busplan.shift), $out += '</td> <td><span class="require">', 
                $line = 46, $out += $escape(Busplan.require), $out += '</span></td> <td> <a class="cursor T-del-bus" title="删除"> 删除 </a> </td> </tr> ', 
                $line = 53;
            }), $out += ' </tbody> </table> <input type="hidden" name="shuttleType" value="', 
            $line = 56, $out += $escape(shuttleType), $out += '"> <input type="hidden" name="unifyId" value="', 
            $line = 57, $out += $escape(unifyId), $out += '"> <div class="form-group form-inline"> <span class="mar-r-10 title-size">车</span> <button class="btn btn-sm btn-success T-add-bus"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </div> <table class="table table-striped table-bordered table-hover T-busListTable margin-top" style="border:1px solid #ddd;"> <thead> <tr> <th class="th-border"><span class="necessary">*</span>车队</th> <th class="th-border">车座数</th> <th class="th-border">车辆品牌</th> <th class="th-border">车牌</th> <th class="th-border">司机</th> <th class="th-border">司机电话</th> <th class="th-border" style="width: 150px"><span class="necessary">*</span>用车时间</th> <th class="th-border"><span class="necessary">*</span>上车地点</th> <th class="th-border">目的地</th> <th class="th-border">车费</th> <th class="th-border">优惠</th> <th class="th-border">应付款</th> <th class="th-border">预付款</th> <th class="th-border">计划代收</th> <th class="th-border">备注</th> <th class="th-border">对账状态</th> <th class="th-border" style="width: 50px">操作</th> </tr> </thead> <tbody class="T-bus-plan" id="busplan_body"> ', 
            $line = 85, $each(outBusList, function(outBus) {
                $out += ' <tr data-entity-id="', $line = 86, $out += $escape(outBus.outBusId), $out += '"> <td> <div class="col-sm-12"> <input type="hidden" value="', 
                $line = 89, $out += $escape(outBus.outBusId), $out += '" name="outBusId"> <input type="hidden" name="serviceType" value="', 
                $line = 90, 0 == outBus.serviceType ? ($out += "0", $line = 90) : ($out += "1", 
                $line = 90), $out += '" /> <input class="col-sm-12 bind-change T-busCompanyName" ', 
                $line = 91, 1 == outBus.isConfirmAccount ? ($out += 'disabled="disabled" ', $line = 91) : ($out += ' type="text" ', 
                $line = 91), $out += 'name="busCompanyName" value="', $line = 91, $out += $escape(outBus.busCompanyName), 
                $out += '" /> <input type="hidden" name="busCompanyId" value="', $line = 92, $out += $escape(outBus.busCompanyId), 
                $out += '" /> <span class="addResourceBtn T-addBusCompanyResource R-right" data-right="1020002" title="添加车队"> <i class="ace-icon fa fa-plus bigger-110 icon-only"></i> </span> <input type="hidden" name="outRemarkId" value="', 
                $line = 96, $out += $escape(outBusList.id), $out += '" /> </div> </td> <td> <input ', 
                $line = 100, 1 == outBus.isConfirmAccount ? ($out += 'disabled="disabled" ', $line = 100) : ($out += ' type="text" ', 
                $line = 100), $out += ' class="col-sm-12 T-chooseSeatCount" name="seatCount" value="', 
                $line = 100, $out += $escape(outBus.seatCount), $out += '" /> </td> <td> <input class="col-sm-12 T-chooseBusBrand" name="brand" ', 
                $line = 103, 1 == outBus.isConfirmAccount ? ($out += 'disabled="disabled" ', $line = 103) : ($out += ' type="text" ', 
                $line = 103), $out += ' value="', $line = 103, $out += $escape(outBus.brand), $out += '" /> </td> <td> <div class="col-sm-12"> <input class="col-sm-12 T-chooseBusLicenseNumber bind-change" name="licenseNumber" ', 
                $line = 107, 1 == outBus.isConfirmAccount ? ($out += 'disabled="disabled" ', $line = 107) : ($out += ' type="text" ', 
                $line = 107), $out += 'value="', $line = 107, $out += $escape(outBus.licenseNumber), 
                $out += '" /> <input type="hidden" name="busId" value="', $line = 108, $out += $escape(outBus.busId), 
                $out += '" /> <span class="addResourceBtn T-addBusResource R-right" data-right="1020002" title="添加车辆"> <i class="ace-icon fa fa-plus bigger-110 icon-only"></i> </span> </div> </td> <td> <div class="col-sm-12"> <input class="col-sm-12 T-chooseDriver bind-change" name="driverName" ', 
                $line = 116, 1 == outBus.isConfirmAccount ? ($out += 'disabled="disabled" ', $line = 116) : ($out += ' type="text" ', 
                $line = 116), $out += ' value="', $line = 116, null != outBus && ($line = 116, $out += $escape(outBus.driverName), 
                $line = 116), $out += '" /> <input type="hidden" name="driverId" value="', $line = 117, 
                null != outBus.driverId && ($line = 117, $out += $escape(outBus.driverId), $line = 117), 
                $out += '" /> <span class="addResourceBtn T-addDriverResource R-right" data-right="1020002" title="添加司机"> <i class="ace-icon fa fa-plus bigger-110 icon-only"></i> </span> </div> </td> <td> <input class="col-sm-12" name="MobileNumber" readonly="readonly" type="text" value="', 
                $line = 124, $out += $escape(outBus.driverMobileNumber), $out += '" /> </td> <td> <input class="col-sm-12 T-dateTimePicker" name="useTime" ', 
                $line = 127, 1 == outBus.isConfirmAccount ? ($out += 'disabled="disabled" ', $line = 127) : ($out += ' type="text" ', 
                $line = 127), $out += ' value="', $line = 127, null != outBus.useTime && ($line = 127, 
                $out += $escape(outBus.useTime), $line = 127), $out += '" /> </td> <td> <input class="col-sm-12" name="boardLocation" ', 
                $line = 130, 1 == outBus.isConfirmAccount ? ($out += 'disabled="disabled" ', $line = 130) : ($out += ' type="text" ', 
                $line = 130), $out += ' maxlength="20" value="', $line = 130, $out += $escape(outBus.boardLocation), 
                $out += '" /> </td> <td> <input class="col-sm-12" name="destination" ', $line = 133, 
                1 == outBus.isConfirmAccount ? ($out += 'disabled="disabled" ', $line = 133) : ($out += ' type="text" ', 
                $line = 133), $out += ' maxlength="20" value="', $line = 133, $out += $escape(outBus.destination), 
                $out += '" /> </td> <td> <input class="col-sm-12 T-number price F-float F-money" name="fee" ', 
                $line = 136, 1 == outBus.isConfirmAccount ? ($out += 'disabled="disabled" ', $line = 136) : ($out += ' type="text" ', 
                $line = 136), $out += ' maxlength="9" value="', $line = 136, $out += $escape(outBus.fee), 
                $out += '" /> <input type="hidden" class="count" value="1" /> </td> <td> <input class="col-sm-12 T-number discount F-float F-money" name="reduceMoney" maxlength="9" ', 
                $line = 140, 1 == outBus.isConfirmAccount ? ($out += 'disabled="disabled" ', $line = 140) : ($out += ' type="text" ', 
                $line = 140), $out += ' value="', $line = 140, $out += $escape(outBus.reduceMoney), 
                $out += '" /> </td> <td> <input class="col-sm-12 needPay F-float F-money" readonly="readonly" name="needPayMoney" maxlength="9" type="text" value="', 
                $line = 143, $out += $escape(outBus.needPayMoney), $out += '" /> </td> <td> <input class="col-sm-12 T-number T-prePayMoney F-float F-money" name="prePayMoney" maxlength="9" ', 
                $line = 146, 1 == outBus.isConfirmAccount ? ($out += 'disabled="disabled" ', $line = 146) : ($out += ' type="text" ', 
                $line = 146), $out += ' value="', $line = 146, $out += $escape(outBus.prePayMoney), 
                $out += '" /> </td> <td> <input type="text" name="collection" class="T-collection" data-type = "bus" readonly value="', 
                $line = 149, $out += $escape(outBus.collection), $out += '" data-isConfirmAccount="', 
                $line = 149, $out += $escape(outBus.isConfirmAccount), $out += '"> <input type="hidden" name="collectionList" value=""> </td> <td> <input class="col-sm-12" name="remark" ', 
                $line = 153, 1 == outBus.isConfirmAccount ? ($out += 'disabled="disabled" ', $line = 153) : ($out += ' type="text" ', 
                $line = 153), $out += ' value="', $line = 153, $out += $escape(outBus.remark), $out += '" maxlength="1000" /> </td> <td> ', 
                $line = 156, 0 == outBus.isConfirmAccount ? ($out += "未对账", $line = 156) : ($out += "已对账", 
                $line = 156), $out += " </td> <td> ", $line = 159, 1 == outBus.isConfirmAccount ? ($out += ' <a class="cursor" style="color:#bbb;" data-catename="bus" title="删除">删除</a> ', 
                $line = 160) : ($out += ' <a class="cursor T-action T-arrange-delete" data-catename="bus" title="删除">删除</a> ', 
                $line = 161), $out += " </td> </tr> ", $line = 164;
            }), $out += ' </tbody> </table> <div class="col-md-12 text-center mar-t-20"> <button class="btn btn-sm btn-primary T-cancel"> <i class="ace-icon fa fa-times-circle"></i> 取消 </button> <button class="btn btn-sm btn-primary mar-r-20 T-bus-save"> <i class="ace-icon fa fa-check-circle"></i> 提交信息 </button> <span class="checkbox checkbox-inline mar-0" data-target="#transit_receive_bus"> <label> <input name="status" type="checkbox" class="ace T-finishedArrange" ', 
            $line = 172, 1 == status && ($out += "checked", $line = 172), $out += '> <span class="lbl font-w">安排完成</span> </label> </span> </div> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="T-planbus globalAdd ">\r\n    <button class="btn btn-sm btn-success mar-b-10 T-add-BusTransfersId"><i class="ace-icon fa fa-plus"></i>添加安排 </button>\r\n    <table class="table table-striped table-bordered">\r\n        <thead>\r\n            <tr class="bg-blur">\r\n            <th>中转信息</th>\r\n            <th>类型</th>\r\n            <th>客人信息</th>\r\n            <th>抵达时间</th>\r\n            <th>班次</th>\r\n            <th>要求</th>\r\n            <th>操作</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody class="T-arrange">\r\n            {{each outRemarkList as Busplan}}\r\n            <tr class="T-task-list" data-touristgroupId="{{Busplan.touristGroupId}}">\r\n                <td class="h-touristGroupInfo">\r\n                    <input type="hidden" name="outRemarkId" value="{{Busplan.id}}">\r\n                    <p>中转单号：<span class="orderNumber">{{Busplan.orderNumber}}</span></p>\r\n                    <p><span><span class="lineProductName">{{Busplan.lineProductName}}</span></span>\r\n                    </p>\r\n                    <p><span class="startTime">{{Busplan.startTime}}</span>\r\n                        <span class="partnerAgencyName">{{Busplan.partnerAgencyName}}</span>外联销售：\r\n                        <span class="outOPUserName">{{Busplan.outOPUserName}}</span></p>\r\n                    <p>收客单号：<span class="tgOrderNumber">{{Busplan.tgOrderNumber}}</span></p>\r\n                </td>\r\n                <td>\r\n                    <span>\r\n                    {{if Busplan.shuttleType == 1}} 接团 {{else if Busplan.shuttleType == 2}} 送团{{/if}}\r\n                    </span>\r\n                    <input type="hidden" name="shuttleType" value="{{if Busplan.shuttleType == 1}} 1 {{else if Busplan.shuttleType == 2}} 2{{/if}}">\r\n                </td>\r\n                <td>\r\n                    <p>\r\n                        <span class="adultCount">{{Busplan.adultCount}}</span>大\r\n                        <span class="childCount">{{Busplan.childCount}}</span>小\r\n                    </p>\r\n                    {{each Busplan.contactMemberList as itme}}\r\n                    <p><span class="contactMemberName">{{itme.contactMemberName}}</span>\r\n                    <span class="contactMemberPhoneNumber">({{itme.contactMemberPhoneNumber}})</span></p>\r\n                    {{/each}}\r\n                </td>\r\n                <td>{{Busplan.arriveTime}}</td>\r\n                <td>{{Busplan.shift}}</td>\r\n                <td><span class="require">{{Busplan.require}}</span></td>\r\n                <td>\r\n                    <a class="cursor T-del-bus" title="删除">\r\n                        删除\r\n                    </a>\r\n                </td>\r\n            </tr>\r\n            {{/each}}\r\n        </tbody>\r\n    </table>\r\n    <input type="hidden" name="shuttleType" value="{{shuttleType}}">\r\n    <input type="hidden" name="unifyId" value="{{unifyId}}">\r\n    <div class="form-group form-inline">\r\n        <span class="mar-r-10 title-size">车</span>\r\n        <button class="btn btn-sm btn-success T-add-bus"> <i class="ace-icon fa fa-plus"></i> 新增 </button>\r\n    </div>\r\n    <table class="table table-striped table-bordered table-hover T-busListTable margin-top" style="border:1px solid #ddd;">\r\n        <thead>\r\n            <tr>\r\n                <th class="th-border"><span class="necessary">*</span>车队</th>\r\n                <th class="th-border">车座数</th>\r\n                <th class="th-border">车辆品牌</th>\r\n                <th class="th-border">车牌</th>\r\n                <th class="th-border">司机</th>\r\n                <th class="th-border">司机电话</th>\r\n                <th class="th-border" style="width: 150px"><span class="necessary">*</span>用车时间</th>\r\n                <th class="th-border"><span class="necessary">*</span>上车地点</th>\r\n                <th class="th-border">目的地</th>\r\n                <th class="th-border">车费</th>\r\n                <th class="th-border">优惠</th>\r\n                <th class="th-border">应付款</th>\r\n                <th class="th-border">预付款</th>\r\n                <th class="th-border">计划代收</th>\r\n                <th class="th-border">备注</th>\r\n                <th class="th-border">对账状态</th>\r\n                <th class="th-border" style="width: 50px">操作</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-bus-plan" id="busplan_body">\r\n            {{each outBusList as outBus}}\r\n            <tr data-entity-id="{{outBus.outBusId}}">\r\n                <td>\r\n                    <div class="col-sm-12">\r\n                        <input type="hidden" value="{{outBus.outBusId}}" name="outBusId">\r\n                        <input type="hidden" name="serviceType" value="{{if outBus.serviceType == 0}}0{{else}}1{{/if}}" />\r\n                        <input class="col-sm-12 bind-change T-busCompanyName" {{ if outBus.isConfirmAccount==1 }}disabled="disabled" {{else}} type="text" {{/if}}name="busCompanyName" value="{{outBus.busCompanyName}}" />\r\n                        <input type="hidden" name="busCompanyId" value="{{outBus.busCompanyId}}" />\r\n                        <span class="addResourceBtn T-addBusCompanyResource R-right" data-right="1020002" title="添加车队">\r\n                            <i class="ace-icon fa fa-plus bigger-110 icon-only"></i>\r\n                        </span>\r\n                        <input type="hidden" name="outRemarkId" value="{{outBusList.id}}" />\r\n                    </div>\r\n                </td>\r\n                <td>\r\n                    <input {{ if outBus.isConfirmAccount==1 }}disabled="disabled" {{else}} type="text" {{/if}} class="col-sm-12 T-chooseSeatCount" name="seatCount" value="{{outBus.seatCount}}" />\r\n                </td>\r\n                <td>\r\n                    <input class="col-sm-12 T-chooseBusBrand" name="brand" {{ if outBus.isConfirmAccount==1 }}disabled="disabled" {{else}} type="text" {{/if}} value="{{outBus.brand}}" />\r\n                </td>\r\n                <td>\r\n                    <div class="col-sm-12">\r\n                        <input class="col-sm-12 T-chooseBusLicenseNumber bind-change" name="licenseNumber" {{ if outBus.isConfirmAccount==1 }}disabled="disabled" {{else}} type="text" {{/if}}value="{{outBus.licenseNumber}}" />\r\n                        <input type="hidden" name="busId" value="{{outBus.busId}}" />\r\n                        <span class="addResourceBtn T-addBusResource R-right" data-right="1020002" title="添加车辆">\r\n                            <i class="ace-icon fa fa-plus bigger-110 icon-only"></i>\r\n                        </span>\r\n                    </div>\r\n                </td>\r\n                <td>\r\n                    <div class="col-sm-12">\r\n                        <input class="col-sm-12 T-chooseDriver bind-change" name="driverName" {{ if outBus.isConfirmAccount==1 }}disabled="disabled" {{else}} type="text" {{/if}} value="{{if outBus != null}}{{outBus.driverName}}{{/if}}" />\r\n                        <input type="hidden" name="driverId" value="{{if outBus.driverId != null}}{{outBus.driverId}}{{/if}}" />\r\n                        <span class="addResourceBtn T-addDriverResource R-right" data-right="1020002" title="添加司机">\r\n                            <i class="ace-icon fa fa-plus bigger-110 icon-only"></i>\r\n                        </span>\r\n                    </div>\r\n                </td>\r\n                <td>\r\n                    <input class="col-sm-12" name="MobileNumber" readonly="readonly" type="text" value="{{outBus.driverMobileNumber}}" />\r\n                </td>\r\n                <td>\r\n                    <input class="col-sm-12 T-dateTimePicker" name="useTime" {{ if outBus.isConfirmAccount==1 }}disabled="disabled" {{else}} type="text" {{/if}} value="{{if outBus.useTime != null}}{{outBus.useTime}}{{/if}}" />\r\n                </td>\r\n                <td>\r\n                    <input class="col-sm-12" name="boardLocation" {{ if outBus.isConfirmAccount==1 }}disabled="disabled" {{else}} type="text" {{/if}} maxlength="20" value="{{outBus.boardLocation}}" />\r\n                </td>\r\n                <td>\r\n                    <input class="col-sm-12" name="destination" {{ if outBus.isConfirmAccount==1 }}disabled="disabled" {{else}} type="text" {{/if}} maxlength="20" value="{{outBus.destination}}" />\r\n                </td>\r\n                <td>\r\n                    <input class="col-sm-12 T-number price F-float F-money" name="fee" {{ if outBus.isConfirmAccount==1 }}disabled="disabled" {{else}} type="text" {{/if}} maxlength="9" value="{{outBus.fee}}" />\r\n                    <input type="hidden" class="count" value="1" />\r\n                </td>\r\n                <td>\r\n                    <input class="col-sm-12 T-number discount F-float F-money" name="reduceMoney" maxlength="9" {{ if outBus.isConfirmAccount==1 }}disabled="disabled" {{else}} type="text" {{/if}} value="{{outBus.reduceMoney}}" />\r\n                </td>\r\n                <td>\r\n                    <input class="col-sm-12 needPay F-float F-money" readonly="readonly" name="needPayMoney" maxlength="9" type="text" value="{{outBus.needPayMoney}}" />\r\n                </td>\r\n                <td>\r\n                    <input class="col-sm-12 T-number T-prePayMoney F-float F-money" name="prePayMoney" maxlength="9" {{ if outBus.isConfirmAccount==1 }}disabled="disabled" {{else}} type="text" {{/if}} value="{{outBus.prePayMoney}}" />\r\n                </td>\r\n                <td>\r\n                    <input type="text" name="collection" class="T-collection" data-type = "bus" readonly value="{{outBus.collection}}" data-isConfirmAccount="{{outBus.isConfirmAccount}}">\r\n                    <input type="hidden" name="collectionList"  value="">\r\n                </td>\r\n                <td>\r\n                    <input class="col-sm-12" name="remark" {{ if outBus.isConfirmAccount==1 }}disabled="disabled" {{else}} type="text" {{/if}} value="{{outBus.remark}}" maxlength="1000" />\r\n                </td>\r\n                <td>\r\n                    {{if outBus.isConfirmAccount == 0 }}未对账{{else}}已对账{{/if}}\r\n                </td>\r\n                <td>\r\n                    {{ if outBus.isConfirmAccount == 1 }}\r\n                    <a class="cursor" style="color:#bbb;" data-catename="bus" title="删除">删除</a> {{else}}\r\n                    <a class="cursor T-action T-arrange-delete" data-catename="bus" title="删除">删除</a> {{/if}}\r\n                </td>\r\n            </tr>\r\n            {{/each}}\r\n        </tbody>\r\n    </table>\r\n    <div class="col-md-12 text-center mar-t-20">\r\n        <button class="btn btn-sm btn-primary T-cancel"> <i class="ace-icon fa fa-times-circle"></i> 取消 </button>\r\n        <button class="btn btn-sm btn-primary mar-r-20  T-bus-save"> <i class="ace-icon fa fa-check-circle"></i> 提交信息 </button>\r\n        <span class="checkbox checkbox-inline mar-0" data-target="#transit_receive_bus">\r\n            <label>\r\n                <input name="status" type="checkbox" class="ace T-finishedArrange" {{if status == 1}}checked{{/if}}>\r\n                <span class="lbl font-w">安排完成</span>\r\n        </label>\r\n        </span>\r\n    </div>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});