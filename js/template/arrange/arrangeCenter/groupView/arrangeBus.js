/*TMODJS:{"debug":true,"version":2,"md5":"7afddbd339669e0f2f5fa06e22177cfd"}*/
define(function(require) {
    return require("/js/template/template")("arrange/arrangeCenter/groupView/arrangeBus", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, basicInfo = $data.basicInfo, $escape = $utils.$escape, $each = $utils.$each, busCompanyList = $data.busCompanyList, $string = ($data.busCompany, 
            $data.$index, $utils.$string), $out = "";
            return $out += '<div class=" ui-sortable-handle"> <h5 class="title-size"> <i class="ace-icon fa fa-bus"></i> 车辆安排 <button class="btn btn-sm btn-success T-addResource T-addBus" style="margin-left: 20px"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </h5> ', 
            $line = 8, basicInfo.oldBusRequire && ($out += ' <p class="requirementsPlan">原车辆计划要求：', 
            $line = 9, $out += $escape(basicInfo.oldBusRequire), $out += "</p>", $line = 9), 
            $out += " ", $line = 9, basicInfo.nowBusRequire && ($out += ' <p class="requirementsPlan">现车辆计划要求：', 
            $line = 10, $out += $escape(basicInfo.nowBusRequire), $out += "</p>", $line = 10), 
            $out += ' <div style="overflow-x:auto;"> <div style="min-width:2500px;"> <table class="table table-striped table-bordered table-hover table-tripPlan-container"> <colgroup> <col style="width:100px"> <col style="width:100px"> <col style="width:60px;"> <col style="width:60px;"> <col style="width:110px;"> <col style="width:110px;"> <col style="width:110px;"> <col style="width:110px;"> <col style="width:150px;"> <col style="width:150px;"> <col style="width:80px;"> <col style="width:100px;"> <col style="width:110px;"> <col style="width:120px;"> <col style="width:80px;"> <col style="width:80px;"> <col style="width:80px;"> <col style="width:80px;"> <col style="width:150px;"> <col> <col style="width:100px;"> <col style="width:140px;"> </colgroup> <thead> <tr> <th class="th-border"><span class="necessary">*</span>开始日期</th> <th class="th-border"><span class="necessary">*</span>结束日期</th> <th class="th-border">任务</th> <th class="th-border">车座数</th> <th class="th-border">车辆品牌</th> <th class="th-border">车牌号</th> <th class="th-border"><span class="necessary">*</span>所属车队</th> <th class="th-border">联系电话</th> <th class="th-border">集合时间</th> <th class="th-border">集合地点</th> <th class="th-border" width="70">通知游客</th> <th class="th-border">司机</th> <th class="th-border">司机电话</th> <th class="th-border">合同号</th> <th class="th-border">车费</th> <th class="th-border">优惠</th> <th class="th-border">应付</th> <th class="th-border">预付款</th> <th class="th-border">计划导付</th> <th class="th-border">备注</th> <th class="th-border">状态</th> <th class="th-border" width="160px;">操作</th> </tr> </thead> <tbody> ', 
            $line = 65, $each(busCompanyList, function(busCompany) {
                $out += " ", $line = 65, ("[]" != busCompany || null != busCompany) && ($out += ' <tr data-entity-arrangeid="', 
                $line = 66, 1 == basicInfo.isArranged && ($line = 66, $out += $escape(busCompany.id), 
                $line = 66), $out += '" data-entity-busCompanyId="', $line = 66, busCompany.busCompany && ($line = 66, 
                $out += $escape(busCompany.busCompany.id), $line = 66), $out += '" data-entity-busId="', 
                $line = 66, busCompany.bus && ($line = 66, $out += $escape(busCompany.bus.id), $line = 66), 
                $out += '" data-entity-offerId="', $line = 66, $out += $escape(busCompany.offerId), 
                $out += '"> <td> <input type="text" name="startTime" class="datepicker T-busPriceC" ', 
                $line = 68, busCompany.offerId && ($out += 'disabled="disabled" ', $line = 68), 
                $out += ' value="', $line = 68, $out += $escape($helpers.dateFormat(busCompany.startTime, "yyyy-MM-dd")), 
                $out += '"> </td> <td> <input type="text" name="endTime" class="datepicker T-busPriceC" ', 
                $line = 71, busCompany.offerId && ($out += 'disabled="disabled" ', $line = 71), 
                $out += ' value="', $line = 71, $out += $escape($helpers.dateFormat(busCompany.endTime, "yyyy-MM-dd")), 
                $out += '"> </td> <td>', $line = 73, $out += $string($helpers.getTaskSelect(busCompany.taskType, !0)), 
                $out += '</td> <td> <input type="text" name="needSeatCount" ', $line = 75, busCompany.offerId && ($out += 'disabled="disabled" ', 
                $line = 75), $out += ' value="', $line = 75, $out += $escape(busCompany.needSeatCount), 
                $out += '" class="col-sm-12" style="width: 60px;" /> </td> <td> <input type="text" name="brand" ', 
                $line = 78, busCompany.offerId && ($out += 'disabled="disabled" ', $line = 78), 
                $out += ' value="', $line = 78, $out += $escape(busCompany.brand), $out += '" class="col-sm-12" /> </td> <td> <div class="col-xs-12 feild-relative"> <input type="text" name="licenseNumber" ', 
                $line = 82, busCompany.offerId && ($out += 'disabled="disabled" ', $line = 82), 
                $out += ' value="', $line = 82, null != busCompany.bus && ($line = 82, $out += $escape(busCompany.bus.licenseNumber), 
                $line = 82), $out += '" class="col-xs-12 T-busPriceC" /> <input type="hidden" value="', 
                $line = 83, null != busCompany.bus && ($line = 83, $out += $escape(busCompany.bus.id), 
                $line = 83), $out += '" name="busId" /> <span class="addResourceBtn T-addBusResource R-right" data-right="1020003" title="添加车辆"> <i class="ace-icon fa fa-plus bigger-110 icon-only"></i> </span> </div> </td> <td> <div class="col-xs-12 feild-relative"> <input type="text" name="companyName" ', 
                $line = 91, busCompany.offerId && ($out += 'disabled="disabled" ', $line = 91), 
                $out += ' value="', $line = 91, null != busCompany.busCompany && ($line = 91, $out += $escape(busCompany.busCompany.companyName), 
                $line = 91), $out += '" class="chooseBusCompany col-xs-12" /> <input type="hidden" name="id" value="', 
                $line = 92, 1 == basicInfo.isArranged && ($line = 92, $out += $escape(busCompany.id), 
                $line = 92), $out += '"> <input type="hidden" name="busCompanyId" value="', $line = 93, 
                null != busCompany.busCompany && ($line = 93, $out += $escape(busCompany.busCompany.id), 
                $line = 93), $out += '" /> <span class="addResourceBtn T-addBusCompanyResource R-right" data-right="1020002" title="添加车队"> <i class="ace-icon fa fa-plus bigger-110 icon-only"></i> </span> </div> </td> <td> <input type="text" name="mobileNumber" readonly="readonly" value="', 
                $line = 100, null != busCompany.busCompany && ($line = 100, $out += $escape(busCompany.busCompany.mobileNumber), 
                $line = 100), $out += '" class="col-sm-12" /> </td> <td> <input type="text" name="setPlaceTime" class="col-xs-12 T-dateTimePicker" value="', 
                $line = 103, 6 != busCompany.taskType && ($line = 103, $out += $escape(busCompany.setPlaceTime), 
                $line = 103), $out += '" ', $line = 103, 6 == busCompany.taskType && ($out += "disabled", 
                $line = 103), $out += '> </td> <td> <input type="text" name="setPlacePosition" class="col-xs-12" value="', 
                $line = 106, 6 != busCompany.taskType && ($line = 106, $out += $escape(busCompany.setPlacePosition), 
                $line = 106), $out += '" ', $line = 106, 6 == busCompany.taskType && ($out += "disabled", 
                $line = 106), $out += '> </td> <td><a class="T-noticeTourists" data-entity-touristgroup="', 
                $line = 108, $out += $escape(busCompany.annouceTouristGroupIds), $out += '">点击设置</a></td> <td> <div class="col-xs-12 feild-relative"> <input type="text" name="driverName" value="', 
                $line = 111, null != busCompany.driver && ($line = 111, $out += $escape(busCompany.driver.name), 
                $line = 111), $out += '" class="col-xs-12" /> <input type="hidden" name="driverId" value="', 
                $line = 112, null != busCompany.driver && ($line = 112, $out += $escape(busCompany.driver.id), 
                $line = 112), $out += '"> <span class="addResourceBtn T-addDriverResource R-right" data-right="1020003" title="添加司机"> <i class="ace-icon fa fa-plus bigger-110 icon-only"></i> </span> </div> </td> <td> <input type="text" name="driverMobileNumber" readonly="readonly" value="', 
                $line = 119, null != busCompany.driver && ($line = 119, $out += $escape(busCompany.driver.mobileNumber), 
                $line = 119), $out += '" class="col-sm-12" /> </td> <td> <input type="text" name="contractNumber" value="', 
                $line = 122, $out += $escape(busCompany.contractNumber), $out += '" maxlength="20" class="col-sm-12" /> </td> <td> <input type="text" name="price" value="', 
                $line = 125, $out += $escape(busCompany.price), $out += '" class="col-sm-12 price F-float F-money" maxlength="9" style="width: 60px;" /> <input type="hidden" name="memberCount" value="1" /> </td> <td> <input type="text" name="reduceMoney" value="', 
                $line = 129, $out += $escape(busCompany.reduceMoney), $out += '" class="col-sm-12 price F-float F-money" maxlength="9" /> </td> <td> <input type="text" name="needPayMoney" readonly="readonly" value="', 
                $line = 132, $out += $escape(busCompany.needPayMoney), $out += '" maxlength="9" class="col-sm-12 F-float F-money" /> </td> <td> <input type="text" name="prePayMoney" value="', 
                $line = 135, $out += $escape(busCompany.prePayMoney), $out += '" class="col-sm-12 price F-float F-money" maxlength="9" /> </td> <td class="inline-flex">', 
                $line = 137, $out += $string($helpers.getPlanPayTypeOption(busCompany.payType)), 
                $out += ' <input name="guidePayMoney" type="text" value="', $line = 138, 1 == basicInfo.isArranged ? ($line = 138, 
                2 == busCompany.payType ? ($line = 138, $out += $escape(busCompany.signMoney), $line = 138) : ($line = 138, 
                $out += $escape(busCompany.guidePayMoney), $line = 138), $line = 138) : ($line = 138, 
                $out += $escape(busCompany.price), $line = 138), $out += '" maxlength="9" class="F-float F-money" /> </td> <td> <input name="remark" type="text" value="', 
                $line = 141, $out += $escape(busCompany.remark), $out += '" class="col-sm-12" maxlength="500" /> </td> <td> <select name="orderStatus"> <option value="1" ', 
                $line = 145, 1 == busCompany.orderStatus && ($out += 'selected="selected" ', $line = 145), 
                $out += '>未预定</option> <option value="2" ', $line = 146, 2 == busCompany.orderStatus && ($out += 'selected="selected" ', 
                $line = 146), $out += '>预定中</option> <option value="3" ', $line = 147, 3 == busCompany.orderStatus && ($out += 'selected="selected" ', 
                $line = 147), $out += '>已预订</option> <option value="0" ', $line = 148, 0 == busCompany.orderStatus && ($out += 'selected="selected" ', 
                $line = 148), $out += '>无需预定</option> </select> </td> <td> <a class="cursor T-bus-action T-bus-askPrice">询价</a><a class="cursor T-bus-action T-bus-offerStatus"><i class="ace-icon fa fa-search"></i></a> <a class="cursor T-bus-action T-bus-bookingStatus ', 
                $line = 153, 1 == busCompany.inquiryStatus && ($out += "T-bus-booking", $line = 153), 
                $out += '" ', $line = 153, 1 != busCompany.inquiryStatus && ($out += 'style="color: #bbb" ', 
                $line = 153), $out += '>预订</a><a class="cursor T-bus-action T-bus-bookingView"><i class="ace-icon fa fa-search"></i></a> <a class="cursor T-hotel-action T-btn-deleteTripPlanList" data-entity-ispayed="', 
                $line = 154, $out += $escape(busCompany.financialMoney), $out += '" title="删除" data-entity-name="busCompany">删除</a> </td> ', 
                $line = 156, null != busCompany.offerId && ($out += ' <!-- <td> <a class="cursor T-bus-SendOrder T-sendOrder-Area R-right T-action" data-value=\'', 
                $line = 158, $out += $escape(busCompany.qouteId), $out += '\' data-right="1450001" data-entity-offerId=', 
                $line = 158, $out += $escape(busCompany.offerId), $out += "> 发送订单 </a> </td> --> ", 
                $line = 162), $out += " </tr> ", $line = 164), $out += " ", $line = 164;
            }), $out += " </tbody> </table> </div> </div> </div>", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class=" ui-sortable-handle">\r\n    <h5 class="title-size">\r\n        <i class="ace-icon fa fa-bus"></i> 车辆安排\r\n        <button class="btn btn-sm btn-success T-addResource T-addBus" style="margin-left: 20px">\r\n            <i class="ace-icon fa fa-plus"></i>\r\n            新增\r\n        </button>\r\n    </h5> {{if basicInfo.oldBusRequire}}\r\n    <p class="requirementsPlan">原车辆计划要求：{{basicInfo.oldBusRequire}}</p>{{/if}} {{if basicInfo.nowBusRequire}}\r\n    <p class="requirementsPlan">现车辆计划要求：{{basicInfo.nowBusRequire}}</p>{{/if}}\r\n    <div style="overflow-x:auto;">\r\n        <div style="min-width:2500px;">\r\n            <table class="table table-striped table-bordered table-hover table-tripPlan-container">\r\n                <colgroup>\r\n                    <col style="width:100px">\r\n                    <col style="width:100px">\r\n                    <col style="width:60px;">\r\n                    <col style="width:60px;">\r\n                    <col style="width:110px;">\r\n                    <col style="width:110px;">\r\n                    <col style="width:110px;">\r\n                    <col style="width:110px;">\r\n                    <col style="width:150px;">\r\n                    <col style="width:150px;">\r\n                    <col style="width:80px;">\r\n                    <col style="width:100px;">\r\n                    <col style="width:110px;">\r\n                    <col style="width:120px;">\r\n                    <col style="width:80px;">\r\n                    <col style="width:80px;">\r\n                    <col style="width:80px;">\r\n                    <col style="width:80px;">\r\n                    <col style="width:150px;">\r\n                    <col>\r\n                    <col style="width:100px;">\r\n                    <col style="width:140px;">\r\n                </colgroup>\r\n                <thead>\r\n                    <tr>\r\n                        <th class="th-border"><span class="necessary">*</span>开始日期</th>\r\n                        <th class="th-border"><span class="necessary">*</span>结束日期</th>\r\n                        <th class="th-border">任务</th>\r\n                        <th class="th-border">车座数</th>\r\n                        <th class="th-border">车辆品牌</th>\r\n                        <th class="th-border">车牌号</th>\r\n                        <th class="th-border"><span class="necessary">*</span>所属车队</th>\r\n                        <th class="th-border">联系电话</th>\r\n                        <th class="th-border">集合时间</th>\r\n                        <th class="th-border">集合地点</th>\r\n                        <th class="th-border" width="70">通知游客</th>\r\n                        <th class="th-border">司机</th>\r\n                        <th class="th-border">司机电话</th>\r\n                        <th class="th-border">合同号</th>\r\n                        <th class="th-border">车费</th>\r\n                        <th class="th-border">优惠</th>\r\n                        <th class="th-border">应付</th>\r\n                        <th class="th-border">预付款</th>\r\n                        <th class="th-border">计划导付</th>\r\n                        <th class="th-border">备注</th>\r\n                        <th class="th-border">状态</th>\r\n                        <th class="th-border" width="160px;">操作</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    {{each busCompanyList as busCompany}} {{if busCompany != "[]" || busCompany != null}}\r\n                    <tr data-entity-arrangeid="{{if basicInfo.isArranged == 1}}{{busCompany.id}}{{/if}}" data-entity-busCompanyId="{{if !!busCompany.busCompany}}{{busCompany.busCompany.id}}{{/if}}" data-entity-busId="{{if !!busCompany.bus}}{{busCompany.bus.id}}{{/if}}" data-entity-offerId="{{busCompany.offerId}}">\r\n                        <td>\r\n                            <input type="text" name="startTime" class="datepicker T-busPriceC" {{if !!busCompany.offerId}}disabled="disabled" {{/if}} value="{{busCompany.startTime | dateFormat:\'yyyy-MM-dd\'}}">\r\n                        </td>\r\n                        <td>\r\n                            <input type="text" name="endTime" class="datepicker T-busPriceC" {{if !!busCompany.offerId}}disabled="disabled" {{/if}} value="{{busCompany.endTime | dateFormat:\'yyyy-MM-dd\'}}">\r\n                        </td>\r\n                        <td>{{#busCompany.taskType | getTaskSelect:true}}</td>\r\n                        <td>\r\n                            <input type="text" name="needSeatCount" {{if !!busCompany.offerId}}disabled="disabled" {{/if}} value="{{busCompany.needSeatCount}}" class="col-sm-12" style="width: 60px;" />\r\n                        </td>\r\n                        <td>\r\n                            <input type="text" name="brand" {{if !!busCompany.offerId}}disabled="disabled" {{/if}} value="{{busCompany.brand}}" class="col-sm-12" />\r\n                        </td>\r\n                        <td>\r\n                            <div class="col-xs-12 feild-relative">\r\n                                <input type="text" name="licenseNumber" {{if !!busCompany.offerId}}disabled="disabled" {{/if}} value="{{if busCompany.bus != null}}{{busCompany.bus.licenseNumber}}{{/if}}" class="col-xs-12 T-busPriceC" />\r\n                                <input type="hidden" value="{{if busCompany.bus != null}}{{busCompany.bus.id}}{{/if}}" name="busId" />\r\n                                <span class="addResourceBtn T-addBusResource R-right" data-right="1020003" title="添加车辆">\r\n                                        <i class="ace-icon fa fa-plus bigger-110 icon-only"></i>\r\n                                    </span>\r\n                            </div>\r\n                        </td>\r\n                        <td>\r\n                            <div class="col-xs-12 feild-relative">\r\n                                <input type="text" name="companyName" {{if !!busCompany.offerId}}disabled="disabled" {{/if}} value="{{if busCompany.busCompany != null}}{{busCompany.busCompany.companyName}}{{/if}}" class="chooseBusCompany col-xs-12" />\r\n                                <input type="hidden" name="id" value="{{if basicInfo.isArranged == 1}}{{busCompany.id}}{{/if}}">\r\n                                <input type="hidden" name="busCompanyId" value="{{if busCompany.busCompany != null}}{{busCompany.busCompany.id}}{{/if}}" />\r\n                                <span class="addResourceBtn T-addBusCompanyResource R-right" data-right="1020002" title="添加车队">\r\n                                        <i class="ace-icon fa fa-plus bigger-110 icon-only"></i>\r\n                                    </span>\r\n                            </div>\r\n                        </td>\r\n                        <td>\r\n                            <input type="text" name="mobileNumber" readonly="readonly" value="{{if busCompany.busCompany != null}}{{busCompany.busCompany.mobileNumber}}{{/if}}" class="col-sm-12" />\r\n                        </td>\r\n                        <td>\r\n                            <input type="text" name="setPlaceTime" class="col-xs-12 T-dateTimePicker" value="{{if busCompany.taskType != 6}}{{busCompany.setPlaceTime}}{{/if}}" {{if busCompany.taskType==6 }}disabled{{/if}}>\r\n                        </td>\r\n                        <td>\r\n                            <input type="text" name="setPlacePosition" class="col-xs-12" value="{{if busCompany.taskType != 6}}{{busCompany.setPlacePosition}}{{/if}}" {{if busCompany.taskType==6 }}disabled{{/if}}>\r\n                        </td>\r\n                        <td><a class="T-noticeTourists" data-entity-touristgroup="{{busCompany.annouceTouristGroupIds}}">点击设置</a></td>\r\n                        <td>\r\n                            <div class="col-xs-12 feild-relative">\r\n                                <input type="text" name="driverName" value="{{if busCompany.driver != null}}{{busCompany.driver.name}}{{/if}}" class="col-xs-12" />\r\n                                <input type="hidden" name="driverId" value="{{if busCompany.driver != null}}{{busCompany.driver.id}}{{/if}}">\r\n                                <span class="addResourceBtn T-addDriverResource R-right" data-right="1020003" title="添加司机">\r\n                                        <i class="ace-icon fa fa-plus bigger-110 icon-only"></i>\r\n                                    </span>\r\n                            </div>\r\n                        </td>\r\n                        <td>\r\n                            <input type="text" name="driverMobileNumber" readonly="readonly" value="{{if busCompany.driver != null}}{{busCompany.driver.mobileNumber}}{{/if}}" class="col-sm-12" />\r\n                        </td>\r\n                        <td>\r\n                            <input type="text" name="contractNumber" value="{{busCompany.contractNumber}}" maxlength="20" class="col-sm-12" />\r\n                        </td>\r\n                        <td>\r\n                            <input type="text" name="price" value="{{busCompany.price}}" class="col-sm-12 price F-float F-money" maxlength="9" style="width: 60px;" />\r\n                            <input type="hidden" name="memberCount" value="1" />\r\n                        </td>\r\n                        <td>\r\n                            <input type="text" name="reduceMoney" value="{{busCompany.reduceMoney}}" class="col-sm-12 price F-float F-money" maxlength="9" />\r\n                        </td>\r\n                        <td>\r\n                            <input type="text" name="needPayMoney" readonly="readonly" value="{{busCompany.needPayMoney}}" maxlength="9" class="col-sm-12 F-float F-money" />\r\n                        </td>\r\n                        <td>\r\n                            <input type="text" name="prePayMoney" value="{{busCompany.prePayMoney}}" class="col-sm-12 price F-float F-money" maxlength="9" />\r\n                        </td>\r\n                        <td class="inline-flex">{{#busCompany.payType | getPlanPayTypeOption}}\r\n                            <input name="guidePayMoney" type="text" value="{{if basicInfo.isArranged == 1}}{{if busCompany.payType == 2}}{{busCompany.signMoney}}{{else}}{{busCompany.guidePayMoney}}{{/if}}{{else}}{{busCompany.price}}{{/if}}" maxlength="9" class="F-float F-money" />\r\n                        </td>\r\n                        <td>\r\n                            <input name="remark" type="text" value="{{busCompany.remark}}" class="col-sm-12" maxlength="500" />\r\n                        </td>\r\n                        <td>\r\n                            <select name="orderStatus">\r\n                                <option value="1" {{if busCompany.orderStatus==1 }}selected="selected" {{/if}}>未预定</option>\r\n                                <option value="2" {{if busCompany.orderStatus==2 }}selected="selected" {{/if}}>预定中</option>\r\n                                <option value="3" {{if busCompany.orderStatus==3 }}selected="selected" {{/if}}>已预订</option>\r\n                                <option value="0" {{if busCompany.orderStatus==0 }}selected="selected" {{/if}}>无需预定</option>\r\n                            </select>\r\n                        </td>\r\n                        <td>\r\n                            <a class="cursor T-bus-action T-bus-askPrice">询价</a><a class="cursor T-bus-action T-bus-offerStatus"><i class="ace-icon fa fa-search"></i></a>\r\n                            <a class="cursor T-bus-action T-bus-bookingStatus {{if busCompany.inquiryStatus == 1}}T-bus-booking{{/if}}" {{if busCompany.inquiryStatus !=1 }}style="color: #bbb" {{/if}}>预订</a><a class="cursor T-bus-action T-bus-bookingView"><i class="ace-icon fa fa-search"></i></a>\r\n                            <a class="cursor T-hotel-action T-btn-deleteTripPlanList" data-entity-ispayed="{{busCompany.financialMoney}}" title="删除" data-entity-name="busCompany">删除</a>\r\n                        </td>\r\n                        {{if busCompany.offerId!=null}}\r\n                        <!-- <td>\r\n                                <a class="cursor T-bus-SendOrder T-sendOrder-Area R-right T-action" data-value=\'{{busCompany.qouteId}}\' data-right="1450001" data-entity-offerId={{busCompany.offerId}}>\r\n                                发送订单\r\n                               </a>\r\n                            </td> -->\r\n                        {{/if}}\r\n                    </tr>\r\n                    {{/if}} {{/each}}\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});