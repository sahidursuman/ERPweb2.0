/*TMODJS:{"debug":true,"version":60,"md5":"705e618c92ce65b7279b015720b21d4e"}*/
define(function(require) {
    return require("/js/template/template")("arrange/arrangeCenter/transferView/hotelArrange", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, outRemarkList = $data.outRemarkList, $escape = ($data.item, 
            $data.$index, $utils.$escape), taskSize = $data.taskSize, unifyId = $data.unifyId, shuttleType = $data.shuttleType, outHotelList = $data.outHotelList, isConfirmAccount = ($data.outHotel, 
            $data.isConfirmAccount), status = $data.status, $out = "";
            return $out += '<div class="T-planbus globalAdd "> <button class="btn btn-sm btn-success mar-b-10 T-add-task"> <i class="ace-icon fa fa-plus"></i> 添加安排 </button> <table class="table table-striped table-bordered"> <thead> <th class="th-border">中转信息及计划要求</th> <th class="th-border">操作</th> </thead> <tbody class="T-task-list"> ', 
            $line = 10, $each(outRemarkList, function(item) {
                $out += ' <tr> <td style="text-align: left;"> <input type="hidden" name="outRemarkId" value="', 
                $line = 13, $out += $escape(item.id), $out += '"> <label class="control-label mar-r-20">中转单号：', 
                $line = 14, $out += $escape(item.orderNumber), $out += '</label> <label class="control-label mar-r-20">线路产品：', 
                $line = 15, $out += $escape(item.lineProductName), $out += '</label> <label class="control-label mar-r-20">用车时间：', 
                $line = 16, $out += $escape(item.arriveTime), $out += '</label> <label class="control-label mar-r-20">客人信息：<span class="F-float F-count">', 
                $line = 17, $out += $escape(item.adultCount), $out += '</span>大<span class="F-float F-count">', 
                $line = 17, $out += $escape(item.childCount), $out += '</span></label> <label class="control-label ">外联销售：<span class="F-float F-money">', 
                $line = 18, $out += $escape(item.outOPUserName), $out += '</span></label> </td> <td rowspan="2"> <a class="cursor T-action ', 
                $line = 21, taskSize > 1 && ($out += "T-delete-task ", $line = 21), $out += '" ', 
                $line = 21, 1 >= taskSize && ($out += ' disabled="disabled" ', $line = 21), $out += 'title="删除"> 删除 </a> </td> </tr> <tr> <td class="bg-gray form-group" style="text-align: left;">现车辆计划要求：', 
                $line = 27, $out += $escape(item.require), $out += "</td> </tr> ", $line = 29;
            }), $out += ' </tbody> </table> <input type="hidden" name="unifyId" value="', $line = 32, 
            $out += $escape(unifyId), $out += '"> <input type="hidden" name="shuttleType" value="', 
            $line = 33, $out += $escape(shuttleType), $out += '"> <div class="form-group form-inline"> <span class="mar-r-10 title-size">房</span> <button class="btn btn-sm btn-success T-add-hotel"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </div> <table class="table table-striped table-bordered table-hover hotelListTable margin-top" style="border:1px solid #ddd;"> <thead> <tr> <th class="th-border"><span class="necessary">*</span>入住日期</th> <th class="th-border"><span class="necessary">*</span>离店日期</th> <th class="th-border">星级</th> <th class="th-border"><span class="necessary">*</span>酒店</th> <th class="th-border">联系人</th> <th class="th-border">联系电话</th> <th class="th-border"><span class="necessary">*</span>房型</th> <th class="th-border">单价</th> <th class="th-border"><span class="necessary">*</span>数量</th> <th class="th-border">优惠</th> <th class="th-border">应付款</th> <th class="th-border">预付款</th> <th class="th-border">备注</th> <th class="th-border">对账状态</th> <th class="th-border" style="width: 100px">操作</th> </tr> </thead> <tbody class="T-hotel-plan" id="hotelplan_body"> ', 
            $line = 59, $each(outHotelList, function(outHotel) {
                $out += ' <tr data-entity-id="', $line = 60, $out += $escape(outHotel.outHotelId), 
                $out += '"> <td> <input type="hidden" name="serviceType" value="1" /> <input class="col-sm-12 T-datepicker datepicker" name="checkInTime" value="', 
                $line = 63, null != outHotel.checkInTime && ($line = 63, $out += $escape($helpers.dateFormat(outHotel.checkInTime, "yyyy-MM-dd")), 
                $line = 63), $out += '" type="text" /> </td> <td> <input type="hidden" name="serviceType" value="1" /> <input class="col-sm-12 T-datePicker datepicker" name="checkOutTime" value="', 
                $line = 67, $out += $escape(outHotel.checkOutTime), $out += '" type="text" /></td> <td> <select class="tripPlanHotelStar" name="hotelLevel"> <option value="1" ', 
                $line = 70, 1 == outHotel.hotelLevel && ($out += 'selected="selected"', $line = 70), 
                $out += '>三星以下</option> <option value="2" ', $line = 71, 2 == outHotel.hotelLevel && ($out += 'selected="selected"', 
                $line = 71), $out += '>三星</option> <option value="3" ', $line = 72, 3 == outHotel.hotelLevel && ($out += 'selected="selected"', 
                $line = 72), $out += '>准四星</option> <option value="4" ', $line = 73, 4 == outHotel.hotelLevel && ($out += 'selected="selected"', 
                $line = 73), $out += '>四星</option> <option value="5" ', $line = 74, 5 == outHotel.hotelLevel && ($out += 'selected="selected"', 
                $line = 74), $out += '>准五星</option> <option value="6" ', $line = 75, 6 == outHotel.hotelLevel && ($out += 'selected="selected"', 
                $line = 75), $out += '>五星</option> <option value="7" ', $line = 76, 7 == outHotel.hotelLevel && ($out += 'selected="selected"', 
                $line = 76), $out += '>五星以上</option> </select> </td> <td> <div class="col-sm-12"> <input class="col-sm-12 T-chooseHotel bind-change" name="hotelName" value="', 
                $line = 81, $out += $escape(outHotel.hotelName), $out += '" type="text" /> <input type="hidden" name="hotelId" value="', 
                $line = 82, $out += $escape(outHotel.hotelId), $out += '" /> <span class="addResourceBtn T-addHotelResource" title="添加酒店"> <i class="ace-icon fa fa-plus bigger-110 icon-only"></i> </span> </div> </td> <td> <input class="col-sm-12" name="hotelManagerName" value="', 
                $line = 89, $out += $escape(outHotel.hotelManagerName), $out += '" readonly="readonly" type="text" /> </td> <td> <input class="col-sm-12" name="hotelMobileNumber" value="', 
                $line = 92, $out += $escape(outHotel.hotelMobileNumber), $out += '" readonly="readonly" type="text" /> </td> <td> <input class="col-sm-12 bind-change" name="hotelRoomType" value="', 
                $line = 95, $out += $escape(outHotel.hotelRoomType), $out += '" type="text" /> <input type="hidden" name="hotelRoomId" value="', 
                $line = 96, $out += $escape(outHotel.hotelRoomId), $out += '" /> </td> <td> <input class="col-sm-12 T-number price F-float F-money" name="price" maxlength="9" value="', 
                $line = 99, $out += $escape(outHotel.price), $out += '" type="text" /> </td> <td> <input class="col-sm-12 count F-float F-count" name="memberCount" maxlength="6" value="', 
                $line = 102, $out += $escape(outHotel.memberCount), $out += '" type="text" /> </td> <td> <input class="col-sm-12 T-number discount F-float F-money" name="reduceMoney" maxlength="9" value="', 
                $line = 105, $out += $escape(outHotel.reduceMoney), $out += '" type="text" /> </td> <td> <input class="col-sm-12 needPay F-float F-money" readonly="readonly" name="needPayMoney" value="', 
                $line = 108, $out += $escape(outHotel.needPayMoney), $out += '" type="text" /> </td> <td> <input class="col-sm-12 T-number T-prePayMoney F-float F-money" name="prePayMoney" maxlength="9" value="', 
                $line = 111, $out += $escape(outHotel.prePayMoney), $out += '" type="text" /> </td> <td><input class="col-sm-12" name="remark" type="text" value="', 
                $line = 113, $out += $escape(outHotel.remark), $out += '" maxlength="1000" /></td> <td>', 
                $line = 114, 1 == isConfirmAccount ? ($out += "已对账", $line = 114) : 0 == isConfirmAccount && ($out += "未对账", 
                $line = 114), $out += '</td> <td> <a class="cursor T-arrange-delete" data-catename="hotel"> 删除 </a> </td> </tr> ', 
                $line = 121;
            }), $out += ' </tbody> </table> <div class="col-md-12 text-center mar-t-20"> <button class="btn btn-sm btn-primary T-cancel"> <i class="ace-icon fa fa-times-circle"></i> 取消 </button> <button class="btn btn-sm btn-primary mar-r-20 T-hotel-already T-hotel-save"> <i class="ace-icon fa fa-check-circle"></i> 提交信息 </button> <span class="checkbox checkbox-inline mar-0" data-target="#transit_receive_bus"> <label> <input name="status" type="checkbox" class="ace T-hotel-status" ', 
            $line = 129, 3 == status && ($out += "checked", $line = 129), $out += '> <span class="lbl font-w"> 安排完成</span> </label> </span> </div> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="T-planbus globalAdd ">\r\n<button class="btn btn-sm btn-success mar-b-10 T-add-task"> <i class="ace-icon fa fa-plus"></i> 添加安排 </button>\r\n\r\n<table class="table table-striped table-bordered">\r\n    <thead>\r\n        <th class="th-border">中转信息及计划要求</th>\r\n        <th class="th-border">操作</th>\r\n    </thead>\r\n    <tbody class="T-task-list">\r\n        {{each outRemarkList as item}}\r\n        <tr>\r\n            <td style="text-align: left;">\r\n                <input type="hidden" name="outRemarkId" value="{{item.id}}">\r\n                <label class="control-label mar-r-20">中转单号：{{item.orderNumber}}</label>\r\n                <label class="control-label mar-r-20">线路产品：{{item.lineProductName}}</label>\r\n                <label class="control-label mar-r-20">用车时间：{{item.arriveTime}}</label>\r\n                <label class="control-label mar-r-20">客人信息：<span class="F-float F-count">{{item.adultCount}}</span>大<span class="F-float F-count">{{item.childCount}}</span></label>\r\n                <label class="control-label ">外联销售：<span class="F-float F-money">{{item.outOPUserName}}</span></label>\r\n            </td>\r\n            <td rowspan="2">\r\n                <a class="cursor T-action {{if taskSize > 1}}T-delete-task {{/if}}" {{if taskSize <= 1}} disabled="disabled" {{/if}}title="删除">\r\n                    删除\r\n                </a>\r\n            </td>\r\n        </tr>\r\n        <tr>\r\n            <td class="bg-gray form-group"  style="text-align: left;">现车辆计划要求：{{item.require}}</td>\r\n        </tr>\r\n        {{/each}}\r\n    </tbody>        \r\n</table>\r\n<input type="hidden" name="unifyId" value="{{unifyId}}">\r\n<input type="hidden" name="shuttleType" value="{{shuttleType}}">\r\n    <div class="form-group form-inline">\r\n        <span class="mar-r-10 title-size">房</span>\r\n        <button class="btn btn-sm btn-success T-add-hotel"> <i class="ace-icon fa fa-plus"></i> 新增 </button>\r\n    </div>\r\n    <table class="table table-striped table-bordered table-hover hotelListTable margin-top"  style="border:1px solid #ddd;">\r\n        <thead>\r\n            <tr>\r\n                <th class="th-border"><span class="necessary">*</span>入住日期</th>\r\n                <th class="th-border"><span class="necessary">*</span>离店日期</th>\r\n                <th class="th-border">星级</th>\r\n                <th class="th-border"><span class="necessary">*</span>酒店</th>\r\n                <th class="th-border">联系人</th>\r\n                <th class="th-border">联系电话</th>\r\n                <th class="th-border"><span class="necessary">*</span>房型</th>\r\n                <th class="th-border">单价</th>\r\n                <th class="th-border"><span class="necessary">*</span>数量</th>\r\n                <th class="th-border">优惠</th>\r\n                <th class="th-border">应付款</th>\r\n                <th class="th-border">预付款</th>\r\n                <th class="th-border">备注</th>\r\n                <th class="th-border">对账状态</th>\r\n                <th class="th-border" style="width: 100px">操作</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-hotel-plan" id="hotelplan_body">\r\n        {{each outHotelList as outHotel}}\r\n            <tr data-entity-id="{{outHotel.outHotelId}}">\r\n                <td>\r\n                    <input type="hidden" name="serviceType" value="1" />\r\n                    <input class="col-sm-12 T-datepicker datepicker" name="checkInTime" value="{{if outHotel.checkInTime != null}}{{outHotel.checkInTime | dateFormat: \'yyyy-MM-dd\'}}{{/if}}" type="text" />\r\n                </td>\r\n                <td>\r\n                    <input type="hidden" name="serviceType" value="1" />\r\n                    <input class="col-sm-12 T-datePicker datepicker" name="checkOutTime" value="{{outHotel.checkOutTime}}" type="text" /></td>\r\n                <td>\r\n                    <select class="tripPlanHotelStar" name="hotelLevel">\r\n                        <option value="1" {{if outHotel.hotelLevel == 1}}selected="selected"{{/if}}>三星以下</option>\r\n                        <option value="2" {{if outHotel.hotelLevel == 2}}selected="selected"{{/if}}>三星</option>\r\n                        <option value="3" {{if outHotel.hotelLevel == 3}}selected="selected"{{/if}}>准四星</option>\r\n                        <option value="4" {{if outHotel.hotelLevel == 4}}selected="selected"{{/if}}>四星</option>\r\n                        <option value="5" {{if outHotel.hotelLevel == 5}}selected="selected"{{/if}}>准五星</option>\r\n                        <option value="6" {{if outHotel.hotelLevel == 6}}selected="selected"{{/if}}>五星</option>\r\n                        <option value="7" {{if outHotel.hotelLevel == 7}}selected="selected"{{/if}}>五星以上</option>\r\n                    </select>\r\n                </td>\r\n                <td>\r\n                    <div class="col-sm-12">\r\n                        <input class="col-sm-12 T-chooseHotel bind-change" name="hotelName" value="{{outHotel.hotelName}}" type="text" />\r\n                        <input type="hidden" name="hotelId" value="{{outHotel.hotelId}}" />\r\n                        <span class="addResourceBtn T-addHotelResource" title="添加酒店">\r\n                                <i class="ace-icon fa fa-plus bigger-110 icon-only"></i>\r\n                        </span>\r\n                    </div>\r\n                </td>\r\n                <td>\r\n                    <input class="col-sm-12" name="hotelManagerName" value="{{outHotel.hotelManagerName}}" readonly="readonly" type="text" />\r\n                    </td>\r\n                <td>\r\n                    <input class="col-sm-12" name="hotelMobileNumber" value="{{outHotel.hotelMobileNumber}}" readonly="readonly" type="text" />\r\n                </td>\r\n                <td>\r\n                    <input class="col-sm-12 bind-change" name="hotelRoomType" value="{{outHotel.hotelRoomType}}" type="text" />\r\n                    <input type="hidden" name="hotelRoomId" value="{{outHotel.hotelRoomId}}" />\r\n                </td>\r\n                <td>\r\n                    <input class="col-sm-12 T-number price F-float F-money" name="price"  maxlength="9" value="{{outHotel.price}}" type="text" />\r\n                </td>\r\n                <td>\r\n                    <input class="col-sm-12 count F-float F-count" name="memberCount"  maxlength="6" value="{{outHotel.memberCount}}" type="text" />\r\n                </td>\r\n                <td>\r\n                    <input class="col-sm-12 T-number discount F-float F-money" name="reduceMoney"  maxlength="9" value="{{outHotel.reduceMoney}}" type="text" />\r\n                </td>\r\n                <td>\r\n                    <input class="col-sm-12 needPay F-float F-money" readonly="readonly" name="needPayMoney" value="{{outHotel.needPayMoney}}" type="text" />\r\n                </td>\r\n                <td>\r\n                    <input class="col-sm-12 T-number T-prePayMoney F-float F-money" name="prePayMoney"  maxlength="9" value="{{outHotel.prePayMoney}}" type="text" />\r\n                </td>\r\n                <td><input class="col-sm-12" name="remark" type="text" value="{{outHotel.remark}}" maxlength="1000" /></td>\r\n                 <td>{{if isConfirmAccount == 1}}已对账{{else if isConfirmAccount == 0}}未对账{{/if}}</td>\r\n                <td>\r\n                    <a class="cursor T-arrange-delete" data-catename="hotel">\r\n                        删除\r\n                    </a>\r\n                </td>\r\n            </tr>\r\n            {{/each}}\r\n        </tbody>\r\n    </table>\r\n    <div class="col-md-12 text-center mar-t-20">\r\n        <button class="btn btn-sm btn-primary T-cancel"> <i class="ace-icon fa fa-times-circle"></i> 取消 </button>\r\n        <button class="btn btn-sm btn-primary mar-r-20  T-hotel-already T-hotel-save"> <i class="ace-icon fa fa-check-circle"></i> 提交信息 </button>\r\n        <span class="checkbox checkbox-inline mar-0" data-target="#transit_receive_bus">\r\n            <label>\r\n                <input name="status" type="checkbox" class="ace T-hotel-status" {{if status == 3}}checked{{/if}}>\r\n                <span class="lbl font-w"> 安排完成</span>\r\n            </label>\r\n        </span>\r\n    </div>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});