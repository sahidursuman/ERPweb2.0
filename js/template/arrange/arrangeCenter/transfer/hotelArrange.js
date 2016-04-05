/*TMODJS:{"debug":true,"version":46,"md5":"78dcbd9eaae93acb6f952386ca652b55"}*/
define(function(require) {
    return require("/js/template/template")("arrange/arrangeCenter/transfer/hotelArrange", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, outRemarkList = $data.outRemarkList, $escape = ($data.hotelmain, 
            $data.$index, $utils.$escape), shuttleType = $data.shuttleType, outHotelList = $data.outHotelList, status = ($data.outHotel, 
            $data.status), $out = "";
            return $out += '<div class="T-planbus globalAdd "> ', $line = 2, $each(outRemarkList, function(hotelmain) {
                $out += ' <div class="form-group"> <input type="hidden" name="outRemarkIds" value="', 
                $line = 4, $out += $escape(hotelmain.outRemarkId), $out += '" /> <label class="control-label mar-r-20">中转单号：', 
                $line = 5, $out += $escape(hotelmain.orderNumber), $out += '</label> <label class="control-label mar-r-20">线路产品：', 
                $line = 6, $out += $escape(hotelmain.lineProductName), $out += '</label> <label class="control-label mar-r-20">用车时间：', 
                $line = 7, $out += $escape(hotelmain.arriveTime), $out += '</label> <label class="control-label mar-r-20">客人信息：<span class="F-float F-count">', 
                $line = 8, $out += $escape(hotelmain.adultCount), $out += '</span>大<span class="F-float F-count">', 
                $line = 8, $out += $escape(hotelmain.childCount), $out += '</span></label> <label class="control-label ">外联销售：<span class="F-float F-money">', 
                $line = 9, $out += $escape(hotelmain.outOPUserName), $out += '</span></label> </div> <div class="bg-gray form-group">现酒店计划要求：', 
                $line = 11, $out += $escape(hotelmain.require), $out += "</div> ", $line = 12;
            }), $out += ' <input type="hidden" name="shuttleType" value="', $line = 13, $out += $escape(shuttleType), 
            $out += '"> <div class="form-group form-inline"> <span class="mar-r-10 title-size">房</span> <button class="btn btn-sm btn-success T-add-hotel"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </div> <table class="table table-striped table-bordered table-hover hotelListTable margin-top" style="border:1px solid #ddd;"> <thead> <tr> <th class="th-border"><span class="necessary">*</span>入住日期</th> <th class="th-border"><span class="necessary">*</span>离店日期</th> <th class="th-border">星级</th> <th class="th-border"><span class="necessary">*</span>酒店</th> <th class="th-border">联系人</th> <th class="th-border">联系电话</th> <th class="th-border"><span class="necessary">*</span>房型</th> <th class="th-border">单价</th> <th class="th-border"><span class="necessary">*</span>数量</th> <th class="th-border">优惠</th> <th class="th-border">应付款</th> <th class="th-border">预付款</th> <th class="th-border">备注</th> <th class="th-border" style="width: 100px">操作</th> </tr> </thead> <tbody class="T-hotel-plan" id="hotelplan_body"> ', 
            $line = 38, $each(outHotelList, function(outHotel) {
                $out += ' <tr data-entity-id="', $line = 39, $out += $escape(outHotel.outHotelId), 
                $out += '"> <td> <input type="hidden" name="serviceType" value="1" /> <input class="col-sm-12 T-datepicker datepicker" name="checkInTime" value="', 
                $line = 42, null != outHotel.checkInTime && ($line = 42, $out += $escape($helpers.dateFormat(outHotel.checkInTime, "yyyy-MM-dd")), 
                $line = 42), $out += '" type="text" /> </td> <td> <input type="hidden" name="serviceType" value="1" /> <input class="col-sm-12 T-datePicker datepicker" name="checkOutTime" value="', 
                $line = 46, $out += $escape(outHotel.checkOutTime), $out += '" type="text" /></td> <td> <select class="tripPlanHotelStar" name="hotelLevel"> <option value="1" ', 
                $line = 49, 1 == outHotel.hotelLevel && ($out += 'selected="selected"', $line = 49), 
                $out += '>三星以下</option> <option value="2" ', $line = 50, 2 == outHotel.hotelLevel && ($out += 'selected="selected"', 
                $line = 50), $out += '>三星</option> <option value="3" ', $line = 51, 3 == outHotel.hotelLevel && ($out += 'selected="selected"', 
                $line = 51), $out += '>准四星</option> <option value="4" ', $line = 52, 4 == outHotel.hotelLevel && ($out += 'selected="selected"', 
                $line = 52), $out += '>四星</option> <option value="5" ', $line = 53, 5 == outHotel.hotelLevel && ($out += 'selected="selected"', 
                $line = 53), $out += '>准五星</option> <option value="6" ', $line = 54, 6 == outHotel.hotelLevel && ($out += 'selected="selected"', 
                $line = 54), $out += '>五星</option> <option value="7" ', $line = 55, 7 == outHotel.hotelLevel && ($out += 'selected="selected"', 
                $line = 55), $out += '>五星以上</option> </select> </td> <td> <div class="col-sm-12"> <input class="col-sm-12 T-chooseHotel bind-change" name="hotelName" value="', 
                $line = 60, $out += $escape(outHotel.hotelName), $out += '" type="text" /> <input type="hidden" name="hotelId" value="', 
                $line = 61, $out += $escape(outHotel.hotelId), $out += '" /> <span class="addResourceBtn T-addHotelResource" title="添加酒店"> <i class="ace-icon fa fa-plus bigger-110 icon-only"></i> </span> </div> </td> <td> <input class="col-sm-12" name="hotelManagerName" value="', 
                $line = 68, $out += $escape(outHotel.hotelManagerName), $out += '" readonly="readonly" type="text" /> </td> <td> <input class="col-sm-12" name="hotelMobileNumber" value="', 
                $line = 71, $out += $escape(outHotel.hotelMobileNumber), $out += '" readonly="readonly" type="text" /> </td> <td> <input class="col-sm-12 bind-change" name="hotelRoomType" value="', 
                $line = 74, $out += $escape(outHotel.hotelRoomType), $out += '" type="text" /> <input type="hidden" name="hotelRoomId" value="', 
                $line = 75, $out += $escape(outHotel.hotelRoomId), $out += '" /> </td> <td> <input class="col-sm-12 T-number price F-float F-money" name="price" maxlength="9" value="', 
                $line = 78, $out += $escape(outHotel.price), $out += '" type="text" /> </td> <td> <input class="col-sm-12 count F-float F-count" name="memberCount" maxlength="6" value="', 
                $line = 81, $out += $escape(outHotel.memberCount), $out += '" type="text" /> </td> <td> <input class="col-sm-12 T-number discount F-float F-money" name="reduceMoney" maxlength="9" value="', 
                $line = 84, $out += $escape(outHotel.reduceMoney), $out += '" type="text" /> </td> <td> <input class="col-sm-12 needPay F-float F-money" readonly="readonly" name="needPayMoney" value="', 
                $line = 87, $out += $escape(outHotel.needPayMoney), $out += '" type="text" /> </td> <td> <input class="col-sm-12 T-number T-prePayMoney F-float F-money" name="prePayMoney" maxlength="9" value="', 
                $line = 90, $out += $escape(outHotel.prePayMoney), $out += '" type="text" /> </td> <td><input class="col-sm-12" name="remark" type="text" value="', 
                $line = 92, $out += $escape(outHotel.remark), $out += '" maxlength="1000" /></td> <td> <a class="cursor T-arrange-delete" data-catename="hotel"> 删除 </a> </td> </tr> ', 
                $line = 99;
            }), $out += ' </tbody> </table> <div class="col-md-12 text-center mar-t-20"> <button class="btn btn-sm btn-primary T-cancel"> <i class="ace-icon fa fa-times-circle"></i> 取消 </button> <button class="btn btn-sm btn-primary mar-r-20 T-hotel-already T-hotel-save"> <i class="ace-icon fa fa-check-circle"></i> 提交信息 </button> <span class="checkbox checkbox-inline mar-0" data-target="#transit_receive_bus"> <label> <input name="status" type="checkbox" class="ace T-hotel-status" ', 
            $line = 107, 3 == status && ($out += "checked", $line = 107), $out += '> <span class="lbl font-w"> 房安排完成完成</span> </label> </span> </div> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="T-planbus globalAdd ">\r\n{{each outRemarkList as hotelmain}}\r\n    <div class="form-group"> \r\n        <input type="hidden" name="outRemarkIds" value="{{hotelmain.outRemarkId}}" />\r\n        <label class="control-label mar-r-20">中转单号：{{hotelmain.orderNumber}}</label>  \r\n        <label class="control-label mar-r-20">线路产品：{{hotelmain.lineProductName}}</label> \r\n        <label class="control-label mar-r-20">用车时间：{{hotelmain.arriveTime}}</label> \r\n        <label class="control-label mar-r-20">客人信息：<span class="F-float F-count">{{hotelmain.adultCount}}</span>大<span class="F-float F-count">{{hotelmain.childCount}}</span></label>\r\n        <label class="control-label ">外联销售：<span class="F-float F-money">{{hotelmain.outOPUserName}}</span></label>\r\n     </div>\r\n     <div class="bg-gray form-group">现酒店计划要求：{{hotelmain.require}}</div>\r\n{{/each}}\r\n<input type="hidden" name="shuttleType" value="{{shuttleType}}">\r\n    <div class="form-group form-inline">\r\n        <span class="mar-r-10 title-size">房</span>\r\n        <button class="btn btn-sm btn-success T-add-hotel"> <i class="ace-icon fa fa-plus"></i> 新增 </button>\r\n    </div>\r\n    <table class="table table-striped table-bordered table-hover hotelListTable margin-top"  style="border:1px solid #ddd;">\r\n        <thead>\r\n            <tr>\r\n                <th class="th-border"><span class="necessary">*</span>入住日期</th>\r\n                <th class="th-border"><span class="necessary">*</span>离店日期</th>\r\n                <th class="th-border">星级</th>\r\n                <th class="th-border"><span class="necessary">*</span>酒店</th>\r\n                <th class="th-border">联系人</th>\r\n                <th class="th-border">联系电话</th>\r\n                <th class="th-border"><span class="necessary">*</span>房型</th>\r\n                <th class="th-border">单价</th>\r\n                <th class="th-border"><span class="necessary">*</span>数量</th>\r\n                <th class="th-border">优惠</th>\r\n                <th class="th-border">应付款</th>\r\n                <th class="th-border">预付款</th>\r\n                <th class="th-border">备注</th>\r\n                <th class="th-border" style="width: 100px">操作</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-hotel-plan" id="hotelplan_body">\r\n        {{each outHotelList as outHotel}}\r\n            <tr data-entity-id="{{outHotel.outHotelId}}">\r\n                <td>\r\n                    <input type="hidden" name="serviceType" value="1" />\r\n                    <input class="col-sm-12 T-datepicker datepicker" name="checkInTime" value="{{if outHotel.checkInTime != null}}{{outHotel.checkInTime | dateFormat: \'yyyy-MM-dd\'}}{{/if}}" type="text" />\r\n                </td>\r\n                <td>\r\n                    <input type="hidden" name="serviceType" value="1" />\r\n                    <input class="col-sm-12 T-datePicker datepicker" name="checkOutTime" value="{{outHotel.checkOutTime}}" type="text" /></td>\r\n                <td>\r\n                    <select class="tripPlanHotelStar" name="hotelLevel">\r\n                        <option value="1" {{if outHotel.hotelLevel == 1}}selected="selected"{{/if}}>三星以下</option>\r\n                        <option value="2" {{if outHotel.hotelLevel == 2}}selected="selected"{{/if}}>三星</option>\r\n                        <option value="3" {{if outHotel.hotelLevel == 3}}selected="selected"{{/if}}>准四星</option>\r\n                        <option value="4" {{if outHotel.hotelLevel == 4}}selected="selected"{{/if}}>四星</option>\r\n                        <option value="5" {{if outHotel.hotelLevel == 5}}selected="selected"{{/if}}>准五星</option>\r\n                        <option value="6" {{if outHotel.hotelLevel == 6}}selected="selected"{{/if}}>五星</option>\r\n                        <option value="7" {{if outHotel.hotelLevel == 7}}selected="selected"{{/if}}>五星以上</option>\r\n                    </select>\r\n                </td>\r\n                <td>\r\n                    <div class="col-sm-12">\r\n                        <input class="col-sm-12 T-chooseHotel bind-change" name="hotelName" value="{{outHotel.hotelName}}" type="text" />\r\n                        <input type="hidden" name="hotelId" value="{{outHotel.hotelId}}" />\r\n                        <span class="addResourceBtn T-addHotelResource" title="添加酒店">\r\n                                <i class="ace-icon fa fa-plus bigger-110 icon-only"></i>\r\n                        </span>\r\n                    </div>\r\n                </td>\r\n                <td>\r\n                    <input class="col-sm-12" name="hotelManagerName" value="{{outHotel.hotelManagerName}}" readonly="readonly" type="text" />\r\n                    </td>\r\n                <td>\r\n                    <input class="col-sm-12" name="hotelMobileNumber" value="{{outHotel.hotelMobileNumber}}" readonly="readonly" type="text" />\r\n                </td>\r\n                <td>\r\n                    <input class="col-sm-12 bind-change" name="hotelRoomType" value="{{outHotel.hotelRoomType}}" type="text" />\r\n                    <input type="hidden" name="hotelRoomId" value="{{outHotel.hotelRoomId}}" />\r\n                </td>\r\n                <td>\r\n                    <input class="col-sm-12 T-number price F-float F-money" name="price"  maxlength="9" value="{{outHotel.price}}" type="text" />\r\n                </td>\r\n                <td>\r\n                    <input class="col-sm-12 count F-float F-count" name="memberCount"  maxlength="6" value="{{outHotel.memberCount}}" type="text" />\r\n                </td>\r\n                <td>\r\n                    <input class="col-sm-12 T-number discount F-float F-money" name="reduceMoney"  maxlength="9" value="{{outHotel.reduceMoney}}" type="text" />\r\n                </td>\r\n                <td>\r\n                    <input class="col-sm-12 needPay F-float F-money" readonly="readonly" name="needPayMoney" value="{{outHotel.needPayMoney}}" type="text" />\r\n                </td>\r\n                <td>\r\n                    <input class="col-sm-12 T-number T-prePayMoney F-float F-money" name="prePayMoney"  maxlength="9" value="{{outHotel.prePayMoney}}" type="text" />\r\n                </td>\r\n                <td><input class="col-sm-12" name="remark" type="text" value="{{outHotel.remark}}" maxlength="1000" /></td>\r\n                <td>\r\n                    <a class="cursor T-arrange-delete" data-catename="hotel">\r\n                        删除\r\n                    </a>\r\n                </td>\r\n            </tr>\r\n            {{/each}}\r\n        </tbody>\r\n    </table>\r\n    <div class="col-md-12 text-center mar-t-20">\r\n        <button class="btn btn-sm btn-primary T-cancel"> <i class="ace-icon fa fa-times-circle"></i> 取消 </button>\r\n        <button class="btn btn-sm btn-primary mar-r-20  T-hotel-already T-hotel-save"> <i class="ace-icon fa fa-check-circle"></i> 提交信息 </button>\r\n        <span class="checkbox checkbox-inline mar-0" data-target="#transit_receive_bus">\r\n            <label>\r\n                <input name="status" type="checkbox" class="ace T-hotel-status" {{if status == 3}}checked{{/if}}>\r\n                <span class="lbl font-w"> 房安排完成完成</span>\r\n            </label>\r\n        </span>\r\n    </div>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});