/*TMODJS:{"debug":true,"version":34,"md5":"8a6bdcfdbc20f241177ec6f0179fd25d"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeCenter/bookingView/hotelEdit", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, bookingOrder = $data.bookingOrder, required = $data.required, arrangeList = $data.arrangeList, $each = $utils.$each, $string = ($data.rs, 
            $data.$index, $utils.$string), status = $data.status, $out = "";
            return $out += '<div class="base-info" data-id="', $line = 1, $out += $escape(bookingOrder.id), 
            $out += '"> 代订单号：<span class="mar-r-20">', $line = 2, $out += $escape(bookingOrder.orderNumber), 
            $out += '</span> 客人信息： <span class="mar-r-20">', $line = 3, $out += $escape(bookingOrder.touristRealname), 
            $out += " ", $line = 3, $out += $escape(bookingOrder.adultCount), $out += "大", $line = 3, 
            $out += $escape(bookingOrder.childCount), $out += "小</span> 外联销售：", $line = 3, $out += $escape(bookingOrder.outOPUserName), 
            $out += ' </div> <div class=" ui-sortable-handle"> <h5 class=""> <label class="middle title-size">酒店代订</label> <button class="btn btn-sm btn-success mar-l-20 T-hotel-add T-action"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </h5> <p class="panel hct-mh-required">现酒店计划要求：', 
            $line = 14, $out += $escape(required), $out += '</p> <div class="widget-body"> <div class="widget-main no-padding"> <table class="table table-striped table-bordered table-hover margin-top" style="border: 1px solid #ccc"> <thead> <tr> <th class="th-border" width="110"><span class="necessary">*</span>入住日期</th> <th class="th-border" width="110"><span class="necessary">*</span>离店日期</th> <th class="th-border">星级</th> <th class="th-border"><span class="necessary">*</span>酒店</th> <th class="th-border"><span class="necessary">*</span>房型</th> <th class="th-border">单价</th> <th class="th-border">数量</th> <th class="th-border" width="110">优惠</th> <th class="th-border" width="110">应收</th> <th class="th-border">预付款</th> <th class="th-border">备注</th> <th class="th-border" style="width: 100px">操作</th> </tr> </thead> <tbody class="T-hotelList"> ', 
            $line = 35, arrangeList && arrangeList.length > 0 ? ($out += " ", $line = 36, $each(arrangeList, function(rs) {
                $out += ' <tr data-id="', $line = 37, $out += $escape(rs.id), $out += '"> <td> <input name="enterTime" value="', 
                $line = 39, $out += $escape($helpers.dateFormat(rs.enterTime, "yyyy-MM-dd")), $out += '" type="text" class="datepicker" /> </td> <td> <input name="leaveTime" value="', 
                $line = 42, $out += $escape($helpers.dateFormat(rs.leaveTime, "yyyy-MM-dd")), $out += '" type="text" class="datepicker" /> </td> <td> <select name="hotelLevel" class="col-sm-12"> <option value="" ', 
                $line = 46, rs.hotelLevel || ($out += 'selected="selected"', $line = 46), $out += ">--全部--</option> ", 
                $line = 47, $out += $string($helpers.getHotelLevelOptions(rs.hotelLevel)), $out += ' </select> </td> <td> <input name="hotelName" value="', 
                $line = 51, $out += $escape(rs.hotelName), $out += '" data-id="', $line = 51, $out += $escape(rs.hotelId), 
                $out += '" type="text" class="col-sm-12 bind-change" /> </td> <td> <input name="hotelRoomType" value="', 
                $line = 54, $out += $escape(rs.hotelRoomType), $out += '" data-id="', $line = 54, 
                $out += $escape(rs.hotelRoomId), $out += '" type="text" class="col-sm-12 bind-change" /> </td> <td> <input name="costPrice" value="', 
                $line = 57, $out += $escape(rs.costPrice), $out += '" type="text" class="col-sm-12 T-action-blur F-float F-money" /> </td> <td> <input name="roomCount" value="', 
                $line = 60, $out += $escape(rs.roomCount), $out += '" type="text" class="col-sm-12 T-action-blur F-float F-count" /> </td> <td> <input name="reduceMoney" value="', 
                $line = 63, $out += $escape(rs.reduceMoney), $out += '" type="text" class="col-sm-12 T-action-blur F-float F-money" /> </td> <td> <input name="sumCostMoney" value="', 
                $line = 66, $out += $escape(rs.sumCostMoney), $out += '" type="text" class="col-sm-12 F-float F-money" readonly /> </td> <td> <input name="prePayMoney" value="', 
                $line = 69, $out += $escape(rs.prePayMoney), $out += '" type="text" class="col-sm-12 F-float F-money" /> </td> <td> <input type="text" name="remark" value="', 
                $line = 72, $out += $escape(rs.remark), $out += '" class="col-sm-12"> </td> <td> <a class="cursor T-action T-hotel-delete">删除</a> </td> </tr> ', 
                $line = 78;
            }), $out += " ", $line = 79) : ($out += ' <tr> <td> <input name="enterTime" type="text" class="datepicker" /> </td> <td> <input name="leaveTime" type="text" class="datepicker" /> </td> <td> <select name="hotelLevel" class="col-sm-12"> <option selected="selected" value="">--全部--</option> ', 
            $line = 90, $out += $string($helpers.getHotelLevelOptions(110)), $out += ' </select> </td> <td> <input name="hotelName" type="text" class="col-sm-12 bind-change" /> </td> <td> <input name="hotelRoomType" type="text" class="col-sm-12 bind-change" /> </td> <td> <input name="costPrice" type="text" class="col-sm-12 T-action-blur F-float F-money" /> </td> <td> <input name="roomCount" type="text" class="col-sm-12 T-action-blur F-float F-count" /> </td> <td> <input name="reduceMoney" type="text" class="col-sm-12 T-action-blur F-float F-money" /> </td> <td> <input name="sumCostMoney" type="text" class="col-sm-12 F-float F-money" readonly /> </td> <td> <input name="prePayMoney" type="text" class="col-sm-12 F-float F-money" /> </td> <td> <input type="text" name="remark" class="col-sm-12"> </td> <td> <a class="cursor T-action T-hotel-delete">删除</a> </td> </tr> ', 
            $line = 121), $out += ' </tbody> </table> </div> </div> </div> <div class="text-center mar-t-20"> <button class="btn btn-sm btn-primary T-cancel mar-r-20"> <i class="ace-icon fa fa-times-circle"></i> 取消 </button> <button class="btn btn-sm btn-primary mar-r-20 T-hotel-already T-hotel-save"> <i class="ace-icon fa fa-check-circle"></i> 提交信息 </button> <span class="checkbox checkbox-inline mar-0" data-target="#transit_receive_bus"> <label> <input name="status" type="checkbox" class="ace T-finishedArrange" ', 
            $line = 133, 1 == status && ($out += "checked", $line = 133), $out += '> <span class="lbl font-w"> 酒店安排完成</span> </label> </span> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="base-info" data-id="{{bookingOrder.id}}">\r\n    代订单号：<span class="mar-r-20">{{bookingOrder.orderNumber}}</span> 客人信息：\r\n    <span class="mar-r-20">{{bookingOrder.touristRealname}} {{bookingOrder.adultCount}}大{{bookingOrder.childCount}}小</span> 外联销售：{{bookingOrder.outOPUserName}}\r\n</div>\r\n<div class=" ui-sortable-handle">\r\n    <h5 class="">\r\n        <label class="middle title-size">酒店代订</label>\r\n        <button class="btn btn-sm btn-success mar-l-20 T-hotel-add T-action">\r\n            <i class="ace-icon fa fa-plus"></i>\r\n            新增\r\n        </button>\r\n    </h5>\r\n    \r\n    <p class="panel hct-mh-required">现酒店计划要求：{{required}}</p>\r\n    <div class="widget-body">\r\n        <div class="widget-main no-padding">\r\n            <table class="table table-striped table-bordered table-hover margin-top" style="border: 1px solid #ccc">\r\n                <thead>\r\n                    <tr>\r\n                        <th class="th-border" width="110"><span class="necessary">*</span>入住日期</th>\r\n                        <th class="th-border" width="110"><span class="necessary">*</span>离店日期</th>\r\n                        <th class="th-border">星级</th>\r\n                        <th class="th-border"><span class="necessary">*</span>酒店</th>\r\n                        <th class="th-border"><span class="necessary">*</span>房型</th>\r\n                        <th class="th-border">单价</th>\r\n                        <th class="th-border">数量</th>\r\n                        <th class="th-border" width="110">优惠</th>\r\n                        <th class="th-border" width="110">应收</th>\r\n                        <th class="th-border">预付款</th>\r\n                        <th class="th-border">备注</th>\r\n                        <th class="th-border" style="width: 100px">操作</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody class="T-hotelList">\r\n                {{if !!arrangeList && arrangeList.length > 0}}\r\n                {{each arrangeList as rs}}\r\n                    <tr data-id="{{rs.id}}">\r\n                        <td>\r\n                            <input name="enterTime" value="{{rs.enterTime | dateFormat: \'yyyy-MM-dd\'}}" type="text" class="datepicker" />\r\n                        </td>\r\n                        <td>\r\n                            <input name="leaveTime" value="{{rs.leaveTime | dateFormat: \'yyyy-MM-dd\'}}" type="text" class="datepicker" />\r\n                        </td>\r\n                        <td>\r\n                            <select name="hotelLevel" class="col-sm-12">\r\n                                <option value="" {{if !rs.hotelLevel}}selected="selected"{{/if}}>--全部--</option>\r\n                                {{#rs.hotelLevel | getHotelLevelOptions}}\r\n                            </select>\r\n                        </td>\r\n                        <td>\r\n                            <input name="hotelName" value="{{rs.hotelName}}" data-id="{{rs.hotelId}}" type="text" class="col-sm-12 bind-change" />\r\n                        </td>\r\n                        <td>\r\n                            <input name="hotelRoomType" value="{{rs.hotelRoomType}}" data-id="{{rs.hotelRoomId}}" type="text" class="col-sm-12 bind-change" />\r\n                        </td>\r\n                        <td>\r\n                            <input name="costPrice" value="{{rs.costPrice}}" type="text" class="col-sm-12 T-action-blur F-float F-money" />\r\n                        </td>\r\n                        <td>\r\n                            <input name="roomCount" value="{{rs.roomCount}}" type="text" class="col-sm-12 T-action-blur F-float F-count" />\r\n                        </td>\r\n                        <td>\r\n                            <input name="reduceMoney" value="{{rs.reduceMoney}}" type="text" class="col-sm-12 T-action-blur F-float F-money" />\r\n                        </td>\r\n                        <td>\r\n                            <input name="sumCostMoney" value="{{rs.sumCostMoney}}" type="text" class="col-sm-12 F-float F-money" readonly />\r\n                        </td>\r\n                        <td>\r\n                            <input name="prePayMoney" value="{{rs.prePayMoney}}" type="text" class="col-sm-12 F-float F-money" />\r\n                        </td>\r\n                        <td>\r\n                            <input type="text" name="remark" value="{{rs.remark}}" class="col-sm-12">\r\n                        </td>\r\n                        <td>\r\n                            <a class="cursor T-action T-hotel-delete">删除</a>\r\n                        </td>\r\n                    </tr>\r\n                {{/each}}\r\n                {{else}}\r\n                    <tr>\r\n                        <td>\r\n                            <input name="enterTime" type="text" class="datepicker" />\r\n                        </td>\r\n                        <td>\r\n                            <input name="leaveTime" type="text" class="datepicker" />\r\n                        </td>\r\n                        <td>\r\n                            <select name="hotelLevel" class="col-sm-12">\r\n                                <option selected="selected" value="">--全部--</option>\r\n                                {{#110 | getHotelLevelOptions}}\r\n                            </select>\r\n                        </td>\r\n                        <td>\r\n                            <input name="hotelName" type="text" class="col-sm-12 bind-change" />\r\n                        </td>\r\n                        <td>\r\n                            <input name="hotelRoomType" type="text" class="col-sm-12 bind-change" />\r\n                        </td>\r\n                        <td>\r\n                            <input name="costPrice" type="text" class="col-sm-12 T-action-blur F-float F-money" />\r\n                        </td>\r\n                        <td>\r\n                            <input name="roomCount" type="text" class="col-sm-12 T-action-blur F-float F-count" />\r\n                        </td>\r\n                        <td>\r\n                            <input name="reduceMoney" type="text" class="col-sm-12 T-action-blur F-float F-money" />\r\n                        </td>\r\n                        <td>\r\n                            <input name="sumCostMoney" type="text" class="col-sm-12 F-float F-money" readonly />\r\n                        </td>\r\n                        <td>\r\n                            <input name="prePayMoney" type="text" class="col-sm-12 F-float F-money" />\r\n                        </td>\r\n                        <td>\r\n                            <input type="text" name="remark" class="col-sm-12">\r\n                        </td>\r\n                        <td>\r\n                            <a class="cursor T-action T-hotel-delete">删除</a>\r\n                        </td>\r\n                    </tr>\r\n                {{/if}}\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class="text-center mar-t-20">\r\n    <button class="btn btn-sm btn-primary T-cancel mar-r-20"> <i class="ace-icon fa fa-times-circle"></i> 取消 </button>\r\n    <button class="btn btn-sm btn-primary mar-r-20  T-hotel-already T-hotel-save"> <i class="ace-icon fa fa-check-circle"></i> 提交信息 </button>\r\n    <span class="checkbox checkbox-inline mar-0" data-target="#transit_receive_bus">\r\n        <label>\r\n            <input name="status" type="checkbox" class="ace T-finishedArrange" {{if status == 1}}checked{{/if}}>\r\n            <span class="lbl font-w"> 酒店安排完成</span>\r\n        </label>\r\n    </span>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});