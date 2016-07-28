/*TMODJS:{"debug":true,"version":48,"md5":"e6e7a67ab7c210987357f9b53ee00094"}*/
define(function(require) {
    return require("../../../template")("busOrder/newOrder/viewCity/updateCity", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, order = $data.order, $string = $utils.$string, $each = $utils.$each, $out = ($data.rs, 
            $data.index, "");
            return $out += '<div class="T-addNewCityOrder container-fulid col-xs-12"> <form class="form-horizontal clearBoth"> <div class=""> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right min-width100">车队名称：</label> <label class="col-sm-2 texta-l">', 
            $line = 6, $out += $escape(order.companyName), $out += '</label> </div> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right min-width100"><span class="red">*</span>请选择行程：</label> <div class="T-tripSelectDiv col-sm-2"> <input class="T-tripSelect col-sm-10" type="text" value="', 
            $line = 11, $out += $escape(order.tripType.name), $out += '" disabled> <input type="hidden" name="position" value="', 
            $line = 12, $out += $escape(order.tripType.position), $out += '"> <input type="hidden" name="type" value="', 
            $line = 13, $out += $escape(order.tripType.type), $out += '"> <input type="hidden" name="tripTypeId" value="', 
            $line = 14, $out += $escape(order.tripType.id), $out += '"> <input type="hidden" name="id" value="', 
            $line = 15, $out += $escape(order.id), $out += '"> </div> </div> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right min-width100"><span class="red">*</span>任务日期：</label> <div class="col-sm-2"> <input class="T-datepicker" name="tripTime" type="text" value="', 
            $line = 21, $out += $escape(order.tripTime), $out += '"> </div> </div> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right min-width100">导游姓名：</label> <div class="col-sm-2"> <input name="guideName" type="text" value="', 
            $line = 27, $out += $escape(order.guideName), $out += '"> </div> <label class="col-sm-1 control-label no-padding-right min-width100">导游电话：</label> <div class="col-sm-2"> <input name="guideMobileNumber" type="text" value="', 
            $line = 31, $out += $escape(order.guideMobileNumber), $out += '"> </div> </div> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right min-width100"><span class="red">*</span>目的地：</label> <div class="col-sm-2"> <input name="togetherPosition" type="text" value="', 
            $line = 37, $out += $escape(order.togetherPosition), $out += '"> </div> <label class="col-sm-1 control-label no-padding-right min-width100"><span class="red">*</span>集合时间：</label> <div class="col-sm-2"> <select name="togetherHour">', 
            $line = 41, $out += $string($helpers.getShiftTime(order.togetherHour, "hour")), 
            $out += '</select> <select name="togetherMinute">', $line = 42, $out += $string($helpers.getShiftTime(order.togetherMinute, "minute")), 
            $out += '</select> </div> </div> <div class="T-cityContent"> <div class="form-group col-sm-12"> <button class="T-addGroup btn btn-xs btn-success pull-right"><i class="ace-icon fa fa-plus"></i>新增小组</button> </div> <div class="T-touristList"> <table class="table table-striped table-bordered table-hover table-text-center va-middle"> <tbody> <tr> <th>小组序号</th> <th>团号</th> <th>联系人姓名</th> <th>联系人电话</th> <th>人数</th> <th>入住酒店</th> <th>酒店地址</th> <th>操作</th> </tr> </tbody> </table> </div> <h5 class="col-xs-12"><label class="middle">订单类型及单价：</label></h5> <table class="T-orderType col-xs-6 table table-striped table-bordered table-hover table-text-center"> <tr> <td><label><input class="T-radio T-carpooling ace" name="form-field-radio" type="radio" ', 
            $line = 68, "1" == order.priceType && ($out += "checked", $line = 68), $out += '><span class="lbl"> 拼车</span></label></td> <td><span class="T-carpoolingPrice">', 
            $line = 69, "1" == order.priceType ? ($line = 69, $out += $escape(order.price), 
            $line = 69) : ($out += "0", $line = 69), $out += '</span>元/座<input type="hidden" name="carpoolingPrice" value="', 
            $line = 69, "1" == order.priceType && ($line = 69, $out += $escape(order.price), 
            $line = 69), $out += '"></td> </tr> </table> <div class="T-feeListRemark"> <h5 class="col-xs-12"><label class="middle">其他费用：<button class="T-addFee T-feeAction btn btn-xs btn-success"><i class="ace-icon fa fa-plus"></i>新增费用</button></label></h5> <table class="table table-striped table-bordered table-hover table-text-center col-xs-6"> <tr> <th>金额</th> <th>备注</th> <th>操作</th> </tr> ', 
            $line = 80, $each(order.otherFeeList, function(rs) {
                $out += ' <tr data-id="', $line = 81, $out += $escape(rs.id), $out += '"> <td><input class="T-clacFee" name="fee" type="text" value="', 
                $line = 82, $out += $escape(rs.fee), $out += '"></td> <td><input name="remark" type="text" value="', 
                $line = 83, $out += $escape(rs.remark), $out += '"></td> <td><button class="T-delete T-feeAction btn btn-xs btn-danger"><i class="ace-icon fa fa-close"></i>删除</button></td> </tr> ', 
                $line = 86;
            }), $out += ' </table> <h5 class="col-xs-12"><label class="middle">订单备注：</label></h5> <div class="col-xs-12 padding-bottom-10"> <textarea name="orderRemark" id="" class="col-xs-12" rows="4">', 
            $line = 90, $out += $escape(order.orderRemark), $out += '</textarea> </div> <div class="col-xs-12"> <p>人数统计：<span class="T-allPeopleText">0大0小</span></p> <p>费用统计：<span class="T-allFeeText">0*(0+0)+0 = <span class="font-size20 red">0</span>元</span></p> </div> </div> </div> </div> </form> <div class="mar-t20"> <button class="T-saveOrder btn btn-sm btn-primary btn-block"><i class="ace-icon fa fa-check"></i>提交 </button> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="T-addNewCityOrder container-fulid  col-xs-12">\r\n    <form class="form-horizontal clearBoth">\r\n        <div class="">\r\n            <div class="form-group">\r\n                <label class="col-sm-1 control-label no-padding-right min-width100">车队名称：</label>\r\n                <label class="col-sm-2 texta-l">{{order.companyName}}</label>\r\n            </div>\r\n            <div class="form-group">\r\n                <label class="col-sm-1 control-label no-padding-right min-width100"><span class="red">*</span>请选择行程：</label>\r\n                <div class="T-tripSelectDiv col-sm-2">\r\n                    <input class="T-tripSelect col-sm-10" type="text" value="{{order.tripType.name}}" disabled>\r\n                    <input type="hidden" name="position" value="{{order.tripType.position}}">\r\n                    <input type="hidden" name="type" value="{{order.tripType.type}}">\r\n                    <input type="hidden" name="tripTypeId" value="{{order.tripType.id}}">\r\n                    <input type="hidden" name="id" value="{{order.id}}">\r\n                </div>\r\n            </div>\r\n            <div class="form-group">\r\n                <label class="col-sm-1 control-label no-padding-right min-width100"><span class="red">*</span>任务日期：</label>\r\n                <div class="col-sm-2">\r\n                    <input class="T-datepicker" name="tripTime" type="text" value="{{order.tripTime}}">\r\n                </div>\r\n            </div>\r\n            <div class="form-group">\r\n                <label class="col-sm-1 control-label no-padding-right min-width100">导游姓名：</label>\r\n                <div class="col-sm-2">\r\n                    <input name="guideName" type="text" value="{{order.guideName}}">\r\n                </div>\r\n                <label class="col-sm-1 control-label no-padding-right min-width100">导游电话：</label>\r\n                <div class="col-sm-2">\r\n                    <input name="guideMobileNumber" type="text"  value="{{order.guideMobileNumber}}">\r\n                </div>\r\n            </div>\r\n            <div class="form-group">\r\n                <label class="col-sm-1 control-label no-padding-right min-width100"><span class="red">*</span>目的地：</label>\r\n                <div class="col-sm-2">\r\n                    <input name="togetherPosition" type="text" value="{{order.togetherPosition}}">\r\n                </div>\r\n                <label class="col-sm-1 control-label no-padding-right min-width100"><span class="red">*</span>集合时间：</label>\r\n                <div class="col-sm-2">\r\n                    <select name="togetherHour">{{#order.togetherHour | getShiftTime: \'hour\'}}</select>\r\n                    <select name="togetherMinute">{{#order.togetherMinute | getShiftTime: \'minute\'}}</select>\r\n                </div>\r\n            </div>\r\n            <div class="T-cityContent">\r\n                <div class="form-group col-sm-12">\r\n                    <button class="T-addGroup btn btn-xs btn-success pull-right"><i class="ace-icon fa fa-plus"></i>新增小组</button>\r\n                </div>\r\n                <div class="T-touristList">\r\n                    <table class="table table-striped table-bordered table-hover table-text-center va-middle">\r\n                        <tbody>\r\n                            <tr>\r\n                                <th>小组序号</th>\r\n                                <th>团号</th>\r\n                                <th>联系人姓名</th>\r\n                                <th>联系人电话</th>\r\n                                <th>人数</th>\r\n                                <th>入住酒店</th>\r\n                                <th>酒店地址</th>\r\n                                <th>操作</th>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n                <h5 class="col-xs-12"><label class="middle">订单类型及单价：</label></h5>\r\n                <table class="T-orderType col-xs-6 table table-striped table-bordered table-hover table-text-center">\r\n                    <tr>\r\n                        <td><label><input class="T-radio T-carpooling ace" name="form-field-radio" type="radio" {{if order.priceType == \'1\'}}checked{{/if}}><span class="lbl"> 拼车</span></label></td>\r\n                        <td><span class="T-carpoolingPrice">{{if order.priceType == \'1\'}}{{order.price}}{{else}}0{{/if}}</span>元/座<input type="hidden" name="carpoolingPrice" value="{{if order.priceType == \'1\'}}{{order.price}}{{/if}}"></td>\r\n                    </tr>\r\n                </table>\r\n                <div class="T-feeListRemark">\r\n                    <h5 class="col-xs-12"><label class="middle">其他费用：<button class="T-addFee T-feeAction btn btn-xs btn-success"><i class="ace-icon fa fa-plus"></i>新增费用</button></label></h5>\r\n                    <table class="table table-striped table-bordered table-hover table-text-center col-xs-6">\r\n                        <tr>\r\n                            <th>金额</th>\r\n                            <th>备注</th>\r\n                            <th>操作</th>\r\n                        </tr>\r\n                        {{each order.otherFeeList as rs index}}\r\n                        <tr data-id="{{rs.id}}">\r\n                            <td><input class="T-clacFee" name="fee" type="text" value="{{rs.fee}}"></td>\r\n                            <td><input name="remark" type="text" value="{{rs.remark}}"></td>\r\n                            <td><button class="T-delete T-feeAction btn btn-xs btn-danger"><i class="ace-icon fa fa-close"></i>删除</button></td>\r\n                        </tr>\r\n                        {{/each}}\r\n                    </table>\r\n                    <h5 class="col-xs-12"><label class="middle">订单备注：</label></h5>\r\n                    <div class="col-xs-12 padding-bottom-10">\r\n                        <textarea name="orderRemark" id="" class="col-xs-12" rows="4">{{order.orderRemark}}</textarea> \r\n                    </div>\r\n                    <div class="col-xs-12">\r\n                        <p>人数统计：<span class="T-allPeopleText">0大0小</span></p>\r\n                        <p>费用统计：<span class="T-allFeeText">0*(0+0)+0 = <span class="font-size20 red">0</span>元</span></p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n    <div class="mar-t20">\r\n        <button class="T-saveOrder btn btn-sm btn-primary btn-block"><i class="ace-icon fa fa-check"></i>提交 </button>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});