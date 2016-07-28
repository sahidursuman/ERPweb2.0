/*TMODJS:{"debug":true,"version":122,"md5":"8839887cd6d3980ed50920c029846297"}*/
define(function(require) {
    return require("../../../template")("customer/newOrder/view/shuttle", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), order = $data.order, $escape = $utils.$escape, $each = $utils.$each, $out = ($data.rs, 
            $data.index, "");
            return $out += '<div class="form-group col-sm-12 T-pickSend"> <button class="T-addGroup btn btn-xs btn-success pull-right ', 
            $line = 2, order.id || ($out += "hide", $line = 2), $out += '"><i class="ace-icon fa fa-plus"></i>新增小组</button> </div> <div class="T-touristList"> <table class="table table-striped table-bordered table-hover table-text-center va-middle"> <tr> <th>小组序号</th> <th>团号</th> <th>联系人姓名</th> <th>联系人电话</th> <th>人数</th> <th>上车点</th> <th>目的地</th> <th>操作</th> </tr> </table> </div> <h5 class="col-xs-12"><label class="middle">订单类型及单价：</label></h5> <table class="T-orderType col-xs-6 table table-striped table-bordered table-hover table-text-center"> <tr> <td><label><input class="T-radio T-carpooling ace" name="form-field-radio" type="radio" ', 
            $line = 21, "1" == order.priceType && ($out += "checked", $line = 21), $out += '><span class="lbl"> 拼车</span></label></td> <td><span class="T-carpoolingPrice">', 
            $line = 22, "1" == order.priceType ? ($line = 22, $out += $escape(order.price), 
            $line = 22) : ($out += "0", $line = 22), $out += '</span>元/座<input type="hidden" name="carpoolingPrice" value="', 
            $line = 22, "1" == order.priceType && ($line = 22, $out += $escape(order.price), 
            $line = 22), $out += '"></td> <td><label><input class="T-radio T-charter ace" name="form-field-radio" type="radio" ', 
            $line = 23, "0" == order.priceType && ($out += "checked", $line = 23), $out += '><span class="lbl"> 包车</span></label></td> <td><input class="T-charterPrice T-clacFee" type="text" name="charterPrice" value="', 
            $line = 24, "0" == order.priceType && ($line = 24, $out += $escape(order.price), 
            $line = 24), $out += '" ', $line = 24, "1" == order.priceType && ($out += "readonly", 
            $line = 24), $out += '> 元</td> </tr> </table> <div class="T-feeListRemark"> <h5 class="col-xs-12"><label class="middle">其他费用：<button class="T-addFee T-feeAction btn btn-xs btn-success"><i class="ace-icon fa fa-plus"></i>新增费用</button></label></h5> <table class="table table-striped table-bordered table-hover table-text-center col-xs-6"> <tr> <th>金额</th> <th>备注</th> <th>操作</th> </tr> ', 
            $line = 35, $each(order.otherFeeList, function(rs) {
                $out += ' <tr data-id="', $line = 36, $out += $escape(rs.id), $out += '"> <td><input class="T-clacFee" name="fee" type="text" value="', 
                $line = 37, $out += $escape(rs.fee), $out += '"></td> <td><input name="remark" type="text" value="', 
                $line = 38, $out += $escape(rs.remark), $out += '"></td> <td><button class="T-delete T-feeAction btn btn-xs btn-danger"><i class="ace-icon fa fa-close"></i>删除</button></td> </tr> ', 
                $line = 41;
            }), $out += ' </table> <h5 class="col-xs-12"><label class="middle">订单备注：</label></h5> <div class="col-xs-12 padding-bottom-10"> <textarea name="orderRemark" id="" class="col-xs-12" rows="4">', 
            $line = 45, $out += $escape(order.orderRemark), $out += '</textarea> </div> <div class="col-xs-12"> <p>人数统计：<span class="T-allPeopleText">0大0小</span></p> <p>费用统计：<span class="T-allFeeText">0*(0+0)+0 = <span class="font-size20 red">0</span>元</span></p> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="form-group col-sm-12 T-pickSend">\r\n    <button class="T-addGroup btn btn-xs btn-success pull-right {{if !order.id}}hide{{/if}}"><i class="ace-icon fa fa-plus"></i>新增小组</button>\r\n</div>\r\n<div class="T-touristList">\r\n    <table class="table table-striped table-bordered table-hover table-text-center va-middle">\r\n        <tr>\r\n            <th>小组序号</th>\r\n            <th>团号</th>\r\n            <th>联系人姓名</th>\r\n            <th>联系人电话</th>\r\n            <th>人数</th>\r\n            <th>上车点</th>\r\n            <th>目的地</th>\r\n            <th>操作</th>\r\n        </tr>\r\n    </table>\r\n</div>\r\n<h5 class="col-xs-12"><label class="middle">订单类型及单价：</label></h5>\r\n<table class="T-orderType col-xs-6 table table-striped table-bordered table-hover table-text-center">\r\n    <tr>\r\n        <td><label><input class="T-radio T-carpooling ace" name="form-field-radio" type="radio" {{if order.priceType == \'1\'}}checked{{/if}}><span class="lbl"> 拼车</span></label></td>\r\n        <td><span class="T-carpoolingPrice">{{if order.priceType == \'1\'}}{{order.price}}{{else}}0{{/if}}</span>元/座<input type="hidden" name="carpoolingPrice" value="{{if order.priceType == \'1\'}}{{order.price}}{{/if}}"></td>\r\n        <td><label><input class="T-radio T-charter ace" name="form-field-radio" type="radio" {{if order.priceType == \'0\'}}checked{{/if}}><span class="lbl"> 包车</span></label></td>\r\n        <td><input class="T-charterPrice T-clacFee" type="text" name="charterPrice" value="{{if order.priceType == \'0\'}}{{order.price}}{{/if}}" {{if order.priceType == \'1\'}}readonly{{/if}}> 元</td>\r\n    </tr>\r\n</table>\r\n<div class="T-feeListRemark">\r\n    <h5 class="col-xs-12"><label class="middle">其他费用：<button class="T-addFee T-feeAction btn btn-xs btn-success"><i class="ace-icon fa fa-plus"></i>新增费用</button></label></h5>\r\n    <table class="table table-striped table-bordered table-hover table-text-center col-xs-6">\r\n        <tr>\r\n            <th>金额</th>\r\n            <th>备注</th>\r\n            <th>操作</th>\r\n        </tr>\r\n        {{each order.otherFeeList as rs index}}\r\n        <tr data-id="{{rs.id}}">\r\n            <td><input class="T-clacFee" name="fee" type="text" value="{{rs.fee}}"></td>\r\n            <td><input name="remark" type="text" value="{{rs.remark}}"></td>\r\n            <td><button class="T-delete T-feeAction btn btn-xs btn-danger"><i class="ace-icon fa fa-close"></i>删除</button></td>\r\n        </tr>\r\n        {{/each}}\r\n    </table>\r\n    <h5 class="col-xs-12"><label class="middle">订单备注：</label></h5>\r\n    <div class="col-xs-12 padding-bottom-10">\r\n        <textarea name="orderRemark" id="" class="col-xs-12" rows="4">{{order.orderRemark}}</textarea> \r\n    </div>\r\n    <div class="col-xs-12">\r\n        <p>人数统计：<span class="T-allPeopleText">0大0小</span></p>\r\n        <p>费用统计：<span class="T-allFeeText">0*(0+0)+0 = <span class="font-size20 red">0</span>元</span></p>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});