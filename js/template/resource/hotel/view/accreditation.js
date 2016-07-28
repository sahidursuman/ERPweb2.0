/*TMODJS:{"debug":true,"version":390,"md5":"ac00f71b8e6ef61af626d183885f4244"}*/
define(function(require) {
    return require("../../../template")("resource/hotel/view/accreditation", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, hotelName = $data.hotelName, hotelId = $data.hotelId, provinceId = $data.provinceId, cityId = $data.cityId, districtId = $data.districtId, street = $data.street, level = $data.level, $out = "";
            return $out += '<div class="col-xs-12"> <div class="row"> <div class="col-xs-12 mar-t-20"> <form class="form-horizontal T-form" onsubmit="return false"> <div class="form-group"> <label class="col-xs-2 control-label no-padding-right"><span class="necessary">*</span>酒店名称</label> <div class="col-xs-10"> <input type="text" class="col-xs-10" name="hotelName" value="', 
            $line = 8, $out += $escape(hotelName), $out += '" placeholder="商家名称务必和营业执照名称一致，否则审核不通过"> <input name="hotelId" value="', 
            $line = 10, $out += $escape(hotelId), $out += '" type="hidden"> </div> </div> <div class="form-group"> <label class="col-xs-2 control-label no-padding-right"><span class="necessary">*</span>所在地区</label> <div class="col-xs-10"> <select class="col-xs-3 mar-r-20" name="provinceId" > <option selected="selected" value="">未选择</option> </select> <select class="col-xs-3 mar-r-20" name="cityId"> <option selected="selected" value="">未选择</option> </select> <select class="col-xs-3 mar-r-20 mar-l-3" name="districtId"> <option selected="selected" value="">未选择</option> </select> <input name="province" type="hidden" value="', 
            $line = 26, $out += $escape(provinceId), $out += '" /> <input name="city" type="hidden" value="', 
            $line = 27, $out += $escape(cityId), $out += '" /> <input name="district" type="hidden" value="', 
            $line = 28, $out += $escape(districtId), $out += '" /> </div> </div> <div class="form-group"> <label class="col-xs-2 control-label no-padding-right"><span class="necessary">*</span>酒店地址</label> <div class="col-xs-10"> <input type="text" class="col-xs-10" name="street" value="', 
            $line = 35, $out += $escape(street), $out += '" placeholder="商家地址务必和营业执照名称一致，否则审核不通过"> </div> </div> <div class="form-group"> <label class="col-xs-2 control-label no-padding-right">酒店星级</label> <div class="col-xs-10"> <select class="col-xs-10" name="level" > <option selected="selected" value="1" ', 
            $line = 43, 1 == level && ($out += "selected", $line = 43), $out += '>三星以下</option> <option value="2" ', 
            $line = 44, 2 == level && ($out += "selected", $line = 44), $out += '>三星</option> <option value="3" ', 
            $line = 45, 3 == level && ($out += "selected", $line = 45), $out += '>准四星</option> <option value="4" ', 
            $line = 46, 4 == level && ($out += "selected", $line = 46), $out += '>四星</option> <option value="5" ', 
            $line = 47, 5 == level && ($out += "selected", $line = 47), $out += '>准五星</option> <option value="6" ', 
            $line = 48, 6 == level && ($out += "selected", $line = 48), $out += '>五星</option> <option value="7" ', 
            $line = 49, 7 == level && ($out += "selected", $line = 49), $out += '>五星以上</option> </select> </div> </div> <div class="form-group"> <label class="col-xs-2 control-label no-padding-right"><span class="necessary">*</span>责任联系人</label> <div class="col-xs-10"> <div class="pull-left"> <input type="text" class="col-xs-12 mar-r-10" name="managerName" placeholder="姓名"> </div> <div class="col-xs-7"> <input type="text" class="col-xs-12" name="mobileNumber" placeholder="手机号"> </div> </div> </div> <div class="form-group col-xs-6"> <label class="col-xs-4 control-label no-padding-right">上传营业执照</label> <div class="col-xs-8 T-imgContainer" data-id="businessLicensePic"> <input type="file" name="businessLicensePic" id="businessLicensePic" class="T-upimg" /> </div> </div> <div class="form-group col-xs-6"> <label class="col-xs-4 control-label no-padding-right">纳税人资格证</label> <div class="col-xs-8 T-imgContainer" data-id="taxesCardPic"> <input type="file" name="taxesCardPic" id="taxesCardPic" class="T-upimg" /> </div> </div> <div class="col-xs-7"> <label class="col-xs-3"></label> <div class="col-xs-9"> <input type="checkbox" class="T-isAgree" >&nbsp; <span> <a class="">我已阅读并同意《火柴头用户协议》</a> </span> </div> </div> <div class="form-group"> <div class="col-xs-12 mar-b-10"> <button class="btn btn-block btn-primary T-btn-save R-right guideSubmit" disabled> <i class="ace-icon fa fa-check"></i> 申请认证 </button> </div> <div > <label class="col-xs-12 font-w no-padding-right"> <span > 注&nbsp;:&nbsp;认证成功后,&nbsp;可以用借款与商家进行在线支付 </span> </label> </div> </div> </form> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12">\r\n    <div class="row">\r\n        <div class="col-xs-12 mar-t-20">\r\n            <form class="form-horizontal T-form" onsubmit="return false">\r\n                <div class="form-group">\r\n                    <label class="col-xs-2 control-label no-padding-right"><span class="necessary">*</span>酒店名称</label>\r\n                    <div class="col-xs-10">\r\n                        <input type="text" class="col-xs-10" name="hotelName" value="{{hotelName}}" \r\n                               placeholder="商家名称务必和营业执照名称一致，否则审核不通过">\r\n                        <input name="hotelId" value="{{hotelId}}" type="hidden">\r\n                    </div>\r\n                </div>\r\n\r\n                <div class="form-group">\r\n                    <label class="col-xs-2 control-label no-padding-right"><span class="necessary">*</span>所在地区</label>\r\n                    <div class="col-xs-10">\r\n                        <select class="col-xs-3 mar-r-20" name="provinceId" >\r\n                            <option selected="selected" value="">未选择</option>\r\n                        </select>\r\n                        <select class="col-xs-3 mar-r-20" name="cityId">\r\n                            <option selected="selected" value="">未选择</option>\r\n                        </select>\r\n                        <select class="col-xs-3 mar-r-20 mar-l-3" name="districtId">\r\n                            <option selected="selected" value="">未选择</option>\r\n                        </select>\r\n                        <input name="province" type="hidden" value="{{provinceId}}" />\r\n                        <input name="city" type="hidden" value="{{cityId}}" />\r\n                        <input name="district" type="hidden" value="{{districtId}}" />\r\n                    </div>\r\n                </div>\r\n\r\n                <div class="form-group">\r\n                    <label class="col-xs-2 control-label no-padding-right"><span class="necessary">*</span>酒店地址</label>\r\n                    <div class="col-xs-10">\r\n                        <input type="text" class="col-xs-10" name="street" value="{{street}}" placeholder="商家地址务必和营业执照名称一致，否则审核不通过">\r\n                    </div>\r\n                </div>\r\n\r\n                <div class="form-group">\r\n                    <label class="col-xs-2 control-label no-padding-right">酒店星级</label>\r\n                    <div class="col-xs-10">\r\n                        <select class="col-xs-10" name="level" >\r\n                            <option selected="selected" value="1" {{if level == 1}}selected{{/if}}>三星以下</option>\r\n                            <option value="2" {{if level == 2}}selected{{/if}}>三星</option>\r\n                            <option value="3" {{if level == 3}}selected{{/if}}>准四星</option>\r\n                            <option value="4" {{if level == 4}}selected{{/if}}>四星</option>\r\n                            <option value="5" {{if level == 5}}selected{{/if}}>准五星</option>\r\n                            <option value="6" {{if level == 6}}selected{{/if}}>五星</option>\r\n                            <option value="7" {{if level == 7}}selected{{/if}}>五星以上</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class="form-group">\r\n                    <label class="col-xs-2 control-label no-padding-right"><span class="necessary">*</span>责任联系人</label>\r\n                    <div class="col-xs-10">\r\n                        <div class="pull-left">\r\n                            <input type="text" class="col-xs-12 mar-r-10" name="managerName" placeholder="姓名">\r\n                        </div>\r\n                        <div class="col-xs-7">\r\n                            <input type="text" class="col-xs-12" name="mobileNumber" placeholder="手机号">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class="form-group col-xs-6">\r\n                    <label class="col-xs-4 control-label no-padding-right">上传营业执照</label>\r\n                    <div class="col-xs-8 T-imgContainer" data-id="businessLicensePic">\r\n                            <input type="file" name="businessLicensePic" id="businessLicensePic" class="T-upimg" />\r\n                    </div>\r\n                </div>\r\n\r\n                <div class="form-group col-xs-6">\r\n                    <label class="col-xs-4 control-label no-padding-right">纳税人资格证</label>\r\n                    <div class="col-xs-8 T-imgContainer" data-id="taxesCardPic">\r\n                            <input type="file" name="taxesCardPic" id="taxesCardPic" class="T-upimg" />\r\n                    </div>\r\n                </div>\r\n                <div class="col-xs-7">\r\n                    <label class="col-xs-3"></label>\r\n                    <div class="col-xs-9">\r\n                        <input type="checkbox" class="T-isAgree" >&nbsp;\r\n                        <span>\r\n                            <a class="">我已阅读并同意《火柴头用户协议》</a>\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n                <div class="form-group">\r\n                    <div class="col-xs-12 mar-b-10">\r\n                        <button class="btn btn-block btn-primary T-btn-save R-right guideSubmit" disabled> <i class="ace-icon fa fa-check"></i> 申请认证 </button>\r\n                    </div>\r\n                    <div >\r\n                        <label class="col-xs-12 font-w  no-padding-right">\r\n                            <span >\r\n                                注&nbsp;:&nbsp;认证成功后,&nbsp;可以用借款与商家进行在线支付\r\n                            </span>\r\n                        </label>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});