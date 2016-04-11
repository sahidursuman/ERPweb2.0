/*TMODJS:{"debug":true,"version":7,"md5":"ea7b0b9288f305c21508ae8965dc7d2e"}*/
define(function(require) {
    return require("/js/template/template")("arrange/arrangeCenter/bookingView/ticketEdit", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, baseInfo = $data.baseInfo, arrangeInfo = $data.arrangeInfo, $each = $utils.$each, bookingOrder = $data.bookingOrder, status = ($data.ticketList, 
            $data.$index, $data.status), $out = "";
            return $out += '<div class="base-info"> 代订单号：<span class="mar-r-20">', $line = 2, 
            $out += $escape(baseInfo.orderNumber), $out += '</span> 客人信息： <span class="mar-r-20">', 
            $line = 3, $out += $escape(baseInfo.contactor), $out += " ", $line = 3, $out += $escape(baseInfo.AdultCount), 
            $out += "大", $line = 3, $out += $escape(baseInfo.childCount), $out += "小</span> 外联销售：", 
            $line = 3, $out += $escape(baseInfo.saleMan), $out += ' </div> <div class=" ui-sortable-handle"> <h5 class=""> <label class="middle title-size">票务</label> <button class="btn btn-sm btn-success mar-l-20 T-action T-ticket-add"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </h5> ', 
            $line = 13, arrangeInfo.oldRequire && ($out += ' <p class="panel">原票务代订计划要求：', $line = 14, 
            $out += $escape(arrangeInfo.oldRequire), $out += "</p> ", $line = 15), $out += " ", 
            $line = 17, arrangeInfo.require && ($out += ' <p class="panel">现票务代订计划要求：', $line = 18, 
            $out += $escape(arrangeInfo.require), $out += "</p> ", $line = 19), $out += ' <div class="widget-body"> <div class="widget-main no-padding"> <table class="table table-striped table-bordered table-hover margin-top" style="border: 1px solid #ccc"> <thead> <tr> <th class="th-border"><span class="necessary">*</span>票务公司</th> <th class="th-border"><span class="necessary">*</span>类型</th> <th class="th-border">出发城市</th> <th class="th-border">到达城市</th> <th class="th-border"><span class="necessary">*</span>班次</th> <th class="th-border"><span class="necessary">*</span>座位级别</th> <th class="th-border" width="50"><span class="necessary">*</span>时间</th> <th class="th-border"><span class="necessary">*</span>数量</th> <th class="th-border">成本单价</th> <th class="th-border">销售单价</th> <th class="th-border">成本</th> <th class="th-border">应收</th> <th class="th-border ">预付款</th> <th class="th-border" style="width: 100px">操作</th> </tr> </thead> <tbody class="T-ticketList">', 
            $line = 41, $each(bookingOrder.bookingTicketList, function(ticketList) {
                $out += ' <tr data-entity-id="', $line = 42, $out += $escape(ticketList.id), $out += '"> <td> <input name="ticketName" value="', 
                $line = 44, null != ticketList.ticket && ($line = 44, $out += $escape(ticketList.ticket.name), 
                $line = 44), $out += '" type="text" class="col-sm-12 T-chooseTicket bind-change" /> <input name="ticketId" value="', 
                $line = 45, null != ticketList.ticket && ($line = 45, $out += $escape(ticketList.ticket.id), 
                $line = 45), $out += '" type="hidden" /> </td> <td> <select name="type"> <option ', 
                $line = 49, 1 == ticketList.type && ($out += 'selected="selected" ', $line = 49), 
                $out += ' value="1">机票</option> <option ', $line = 50, 2 == ticketList.type && ($out += 'selected="selected" ', 
                $line = 50), $out += ' value="2">汽车票</option> <option ', $line = 51, 3 == ticketList.type && ($out += 'selected="selected" ', 
                $line = 51), $out += ' value="3">火车票</option> <option ', $line = 52, 4 == ticketList.type && ($out += 'selected="selected" ', 
                $line = 52), $out += ' value="4">轮船票</option> </select> </td> <!-- <input name="type" value="', 
                $line = 55, $out += $escape(ticketList.type), $out += '" type="text" class="col-sm-12"/> --> <td> <input name="startCity" value="', 
                $line = 57, $out += $escape(ticketList.startCity), $out += '" type="text" class="col-sm-12" maxlength="30" /> </td> <td> <input name="arriveCity" value="', 
                $line = 60, $out += $escape(ticketList.arriveCity), $out += '" type="text" class="col-sm-12" maxlength="30" /> </td> <td> <input name="shift" value="', 
                $line = 63, $out += $escape(ticketList.shift), $out += '" type="text" class="col-sm-12" maxlength="50" /> </td> <td> <input name="seatLevel" value="', 
                $line = 66, $out += $escape(ticketList.seatLevel), $out += '" type="text" class="col-sm-12" maxlength="30" /> </td> <td> <div class="input-group" style="min-width: 165px;"> <input name="startTime" value="', 
                $line = 70, $out += $escape(ticketList.startTime), $out += '" type="text" class="datetimepicker col-sm-12" /> <span class="input-group-addon"> <i class="fa fa-clock-o"></i> </span> </div> </td> <td> <input name="roomCount" value="', 
                $line = 77, $out += $escape(ticketList.roomCount), $out += '" type="text" class="col-sm-12 T-action-blur" maxlength="5" /> </td> <td> <input name="costPrice" value="', 
                $line = 80, $out += $escape(ticketList.costPrice), $out += '" type="text" class="col-sm-12 T-action-blur price F-float F-money" maxlength="9" /> </td> <td> <input name="salePrice" value="', 
                $line = 83, $out += $escape(ticketList.salePrice), $out += '" type="text" class="col-sm-12 T-action-blur price F-float F-money" maxlength="9" /> </td> <td> <input name="sumCostMoney" value="', 
                $line = 86, $out += $escape(ticketList.sumCostMoney), $out += '" readonly="readonly" type="text" class="col-sm-12 F-float F-money" /> </td> <td> <input name="sumNeedGetMoney" value="', 
                $line = 89, $out += $escape(ticketList.sumNeedGetMoney), $out += '" readonly="readonly" type="text" class="col-sm-12 F-float F-money" /> </td> <td> <input type="text" name="prePayMoney" value="', 
                $line = 92, $out += $escape(ticketList.prePayMoney), $out += '" class="col-sm-12 T-action-blur T-prePayMoney F-float F-money" maxlength="9"> </td> <td> <a class="cursor T-action T-ticket-delete">删除</a> </td> </tr>', 
                $line = 97;
            }), $out += ' </tbody> </table> </div> </div> </div> <div class="text-center mar-t-20"> <button class="btn btn-sm btn-primary T-cancel"> <i class="ace-icon fa fa-times-circle"></i> 取消 </button> <button class="btn btn-sm btn-primary mar-r-20 T-hotel-already T-hotel-save"> <i class="ace-icon fa fa-check-circle"></i> 提交信息 </button> <span class="checkbox checkbox-inline mar-0" data-target="#booking_receive_ticket"> <label> <input name="status" type="checkbox" class="ace T-finishedArrange" ', 
            $line = 108, 3 == status && ($out += "checked", $line = 108), $out += '> <span class="lbl font-w"> 票务安排完成</span> </label> </span> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="base-info">\r\n    代订单号：<span class="mar-r-20">{{baseInfo.orderNumber}}</span> 客人信息：\r\n    <span class="mar-r-20">{{baseInfo.contactor}} {{baseInfo.AdultCount}}大{{baseInfo.childCount}}小</span> 外联销售：{{baseInfo.saleMan}}\r\n</div>\r\n<div class=" ui-sortable-handle">\r\n    <h5 class="">\r\n        <label class="middle title-size">票务</label>\r\n        <button class="btn btn-sm  btn-success mar-l-20 T-action T-ticket-add">\r\n            <i class="ace-icon fa fa-plus"></i>\r\n            新增\r\n        </button>\r\n    </h5>\r\n    {{if !!arrangeInfo.oldRequire}}\r\n    <p class="panel">原票务代订计划要求：{{arrangeInfo.oldRequire}}</p>\r\n    {{/if}}\r\n\r\n    {{if !!arrangeInfo.require}}\r\n    <p class="panel">现票务代订计划要求：{{arrangeInfo.require}}</p>\r\n    {{/if}}\r\n    <div class="widget-body">\r\n        <div class="widget-main no-padding">\r\n            <table class="table table-striped table-bordered table-hover margin-top" style="border: 1px solid #ccc">\r\n                <thead>\r\n                    <tr>\r\n                        <th class="th-border"><span class="necessary">*</span>票务公司</th>\r\n                        <th class="th-border"><span class="necessary">*</span>类型</th>\r\n                        <th class="th-border">出发城市</th>\r\n                        <th class="th-border">到达城市</th>\r\n                        <th class="th-border"><span class="necessary">*</span>班次</th>\r\n                        <th class="th-border"><span class="necessary">*</span>座位级别</th>\r\n                        <th class="th-border" width="50"><span class="necessary">*</span>时间</th>\r\n                        <th class="th-border"><span class="necessary">*</span>数量</th>\r\n                        <th class="th-border">成本单价</th>\r\n                        <th class="th-border">销售单价</th>\r\n                        <th class="th-border">成本</th>\r\n                        <th class="th-border">应收</th>\r\n                        <th class="th-border ">预付款</th>\r\n                        <th class="th-border" style="width: 100px">操作</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody class="T-ticketList">{{each bookingOrder.bookingTicketList as ticketList}}\r\n                    <tr data-entity-id="{{ticketList.id}}">\r\n                        <td>\r\n                            <input name="ticketName" value="{{if ticketList.ticket != null}}{{ticketList.ticket.name}}{{/if}}" type="text" class="col-sm-12 T-chooseTicket bind-change" />\r\n                            <input name="ticketId" value="{{if ticketList.ticket != null}}{{ticketList.ticket.id}}{{/if}}" type="hidden" />\r\n                        </td>\r\n                        <td>\r\n                            <select name="type">\r\n                                <option {{if ticketList.type==1}}selected="selected" {{/if}} value="1">机票</option>\r\n                                <option {{if ticketList.type==2}}selected="selected" {{/if}} value="2">汽车票</option>\r\n                                <option {{if ticketList.type==3}}selected="selected" {{/if}} value="3">火车票</option>\r\n                                <option {{if ticketList.type==4}}selected="selected" {{/if}} value="4">轮船票</option>\r\n                            </select>\r\n                        </td>\r\n                        <!-- <input name="type" value="{{ticketList.type}}" type="text" class="col-sm-12"/> -->\r\n                        <td>\r\n                            <input name="startCity" value="{{ticketList.startCity}}" type="text" class="col-sm-12" maxlength="30" />\r\n                        </td>\r\n                        <td>\r\n                            <input name="arriveCity" value="{{ticketList.arriveCity}}" type="text" class="col-sm-12" maxlength="30" />\r\n                        </td>\r\n                        <td>\r\n                            <input name="shift" value="{{ticketList.shift}}" type="text" class="col-sm-12" maxlength="50" />\r\n                        </td>\r\n                        <td>\r\n                            <input name="seatLevel" value="{{ticketList.seatLevel}}" type="text" class="col-sm-12" maxlength="30" />\r\n                        </td>\r\n                        <td>\r\n                            <div class="input-group" style="min-width: 165px;">\r\n                                <input name="startTime" value="{{ticketList.startTime}}" type="text" class="datetimepicker col-sm-12" />\r\n                                <span class="input-group-addon">\r\n                                                    <i class="fa fa-clock-o"></i>\r\n                                                </span>\r\n                            </div>\r\n                        </td>\r\n                        <td>\r\n                            <input name="roomCount" value="{{ticketList.roomCount}}" type="text" class="col-sm-12 T-action-blur" maxlength="5" />\r\n                        </td>\r\n                        <td>\r\n                            <input name="costPrice" value="{{ticketList.costPrice}}" type="text" class="col-sm-12 T-action-blur  price F-float F-money" maxlength="9" />\r\n                        </td>\r\n                        <td>\r\n                            <input name="salePrice" value="{{ticketList.salePrice}}" type="text" class="col-sm-12 T-action-blur  price F-float F-money" maxlength="9" />\r\n                        </td>\r\n                        <td>\r\n                            <input name="sumCostMoney" value="{{ticketList.sumCostMoney}}" readonly="readonly" type="text" class="col-sm-12 F-float F-money" />\r\n                        </td>\r\n                        <td>\r\n                            <input name="sumNeedGetMoney" value="{{ticketList.sumNeedGetMoney}}" readonly="readonly" type="text" class="col-sm-12 F-float F-money" />\r\n                        </td>\r\n                        <td>\r\n                            <input type="text" name="prePayMoney" value="{{ticketList.prePayMoney}}" class="col-sm-12 T-action-blur T-prePayMoney F-float F-money" maxlength="9">\r\n                        </td>\r\n                        <td>\r\n                            <a class="cursor T-action T-ticket-delete">删除</a>\r\n                        </td>\r\n                    </tr>{{/each}}\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class="text-center mar-t-20">\r\n    <button class="btn btn-sm btn-primary T-cancel"> <i class="ace-icon fa fa-times-circle"></i> 取消 </button>\r\n    <button class="btn btn-sm btn-primary mar-r-20  T-hotel-already T-hotel-save"> <i class="ace-icon fa fa-check-circle"></i> 提交信息 </button>\r\n    <span class="checkbox checkbox-inline mar-0" data-target="#booking_receive_ticket">\r\n        <label>\r\n            <input name="status" type="checkbox" class="ace T-finishedArrange" {{if status == 3}}checked{{/if}}>\r\n            <span class="lbl font-w"> 票务安排完成</span>\r\n        </label>\r\n    </span>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});