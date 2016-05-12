/*TMODJS:{"debug":true,"version":42,"md5":"728df8c77daf20abd9ebc00196fea8da"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeCenter/bookingView/ticketEdit", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, bookingOrder = $data.bookingOrder, required = $data.required, arrangeList = $data.arrangeList, $each = $utils.$each, status = ($data.rs, 
            $data.$index, $data.status), $out = "";
            return $out += '<div class="globalAdd"> <div class="base-info" data-id="', $line = 2, 
            $out += $escape(bookingOrder.id), $out += '"> <div class="hct-view-container"> <table class="table table-bordered"> <tbody> <tr> <td class="hct-view-group col-xs-4"> <div class="hct-view-title">代订单号</div> <div class="hct-view-content">', 
            $line = 9, $out += $escape(bookingOrder.orderNumber), $out += '</div> </td> <td class="hct-view-group col-xs-4"> <div class="hct-view-title">客人信息</div> <div class="hct-view-content">', 
            $line = 13, $out += $escape(bookingOrder.touristRealname), $out += " ", $line = 13, 
            $out += $escape(bookingOrder.adultCount), $out += "大", $line = 13, $out += $escape(bookingOrder.childCount), 
            $out += '小</div> </td> <td class="hct-view-group col-xs-4"> <div class="hct-view-title">外联销售</div> <div class="hct-view-content">', 
            $line = 17, $out += $escape(bookingOrder.outOPUserName), $out += '</div> </td> </tr> </tbody> </table> </div> </div> <div class=" ui-sortable-handle"> <div class="form-group form-inline"> <label class="middle mar-r-10 title-size">票务</label> <button class="btn btn-sm btn-success mar-l-20 T-action T-ticket-add"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </div> <p class="panel hct-mh-required">现票务计划要求：', 
            $line = 32, $out += $escape(required), $out += '</p> <div class="widget-body"> <div class="widget-main no-padding"> <table class="table table-striped table-bordered table-hover margin-top" style="border: 1px solid #ccc"> <thead> <tr> <th class="th-border"><span class="necessary">*</span>票务公司</th> <th class="th-border"><span class="necessary">*</span>类型</th> <th class="th-border">出发城市</th> <th class="th-border">到达城市</th> <th class="th-border"><span class="necessary">*</span>班次</th> <th class="th-border" width="130"><span class="necessary">*</span>时间</th> <th class="th-border"><span class="necessary">*</span>座位级别</th> <th class="th-border">单价</th> <th class="th-border">数量</th> <th class="th-border">优惠</th> <th class="th-border">应付</th> <th class="th-border ">预付款</th> <th class="th-border ">备注</th> <th class="th-border" width="60">操作</th> </tr> </thead> <tbody class="T-ticketList"> ', 
            $line = 55, arrangeList && arrangeList.length > 0 ? ($out += " ", $line = 56, $each(arrangeList, function(rs) {
                $out += ' <tr data-id="', $line = 57, $out += $escape(rs.id), $out += '"> <td> <div class="col-sm-12"> <input name="ticketName" value="', 
                $line = 60, $out += $escape(rs.ticketName), $out += '" data-id="', $line = 60, $out += $escape(rs.ticketId), 
                $out += '" type="text" class="col-sm-12 bind-change" ', $line = 60, rs.isConfirmAccount && ($out += " disabled", 
                $line = 60), $out += "/> ", $line = 61, rs.isConfirmAccount || ($out += ' <span class="addResourceBtn T-action T-add-ticketName" title="添加票务公司"><i class="ace-icon fa fa-plus bigger-110 icon-only"></i></span> ', 
                $line = 63), $out += ' </div> </td> <td> <select name="type"', $line = 67, rs.isConfirmAccount && ($out += " disabled", 
                $line = 67), $out += "> <option ", $line = 68, 1 == rs.type && ($out += 'selected="selected" ', 
                $line = 68), $out += ' value="1">机票</option> <option ', $line = 69, 2 == rs.type && ($out += 'selected="selected" ', 
                $line = 69), $out += ' value="2">汽车票</option> <option ', $line = 70, 3 == rs.type && ($out += 'selected="selected" ', 
                $line = 70), $out += ' value="3">火车票</option> <option ', $line = 71, 4 == rs.type && ($out += 'selected="selected" ', 
                $line = 71), $out += ' value="4">轮船票</option> </select> </td> <td> <input name="startCity" value="', 
                $line = 75, $out += $escape(rs.startCity), $out += '" type="text" class="col-sm-12" maxlength="30"', 
                $line = 75, rs.isConfirmAccount && ($out += " disabled", $line = 75), $out += ' /> </td> <td> <input name="arriveCity" value="', 
                $line = 78, $out += $escape(rs.arriveCity), $out += '" type="text" class="col-sm-12" maxlength="30"', 
                $line = 78, rs.isConfirmAccount && ($out += " disabled", $line = 78), $out += ' /> </td> <td> <input name="shift" value="', 
                $line = 81, $out += $escape(rs.shift), $out += '" type="text" class="col-sm-12" maxlength="50"', 
                $line = 81, rs.isConfirmAccount && ($out += " disabled", $line = 81), $out += ' /> </td> <td> <input name="startTime" value="', 
                $line = 84, $out += $escape($helpers.dateFormat(rs.startTime, "yyyy-MM-dd hh:mm")), 
                $out += '" type="text" class="col-sm-12 datetimepicker"', $line = 84, rs.isConfirmAccount && ($out += " disabled", 
                $line = 84), $out += ' /> </td> <td> <input name="seatLevel" value="', $line = 87, 
                $out += $escape(rs.seatLevel), $out += '" type="text" class="col-sm-12" maxlength="30"', 
                $line = 87, rs.isConfirmAccount && ($out += " disabled", $line = 87), $out += ' /> </td> <td> <input name="costPrice" value="', 
                $line = 90, $out += $escape(rs.costPrice), $out += '" type="text" class="col-sm-12 T-action-blur F-float F-money"', 
                $line = 90, rs.isConfirmAccount && ($out += " disabled", $line = 90), $out += ' /> </td> <td> <input name="roomCount" value="', 
                $line = 93, $out += $escape(rs.roomCount), $out += '" type="text" class="col-sm-12 T-action-blur F-float F-count"', 
                $line = 93, rs.isConfirmAccount && ($out += " disabled", $line = 93), $out += ' /> </td> <td> <input name="reduceMoney" value="', 
                $line = 96, $out += $escape(rs.reduceMoney), $out += '" type="text" class="col-sm-12 T-action-blur F-float F-money"', 
                $line = 96, rs.isConfirmAccount && ($out += " disabled", $line = 96), $out += ' /> </td> <td> <input name="sumCostMoney" value="', 
                $line = 99, $out += $escape(rs.sumCostMoney), $out += '" type="text" class="col-sm-12 F-float F-money" readonly /> </td> <td> <input name="prePayMoney" value="', 
                $line = 102, $out += $escape(rs.prePayMoney), $out += '" type="text" class="col-sm-12 F-float F-money"', 
                $line = 102, rs.isConfirmAccount && ($out += " disabled", $line = 102), $out += ' /> </td> <td> <input name="remark" value="', 
                $line = 105, $out += $escape(rs.remark), $out += '" type="text" class="col-sm-12"', 
                $line = 105, rs.isConfirmAccount && ($out += " disabled", $line = 105), $out += ' /> </td> <td> <a class="cursor ', 
                $line = 108, rs.isConfirmAccount ? ($out += " hct-color-BBB", $line = 108) : ($out += " T-action T-ticket-delete", 
                $line = 108), $out += '"', $line = 108, rs.isConfirmAccount && ($out += ' title="已对账，不能删除！"', 
                $line = 108), $out += ">删除</a> </td> </tr> ", $line = 111;
            }), $out += " ", $line = 112) : ($out += ' <tr> <td> <div class="col-sm-12"> <input name="ticketName" type="text" class="col-sm-12 bind-change" /> <span class="addResourceBtn T-action T-add-ticketName" title="添加票务公司"><i class="ace-icon fa fa-plus bigger-110 icon-only"></i></span> </div> </td> <td> <select name="type"> <option value="1">机票</option> <option value="2">汽车票</option> <option value="3">火车票</option> <option value="4">轮船票</option> </select> </td> <td> <input name="startCity" type="text" class="col-sm-12" maxlength="30" /> </td> <td> <input name="arriveCity" type="text" class="col-sm-12" maxlength="30" /> </td> <td> <input name="shift" type="text" class="col-sm-12" maxlength="50" /> </td> <td> <input name="startTime" type="text" class="col-sm-12 datetimepicker" /> </td> <td> <input name="seatLevel" type="text" class="col-sm-12" maxlength="30" /> </td> <td> <input name="costPrice" type="text" class="col-sm-12 T-action-blur" /> </td> <td> <input name="roomCount" type="text" class="col-sm-12 T-action-blur" /> </td> <td> <input name="reduceMoney" type="text" class="col-sm-12 T-action-blur F-float F-money" /> </td> <td> <input name="sumCostMoney" type="text" class="col-sm-12 F-float F-money" readonly /> </td> <td> <input name="prePayMoney" type="text" class="col-sm-12 F-float F-money" /> </td> <td> <input name="remark" type="text" class="col-sm-12" /> </td> <td> <a class="cursor T-action T-ticket-delete">删除</a> </td> </tr> ', 
            $line = 165), $out += ' </tbody> </table> </div> </div> </div> <div class="text-center mar-t-20"> <button class="btn btn-sm btn-primary T-cancel mar-r-20"> <i class="ace-icon fa fa-times-circle"></i> 取消 </button> <button class="btn btn-sm btn-primary mar-r-20 T-ticket-save"> <i class="ace-icon fa fa-check-circle"></i> 提交信息 </button> <span class="checkbox checkbox-inline mar-0" data-target="#booking_receive_ticket"> <label> <input name="status" type="checkbox" class="ace T-finishedArrange" ', 
            $line = 176, 1 == status && ($out += "checked", $line = 176), $out += '> <span class="lbl font-w"> 票务安排完成</span> </label> </span> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="globalAdd">\r\n<div class="base-info" data-id="{{bookingOrder.id}}">\r\n    <div class="hct-view-container">\r\n        <table class="table table-bordered">\r\n            <tbody>\r\n                <tr>\r\n                    <td class="hct-view-group col-xs-4">\r\n                        <div class="hct-view-title">代订单号</div>\r\n                        <div class="hct-view-content">{{bookingOrder.orderNumber}}</div>\r\n                    </td>\r\n                    <td class="hct-view-group col-xs-4">\r\n                        <div class="hct-view-title">客人信息</div>\r\n                        <div class="hct-view-content">{{bookingOrder.touristRealname}} {{bookingOrder.adultCount}}大{{bookingOrder.childCount}}小</div>\r\n                    </td>\r\n                    <td class="hct-view-group col-xs-4">\r\n                        <div class="hct-view-title">外联销售</div>\r\n                        <div class="hct-view-content">{{bookingOrder.outOPUserName}}</div>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n<div class=" ui-sortable-handle">\r\n    <div class="form-group form-inline">\r\n        <label class="middle mar-r-10 title-size">票务</label>\r\n        <button class="btn btn-sm  btn-success mar-l-20 T-action T-ticket-add">\r\n            <i class="ace-icon fa fa-plus"></i>\r\n            新增\r\n        </button>\r\n    </div>\r\n    <p class="panel  hct-mh-required">现票务计划要求：{{required}}</p>\r\n    <div class="widget-body">\r\n        <div class="widget-main no-padding">\r\n            <table class="table table-striped table-bordered table-hover margin-top" style="border: 1px solid #ccc">\r\n                <thead>\r\n                    <tr>\r\n                        <th class="th-border"><span class="necessary">*</span>票务公司</th>\r\n                        <th class="th-border"><span class="necessary">*</span>类型</th>\r\n                        <th class="th-border">出发城市</th>\r\n                        <th class="th-border">到达城市</th>\r\n                        <th class="th-border"><span class="necessary">*</span>班次</th>\r\n                        <th class="th-border" width="130"><span class="necessary">*</span>时间</th>\r\n                        <th class="th-border"><span class="necessary">*</span>座位级别</th>\r\n                        <th class="th-border">单价</th>\r\n                        <th class="th-border">数量</th>\r\n                        <th class="th-border">优惠</th>\r\n                        <th class="th-border">应付</th>\r\n                        <th class="th-border ">预付款</th>\r\n                        <th class="th-border ">备注</th>\r\n                        <th class="th-border" width="60">操作</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody class="T-ticketList">\r\n                {{if !!arrangeList && arrangeList.length > 0}}\r\n                {{each arrangeList as rs}}\r\n                    <tr data-id="{{rs.id}}">\r\n                        <td>\r\n                            <div class="col-sm-12">\r\n                                <input name="ticketName" value="{{rs.ticketName}}" data-id="{{rs.ticketId}}" type="text" class="col-sm-12 bind-change" {{if !!rs.isConfirmAccount}} disabled{{/if}}/>\r\n                                {{if !rs.isConfirmAccount}}\r\n                                <span class="addResourceBtn T-action T-add-ticketName" title="添加票务公司"><i class="ace-icon fa fa-plus bigger-110 icon-only"></i></span>\r\n                                {{/if}}\r\n                            </div>\r\n                        </td>\r\n                        <td>\r\n                            <select name="type"{{if !!rs.isConfirmAccount}} disabled{{/if}}>\r\n                                <option {{if rs.type==1}}selected="selected" {{/if}} value="1">机票</option>\r\n                                <option {{if rs.type==2}}selected="selected" {{/if}} value="2">汽车票</option>\r\n                                <option {{if rs.type==3}}selected="selected" {{/if}} value="3">火车票</option>\r\n                                <option {{if rs.type==4}}selected="selected" {{/if}} value="4">轮船票</option>\r\n                            </select>\r\n                        </td>\r\n                        <td>\r\n                            <input name="startCity" value="{{rs.startCity}}" type="text" class="col-sm-12" maxlength="30"{{if !!rs.isConfirmAccount}} disabled{{/if}} />\r\n                        </td>\r\n                        <td>\r\n                            <input name="arriveCity" value="{{rs.arriveCity}}" type="text" class="col-sm-12" maxlength="30"{{if !!rs.isConfirmAccount}} disabled{{/if}} />\r\n                        </td>\r\n                        <td>\r\n                            <input name="shift" value="{{rs.shift}}" type="text" class="col-sm-12" maxlength="50"{{if !!rs.isConfirmAccount}} disabled{{/if}} />\r\n                        </td>\r\n                        <td>\r\n                            <input name="startTime" value="{{rs.startTime | dateFormat: \'yyyy-MM-dd hh:mm\'}}" type="text" class="col-sm-12 datetimepicker"{{if !!rs.isConfirmAccount}} disabled{{/if}} />\r\n                        </td>\r\n                        <td>\r\n                            <input name="seatLevel" value="{{rs.seatLevel}}" type="text" class="col-sm-12" maxlength="30"{{if !!rs.isConfirmAccount}} disabled{{/if}} />\r\n                        </td>\r\n                        <td>\r\n                            <input name="costPrice" value="{{rs.costPrice}}" type="text" class="col-sm-12 T-action-blur F-float F-money"{{if !!rs.isConfirmAccount}} disabled{{/if}} />\r\n                        </td>\r\n                        <td>\r\n                            <input name="roomCount" value="{{rs.roomCount}}" type="text" class="col-sm-12 T-action-blur F-float F-count"{{if !!rs.isConfirmAccount}} disabled{{/if}} />\r\n                        </td>\r\n                        <td>\r\n                            <input name="reduceMoney" value="{{rs.reduceMoney}}" type="text" class="col-sm-12 T-action-blur F-float F-money"{{if !!rs.isConfirmAccount}} disabled{{/if}} />\r\n                        </td>\r\n                        <td>\r\n                            <input name="sumCostMoney" value="{{rs.sumCostMoney}}" type="text" class="col-sm-12 F-float F-money" readonly />\r\n                        </td>\r\n                        <td>\r\n                            <input name="prePayMoney" value="{{rs.prePayMoney}}" type="text" class="col-sm-12 F-float F-money"{{if !!rs.isConfirmAccount}} disabled{{/if}} />\r\n                        </td>\r\n                        <td>\r\n                            <input name="remark" value="{{rs.remark}}" type="text" class="col-sm-12"{{if !!rs.isConfirmAccount}} disabled{{/if}} />\r\n                        </td>\r\n                        <td>\r\n                            <a class="cursor {{if !!rs.isConfirmAccount}} hct-color-BBB{{else}} T-action T-ticket-delete{{/if}}"{{if !!rs.isConfirmAccount}} title="已对账，不能删除！"{{/if}}>删除</a>\r\n                        </td>\r\n                    </tr>\r\n                {{/each}}\r\n                {{else}}\r\n                    <tr>\r\n                        <td>\r\n                            <div class="col-sm-12">\r\n                                <input name="ticketName" type="text" class="col-sm-12 bind-change" />\r\n                                <span class="addResourceBtn T-action T-add-ticketName" title="添加票务公司"><i class="ace-icon fa fa-plus bigger-110 icon-only"></i></span>\r\n                            </div>\r\n                        </td>\r\n                        <td>\r\n                            <select name="type">\r\n                                <option value="1">机票</option>\r\n                                <option value="2">汽车票</option>\r\n                                <option value="3">火车票</option>\r\n                                <option value="4">轮船票</option>\r\n                            </select>\r\n                        </td>\r\n                        <td>\r\n                            <input name="startCity" type="text" class="col-sm-12" maxlength="30" />\r\n                        </td>\r\n                        <td>\r\n                            <input name="arriveCity" type="text" class="col-sm-12" maxlength="30" />\r\n                        </td>\r\n                        <td>\r\n                            <input name="shift" type="text" class="col-sm-12" maxlength="50" />\r\n                        </td>\r\n                        <td>\r\n                            <input name="startTime" type="text" class="col-sm-12 datetimepicker" />\r\n                        </td>\r\n                        <td>\r\n                            <input name="seatLevel" type="text" class="col-sm-12" maxlength="30" />\r\n                        </td>\r\n                        <td>\r\n                            <input name="costPrice" type="text" class="col-sm-12 T-action-blur" />\r\n                        </td>\r\n                        <td>\r\n                            <input name="roomCount" type="text" class="col-sm-12 T-action-blur" />\r\n                        </td>\r\n                        <td>\r\n                            <input name="reduceMoney" type="text" class="col-sm-12 T-action-blur F-float F-money" />\r\n                        </td>\r\n                        <td>\r\n                            <input name="sumCostMoney" type="text" class="col-sm-12 F-float F-money" readonly />\r\n                        </td>\r\n                        <td>\r\n                            <input name="prePayMoney" type="text" class="col-sm-12 F-float F-money" />\r\n                        </td>\r\n                        <td>\r\n                            <input name="remark" type="text" class="col-sm-12" />\r\n                        </td>\r\n                        <td>\r\n                            <a class="cursor T-action T-ticket-delete">删除</a>\r\n                        </td>\r\n                    </tr>\r\n                {{/if}}\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class="text-center mar-t-20">\r\n    <button class="btn btn-sm btn-primary T-cancel mar-r-20"> <i class="ace-icon fa fa-times-circle"></i> 取消 </button>\r\n    <button class="btn btn-sm btn-primary mar-r-20  T-ticket-save"> <i class="ace-icon fa fa-check-circle"></i> 提交信息 </button>\r\n    <span class="checkbox checkbox-inline mar-0" data-target="#booking_receive_ticket">\r\n        <label>\r\n            <input name="status" type="checkbox" class="ace T-finishedArrange" {{if status == 1}}checked{{/if}}>\r\n            <span class="lbl font-w"> 票务安排完成</span>\r\n        </label>\r\n    </span>\r\n</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});