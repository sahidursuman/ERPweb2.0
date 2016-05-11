/*TMODJS:{"debug":true,"version":64,"md5":"65ff74c7a99fbb142781e0d8f41785cb"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeCenter/bookingView/busEdit", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, bookingOrder = $data.bookingOrder, required = $data.required, arrangeList = $data.arrangeList, $each = $utils.$each, status = ($data.rs, 
            $data.$index, $data.status), $out = "";
            return $out += '<div class="globalAdd"> <div class="base-info container-fluid" data-id="', 
            $line = 2, $out += $escape(bookingOrder.id), $out += '"> <div class="hct-view-container"> <table class="table table-bordered"> <tbody> <tr> <td class="hct-view-group col-xs-4"> <div class="hct-view-title">代订单号</div> <div class="hct-view-content">', 
            $line = 9, $out += $escape(bookingOrder.orderNumber), $out += '</div> </td> <td class="hct-view-group col-xs-4"> <div class="hct-view-title">客人信息</div> <div class="hct-view-content">', 
            $line = 13, $out += $escape(bookingOrder.touristRealname), $out += " ", $line = 13, 
            $out += $escape(bookingOrder.adultCount), $out += "大", $line = 13, $out += $escape(bookingOrder.childCount), 
            $out += '小</div> </td> <td class="hct-view-group col-xs-4"> <div class="hct-view-title">外联销售</div> <div class="hct-view-content">', 
            $line = 17, $out += $escape(bookingOrder.outOPUserName), $out += '</div> </td> </tr> </tbody> </table> </div> </div> <div class="ui-sortable-handle"> <div class="form-group form-inline"> <label class="middle mar-r-10 title-size">车</label> <button class="btn btn-sm btn-success T-action T-bus-add mar-l-20"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </div> <p class="panel mar-t-20 hct-mh-required">现车辆计划要求：', 
            $line = 32, $out += $escape(required), $out += '</p> <div class="widget-body"> <div class="widget-main no-padding"> <table class="table table-striped table-bordered table-hover margin-top" style="border: 1px solid #ccc"> <thead> <tr> <th class="th-border" width="110"><span class="necessary">*</span>开始日期</th> <th class="th-border" width="110"><span class="necessary">*</span>结束日期</th> <th class="th-border" width="70"><span class="necessary">*</span>车座数</th> <th class="th-border">车辆品牌</th> <th class="th-border"><span class="necessary">*</span>所属车队</th> <th class="th-border" width="100">车费</th> <th class="th-border" width="100">优惠</th> <th class="th-border" width="100">应付</th> <th class="th-border" width="100">预付款</th> <th class="th-border">备注</th> <th class="th-border" width="60">操作</th> </tr> </thead> <tbody class="T-busList"> ', 
            $line = 52, arrangeList && arrangeList.length > 0 ? ($out += " ", $line = 53, $each(arrangeList, function(rs) {
                $out += ' <tr data-id="', $line = 54, $out += $escape(rs.id), $out += '"> <td> <input name="startTime" value="', 
                $line = 56, $out += $escape($helpers.dateFormat(rs.startTime, "yyyy-MM-dd")), $out += '" type="text" class="datepicker"', 
                $line = 56, rs.isConfirmAccount && ($out += " disabled", $line = 56), $out += ' /> </td> <td> <input name="endTime" value="', 
                $line = 59, $out += $escape($helpers.dateFormat(rs.endTime, "yyyy-MM-dd")), $out += '" type="text" class="datepicker"', 
                $line = 59, rs.isConfirmAccount && ($out += " disabled", $line = 59), $out += '/> </td> <td> <input name="needSeatCount" value="', 
                $line = 62, $out += $escape(rs.needSeatCount), $out += '" type="text" class="col-sm-12 bind-change" ', 
                $line = 62, rs.isConfirmAccount && ($out += " disabled", $line = 62), $out += '/> </td> <td> <input name="needBusBrand" value="', 
                $line = 65, $out += $escape(rs.needBusBrand), $out += '" type="text" class="col-sm-12 bind-change" ', 
                $line = 65, rs.isConfirmAccount && ($out += " disabled", $line = 65), $out += '/> </td> <td> <div class="col-sm-12"> <input name="busCompany" value="', 
                $line = 69, $out += $escape(rs.busCompanyName), $out += '" type="text" class="col-sm-12 bind-change" data-id="', 
                $line = 69, $out += $escape(rs.busCompanyId), $out += '"', $line = 69, rs.isConfirmAccount && ($out += " disabled", 
                $line = 69), $out += " /> ", $line = 70, rs.isConfirmAccount || ($out += ' <span class="addResourceBtn T-action T-add-busCompany" title="添加车队"><i class="ace-icon fa fa-plus bigger-110 icon-only"></i></span> ', 
                $line = 72), $out += ' </div> </td> <td> <input name="fee" value="', $line = 76, 
                $out += $escape(rs.fee), $out += '" type="text" class="col-sm-12 T-action-blur F-float F-money" maxlength="9"', 
                $line = 76, rs.isConfirmAccount && ($out += " disabled", $line = 76), $out += ' /> </td> <td> <input name="reduceMoney" value="', 
                $line = 79, $out += $escape(rs.reduceMoney), $out += '" type="text" class="col-sm-12 T-action-blur F-float F-money" maxlength="9"', 
                $line = 79, rs.isConfirmAccount && ($out += " disabled", $line = 79), $out += ' /> </td> <td> <input name="sumCostMoney" value="', 
                $line = 82, $out += $escape(rs.sumCostMoney), $out += '" type="text" class="col-sm-12 F-float F-money" readonly /> </td> <td> <input name="prePayMoney" value="', 
                $line = 85, $out += $escape(rs.prePayMoney), $out += '" type="text" class="col-sm-12 F-float F-money"', 
                $line = 85, rs.isConfirmAccount && ($out += " disabled", $line = 85), $out += ' /> </td> <td> <input name="remark" value="', 
                $line = 88, $out += $escape(rs.remark), $out += '" type="text" class="col-sm-12"', 
                $line = 88, rs.isConfirmAccount && ($out += " disabled", $line = 88), $out += ' /> </td> <td> <a class="cursor', 
                $line = 91, rs.isConfirmAccount ? ($out += " hct-color-BBB", $line = 91) : ($out += " T-action T-bus-delete", 
                $line = 91), $out += '"', $line = 91, rs.isConfirmAccount && ($out += ' title="已对账，不能删除！"', 
                $line = 91), $out += ">删除</a> </td> </tr> ", $line = 94;
            }), $out += " ", $line = 95) : ($out += ' <tr> <td> <input name="startTime" type="text" class="datepicker" /> </td> <td> <input name="endTime" type="text" class="datepicker" /> </td> <td> <input name="needSeatCount" type="text" class="col-sm-12 bind-change" /> </td> <td> <input name="needBusBrand" type="text" class="col-sm-12 bind-change" /> </td> <td> <div class="col-sm-12"> <input name="busCompany" type="text" class="col-sm-12 bind-change" /> <span class="addResourceBtn T-action T-add-busCompany" title="添加车队"><i class="ace-icon fa fa-plus bigger-110 icon-only"></i></span> </div> </td> <td> <input name="fee" type="text" class="col-sm-12 T-action-blur F-float F-money" maxlength="9" /> </td> <td> <input name="reduceMoney" type="text" class="col-sm-12 T-action-blur F-float F-money" maxlength="9" /> </td> <td> <input name="sumCostMoney" type="text" class="col-sm-12 F-float F-money" readonly /> </td> <td> <input name="prePayMoney" type="text" class="col-sm-12 F-float F-money" /> </td> <td> <input name="remark" type="text" class="col-sm-12" /> </td> <td> <a class="cursor T-action T-bus-delete">删除</a> </td> </tr> ', 
            $line = 134), $out += ' </tbody> </table> </div> </div> </div> <div class="text-center mar-t-20"> <button class="btn btn-sm btn-primary mar-r-20 T-cancel"> <i class="ace-icon fa fa-times-circle"></i> 取消 </button> <button class="btn btn-sm btn-primary mar-r-20 T-hotel-already T-hotel-save"> <i class="ace-icon fa fa-check-circle"></i> 提交信息 </button> <span class="checkbox checkbox-inline mar-0" data-target="#transit_receive_bus"> <label> <input name="status" type="checkbox" class="ace T-finishedArrange" ', 
            $line = 145, 1 == status && ($out += "checked", $line = 145), $out += '> <span class="lbl font-w"> 车辆安排完成</span> </label> </span> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="globalAdd">\r\n<div class="base-info container-fluid" data-id="{{bookingOrder.id}}">\r\n    <div class="hct-view-container">\r\n        <table class="table table-bordered">\r\n            <tbody>\r\n                <tr>\r\n                    <td class="hct-view-group col-xs-4">\r\n                        <div class="hct-view-title">代订单号</div>\r\n                        <div class="hct-view-content">{{bookingOrder.orderNumber}}</div>\r\n                    </td>\r\n                    <td class="hct-view-group col-xs-4">\r\n                        <div class="hct-view-title">客人信息</div>\r\n                        <div class="hct-view-content">{{bookingOrder.touristRealname}} {{bookingOrder.adultCount}}大{{bookingOrder.childCount}}小</div>\r\n                    </td>\r\n                    <td class="hct-view-group col-xs-4">\r\n                        <div class="hct-view-title">外联销售</div>\r\n                        <div class="hct-view-content">{{bookingOrder.outOPUserName}}</div>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n<div class="ui-sortable-handle">\r\n        <div class="form-group form-inline">\r\n        <label class="middle mar-r-10 title-size">车</label>\r\n        <button class="btn btn-sm  btn-success T-action T-bus-add mar-l-20">\r\n            <i class="ace-icon fa fa-plus"></i>\r\n            新增\r\n        </button>\r\n        </div>\r\n    <p class="panel mar-t-20 hct-mh-required">现车辆计划要求：{{required}}</p>\r\n    <div class="widget-body">\r\n        <div class="widget-main no-padding">\r\n            <table class="table table-striped table-bordered table-hover margin-top" style="border: 1px solid #ccc">\r\n                <thead>\r\n                    <tr>\r\n                        <th class="th-border" width="110"><span class="necessary">*</span>开始日期</th>\r\n                        <th class="th-border" width="110"><span class="necessary">*</span>结束日期</th>\r\n                        <th class="th-border" width="70"><span class="necessary">*</span>车座数</th>\r\n                        <th class="th-border">车辆品牌</th>\r\n                        <th class="th-border"><span class="necessary">*</span>所属车队</th>\r\n                        <th class="th-border" width="100">车费</th>\r\n                        <th class="th-border" width="100">优惠</th>\r\n                        <th class="th-border" width="100">应付</th>\r\n                        <th class="th-border" width="100">预付款</th>\r\n                        <th class="th-border">备注</th>\r\n                        <th class="th-border" width="60">操作</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody class="T-busList">\r\n                {{if !!arrangeList && arrangeList.length > 0}}\r\n                {{each arrangeList as rs}}\r\n                    <tr data-id="{{rs.id}}">\r\n                        <td>\r\n                            <input name="startTime" value="{{rs.startTime | dateFormat: \'yyyy-MM-dd\'}}" type="text" class="datepicker"{{if !!rs.isConfirmAccount}} disabled{{/if}} />\r\n                        </td>\r\n                        <td>\r\n                            <input name="endTime" value="{{rs.endTime | dateFormat: \'yyyy-MM-dd\'}}" type="text" class="datepicker"{{if !!rs.isConfirmAccount}} disabled{{/if}}/>\r\n                        </td>\r\n                        <td>\r\n                            <input name="needSeatCount" value="{{rs.needSeatCount}}" type="text" class="col-sm-12 bind-change" {{if !!rs.isConfirmAccount}} disabled{{/if}}/>\r\n                        </td>\r\n                        <td>\r\n                            <input name="needBusBrand" value="{{rs.needBusBrand}}" type="text" class="col-sm-12 bind-change" {{if !!rs.isConfirmAccount}} disabled{{/if}}/>\r\n                        </td>\r\n                        <td>\r\n                            <div class="col-sm-12">\r\n                                <input name="busCompany" value="{{rs.busCompanyName}}" type="text" class="col-sm-12 bind-change" data-id="{{rs.busCompanyId}}"{{if !!rs.isConfirmAccount}} disabled{{/if}} />\r\n                                {{if !rs.isConfirmAccount}}\r\n                                <span class="addResourceBtn T-action T-add-busCompany" title="添加车队"><i class="ace-icon fa fa-plus bigger-110 icon-only"></i></span>\r\n                                {{/if}}\r\n                            </div>\r\n                        </td>\r\n                        <td>\r\n                            <input name="fee" value="{{rs.fee}}" type="text" class="col-sm-12 T-action-blur F-float F-money" maxlength="9"{{if !!rs.isConfirmAccount}} disabled{{/if}} />\r\n                        </td>\r\n                        <td>\r\n                            <input name="reduceMoney" value="{{rs.reduceMoney}}" type="text" class="col-sm-12 T-action-blur F-float F-money" maxlength="9"{{if !!rs.isConfirmAccount}} disabled{{/if}} />\r\n                        </td>\r\n                        <td>\r\n                            <input name="sumCostMoney" value="{{rs.sumCostMoney}}" type="text" class="col-sm-12 F-float F-money" readonly />\r\n                        </td>\r\n                        <td>\r\n                            <input name="prePayMoney" value="{{rs.prePayMoney}}" type="text" class="col-sm-12 F-float F-money"{{if !!rs.isConfirmAccount}} disabled{{/if}} />\r\n                        </td>\r\n                        <td>\r\n                            <input name="remark" value="{{rs.remark}}" type="text" class="col-sm-12"{{if !!rs.isConfirmAccount}} disabled{{/if}} />\r\n                        </td>\r\n                        <td>\r\n                            <a class="cursor{{if !!rs.isConfirmAccount}} hct-color-BBB{{else}} T-action T-bus-delete{{/if}}"{{if !!rs.isConfirmAccount}} title="已对账，不能删除！"{{/if}}>删除</a>\r\n                        </td>\r\n                    </tr>\r\n                    {{/each}}\r\n                    {{else}}\r\n                    <tr>\r\n                        <td>\r\n                            <input name="startTime" type="text" class="datepicker" />\r\n                        </td>\r\n                        <td>\r\n                            <input name="endTime" type="text" class="datepicker" />\r\n                        </td>\r\n                        <td>\r\n                            <input name="needSeatCount" type="text" class="col-sm-12 bind-change" />\r\n                        </td>\r\n                        <td>\r\n                            <input name="needBusBrand" type="text" class="col-sm-12 bind-change" />\r\n                        </td>\r\n                        <td>\r\n                            <div class="col-sm-12">\r\n                                <input name="busCompany" type="text" class="col-sm-12 bind-change" />\r\n                                <span class="addResourceBtn T-action T-add-busCompany" title="添加车队"><i class="ace-icon fa fa-plus bigger-110 icon-only"></i></span>\r\n                            </div>\r\n                        </td>\r\n                        <td>\r\n                            <input name="fee" type="text" class="col-sm-12 T-action-blur F-float F-money" maxlength="9" />\r\n                        </td>\r\n                        <td>\r\n                            <input name="reduceMoney" type="text" class="col-sm-12 T-action-blur F-float F-money" maxlength="9" />\r\n                        </td>\r\n                        <td>\r\n                            <input name="sumCostMoney" type="text" class="col-sm-12 F-float F-money" readonly />\r\n                        </td>\r\n                        <td>\r\n                            <input name="prePayMoney" type="text" class="col-sm-12 F-float F-money" />\r\n                        </td>\r\n                        <td>\r\n                            <input name="remark" type="text" class="col-sm-12" />\r\n                        </td>\r\n                        <td>\r\n                            <a class="cursor T-action T-bus-delete">删除</a>\r\n                        </td>\r\n                    </tr>\r\n                    {{/if}}\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class="text-center mar-t-20">\r\n    <button class="btn btn-sm btn-primary mar-r-20 T-cancel"> <i class="ace-icon fa fa-times-circle"></i> 取消 </button>\r\n    <button class="btn btn-sm btn-primary mar-r-20 T-hotel-already T-hotel-save"> <i class="ace-icon fa fa-check-circle"></i> 提交信息 </button>\r\n    <span class="checkbox checkbox-inline mar-0" data-target="#transit_receive_bus">\r\n        <label>\r\n            <input name="status" type="checkbox" class="ace T-finishedArrange" {{if status == 1}}checked{{/if}}>\r\n            <span class="lbl font-w"> 车辆安排完成</span>\r\n        </label>\r\n    </span>\r\n</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});