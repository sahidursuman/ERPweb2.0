/*TMODJS:{"debug":true,"version":302,"md5":"362c01df535b218d479318e14cd5734b"}*/
define(function(require) {
    return require("../../../template")("busOrder/newOrder/view/add", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, changeData = $data.changeData, order = $data.order, $each = $utils.$each, $out = ($data.rs, 
            $data.index, "");
            return $out += '<div class="T-addNewOrder container-fulid col-xs-12"> <form class="form-horizontal clearBoth"> <div class=""> <div class="form-group"> <label>车队名称：', 
            $line = 5, $out += $escape(changeData.companyName), $out += '</label> </div> <div class="form-group"> <div class="T-tripSelectDiv inline mar-r20"> <label><span class="red">*</span>请选择行程：</label> <input class="T-tripSelect" type="text" value="', 
            $line = 10, $out += $escape(changeData.name), $out += '"> <input type="hidden" name="position" value="', 
            $line = 11, $out += $escape(changeData.position), $out += '"> <input type="hidden" name="type" value="', 
            $line = 12, $out += $escape(changeData.type), $out += '"> <input type="hidden" name="tripTypeName" value="', 
            $line = 13, $out += $escape(changeData.name), $out += '"> <input type="hidden" name="tripTypeId" value="', 
            $line = 14, $out += $escape(changeData.tripTypeId), $out += '"> <input type="hidden" name="authToken" value="', 
            $line = 15, $out += $escape(changeData.authToken), $out += '"> <input type="hidden" name="companyName" value="', 
            $line = 16, $out += $escape(changeData.companyName), $out += '"> </div> <span class="T-tripDate"></span> <label class="T-isRoundCheck hide"> <input class="ace T-isRoundTrip" name="form-field-checkbox" type="checkbox"> <span class="lbl"> 需要往返</span> </label> </div> <div class="form-group T-isRoundContent hide"> <span class="T-roundTrip" style="padding:0;"></span> <span class="T-roundTripDate"></span> </div> <div class="T-tripTypeContent"> <div class="form-group col-sm-12 T-pickSend"> <button class="T-addGroup btn btn-xs btn-success pull-right ', 
            $line = 30, order.id || ($out += "hide", $line = 30), $out += '"><i class="ace-icon fa fa-plus"></i>新增小组</button> </div> <div class="T-touristList"> <table class="table table-striped table-bordered table-hover table-text-center va-middle"> <tr> <th>小组序号</th> <th>团号</th> <th>联系人姓名</th> <th>联系人电话</th> <th>人数</th> <th>上车点</th> <th>目的地</th> <th>操作</th> </tr> </table> </div> <h5 class="col-xs-12"><label class="middle">订单类型及单价：</label></h5> <table class="T-orderType col-xs-6 table table-striped table-bordered table-hover table-text-center"> <tr> <td><label><input class="T-radio T-carpooling ace" name="form-field-radio" type="radio" ', 
            $line = 49, "1" == order.priceType && ($out += "checked", $line = 49), $out += '><span class="lbl"> 拼车</span></label></td> <td><span class="T-carpoolingPrice">', 
            $line = 50, "1" == order.priceType ? ($line = 50, $out += $escape(order.price), 
            $line = 50) : ($out += "0", $line = 50), $out += '</span>元/座<input type="hidden" name="carpoolingPrice" value="', 
            $line = 50, "1" == order.priceType && ($line = 50, $out += $escape(order.price), 
            $line = 50), $out += '"></td> <td><label><input class="T-radio T-charter ace" name="form-field-radio" type="radio" ', 
            $line = 51, "0" == order.priceType && ($out += "checked", $line = 51), $out += '><span class="lbl"> 包车</span></label></td> <td><input class="T-charterPrice T-clacFee" type="text" name="charterPrice" value="', 
            $line = 52, "0" == order.priceType && ($line = 52, $out += $escape(order.price), 
            $line = 52), $out += '" ', $line = 52, "1" == order.priceType && ($out += "readonly", 
            $line = 52), $out += '> 元</td> </tr> </table> <div class="T-feeListRemark"> <h5 class="col-xs-12"><label class="middle">其他费用：<button class="T-addFee T-feeAction btn btn-xs btn-success"><i class="ace-icon fa fa-plus"></i>新增费用</button></label></h5> <table class="table table-striped table-bordered table-hover table-text-center col-xs-6"> <tr> <th>费用项</th> <th>金额</th> <th>备注</th> <th>操作</th> </tr> ', 
            $line = 64, $each(order.otherFeeList, function(rs) {
                $out += ' <tr data-id="', $line = 65, $out += $escape(rs.id), $out += '"> <td><input name="name" type="text" value="', 
                $line = 66, $out += $escape(rs.name), $out += '"></td> <td><input class="T-clacFee" name="fee" type="text" value="', 
                $line = 67, $out += $escape(rs.fee), $out += '"></td> <td><input name="remark" type="text" value="', 
                $line = 68, $out += $escape(rs.remark), $out += '"></td> <td><button class="T-delete T-feeAction btn btn-xs btn-danger"><i class="ace-icon fa fa-close"></i>删除</button></td> </tr> ', 
                $line = 71;
            }), $out += ' </table> <h5 class="col-xs-12"><label class="middle">订单备注：</label></h5> <div class="col-xs-12 padding-bottom-10"> <textarea name="orderRemark" id="" class="col-xs-12" rows="4">', 
            $line = 75, $out += $escape(order.orderRemark), $out += '</textarea> </div> <div class="col-xs-12"> <p>人数统计：<span class="T-allPeopleText">0大0小</span></p> <p>费用统计：<span class="T-allFeeText">0*(0+0)+0 = <span class="font-size20 red">0</span>元</span></p> </div> </div> </div> </div> </form> <div class="mar-t20"> <button class="T-saveOrder btn btn-sm btn-primary btn-block"><i class="ace-icon fa fa-check"></i>提交 </button> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="T-addNewOrder container-fulid  col-xs-12">\r\n    <form class="form-horizontal clearBoth">\r\n        <div class="">\r\n            <div class="form-group">\r\n                <label>车队名称：{{changeData.companyName}}</label>\r\n            </div>\r\n            <div class="form-group">\r\n                <div class="T-tripSelectDiv inline mar-r20">\r\n                    <label><span class="red">*</span>请选择行程：</label>\r\n                    <input class="T-tripSelect" type="text" value="{{changeData.name}}">\r\n                    <input type="hidden" name="position" value="{{changeData.position}}">\r\n                    <input type="hidden" name="type" value="{{changeData.type}}">\r\n                    <input type="hidden" name="tripTypeName" value="{{changeData.name}}">\r\n                    <input type="hidden" name="tripTypeId" value="{{changeData.tripTypeId}}">\r\n                    <input type="hidden" name="authToken" value="{{changeData.authToken}}">\r\n                    <input type="hidden" name="companyName" value="{{changeData.companyName}}">\r\n                </div>\r\n                <span class="T-tripDate"></span>\r\n                <label class="T-isRoundCheck hide">\r\n                    <input class="ace T-isRoundTrip" name="form-field-checkbox" type="checkbox">\r\n                    <span class="lbl"> 需要往返</span>\r\n                </label>\r\n            </div>\r\n            <div class="form-group T-isRoundContent hide">\r\n                <span class="T-roundTrip" style="padding:0;"></span>\r\n                <span class="T-roundTripDate"></span>\r\n            </div>\r\n            <div class="T-tripTypeContent">\r\n                <div class="form-group col-sm-12 T-pickSend">\r\n                    <button class="T-addGroup btn btn-xs btn-success pull-right {{if !order.id}}hide{{/if}}"><i class="ace-icon fa fa-plus"></i>新增小组</button>\r\n                </div>\r\n                <div class="T-touristList">\r\n                    <table class="table table-striped table-bordered table-hover table-text-center va-middle">\r\n                        <tr>\r\n                            <th>小组序号</th>\r\n                            <th>团号</th>\r\n                            <th>联系人姓名</th>\r\n                            <th>联系人电话</th>\r\n                            <th>人数</th>\r\n                            <th>上车点</th>\r\n                            <th>目的地</th>\r\n                            <th>操作</th>\r\n                        </tr>\r\n                    </table>\r\n                </div>\r\n                <h5 class="col-xs-12"><label class="middle">订单类型及单价：</label></h5>\r\n                <table class="T-orderType col-xs-6 table table-striped table-bordered table-hover table-text-center">\r\n                    <tr>\r\n                        <td><label><input class="T-radio T-carpooling ace" name="form-field-radio" type="radio" {{if order.priceType == \'1\'}}checked{{/if}}><span class="lbl"> 拼车</span></label></td>\r\n                        <td><span class="T-carpoolingPrice">{{if order.priceType == \'1\'}}{{order.price}}{{else}}0{{/if}}</span>元/座<input type="hidden" name="carpoolingPrice" value="{{if order.priceType == \'1\'}}{{order.price}}{{/if}}"></td>\r\n                        <td><label><input class="T-radio T-charter ace" name="form-field-radio" type="radio" {{if order.priceType == \'0\'}}checked{{/if}}><span class="lbl"> 包车</span></label></td>\r\n                        <td><input class="T-charterPrice T-clacFee" type="text" name="charterPrice" value="{{if order.priceType == \'0\'}}{{order.price}}{{/if}}" {{if order.priceType == \'1\'}}readonly{{/if}}> 元</td>\r\n                    </tr>\r\n                </table>\r\n                <div class="T-feeListRemark">\r\n                    <h5 class="col-xs-12"><label class="middle">其他费用：<button class="T-addFee T-feeAction btn btn-xs btn-success"><i class="ace-icon fa fa-plus"></i>新增费用</button></label></h5>\r\n                    <table class="table table-striped table-bordered table-hover table-text-center col-xs-6">\r\n                        <tr>\r\n                            <th>费用项</th>\r\n                            <th>金额</th>\r\n                            <th>备注</th>\r\n                            <th>操作</th>\r\n                        </tr>\r\n                        {{each order.otherFeeList as rs index}}\r\n                        <tr data-id="{{rs.id}}">\r\n                            <td><input name="name" type="text" value="{{rs.name}}"></td>\r\n                            <td><input class="T-clacFee" name="fee" type="text" value="{{rs.fee}}"></td>\r\n                            <td><input name="remark" type="text" value="{{rs.remark}}"></td>\r\n                            <td><button class="T-delete T-feeAction btn btn-xs btn-danger"><i class="ace-icon fa fa-close"></i>删除</button></td>\r\n                        </tr>\r\n                        {{/each}}\r\n                    </table>\r\n                    <h5 class="col-xs-12"><label class="middle">订单备注：</label></h5>\r\n                    <div class="col-xs-12 padding-bottom-10">\r\n                        <textarea name="orderRemark" id="" class="col-xs-12" rows="4">{{order.orderRemark}}</textarea> \r\n                    </div>\r\n                    <div class="col-xs-12">\r\n                        <p>人数统计：<span class="T-allPeopleText">0大0小</span></p>\r\n                        <p>费用统计：<span class="T-allFeeText">0*(0+0)+0 = <span class="font-size20 red">0</span>元</span></p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n    <div class="mar-t20">\r\n        <button class="T-saveOrder btn btn-sm btn-primary btn-block"><i class="ace-icon fa fa-check"></i>提交 </button>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});