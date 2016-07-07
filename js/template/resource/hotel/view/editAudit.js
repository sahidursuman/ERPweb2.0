/*TMODJS:{"debug":true,"version":49,"md5":"62bd63294597400cb73ac5fd06b1fb57"}*/
define(function(require) {
    return require("../../../template")("resource/hotel/view/editAudit", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), isAuth = $data.isAuth, $escape = $utils.$escape, hotelAudit = $data.hotelAudit, hotelId = $data.hotelId, $out = "";
            return $out += '<div class="col-xs-12"> <div class="page-header"> <p> <span class="hct-hotel-font-20 mar-t-3"> ', 
            $line = 5, 2 == isAuth ? ($out += " 已通过认证审核 ", $line = 7) : ($out += " 认证审核失败 ", 
            $line = 9), $out += ' </span> </p> <span class="hct-hotel-font-14"> ', $line = 13, 
            2 == isAuth ? ($out += " 注&nbsp;:&nbsp;认证成功后,&nbsp;可以用借款与商家进行在线支付 ", $line = 15) : ($out += " 原因&nbsp;:&nbsp;", 
            $line = 16, $out += $escape(hotelAudit.refuseRemark), $out += " ", $line = 17), 
            $out += ' </span> </div> <div class="row"> <div class="col-xs-12"> <form class="form-horizontal T-form" onsubmit="return false"> <div class="form-group"> <label class="col-xs-2 control-label no-padding-right"><span class="necessary">*</span>酒店名称</label> <div class="col-xs-10"> <input type="text" class="col-xs-10" name="hotelName" value="', 
            $line = 27, $out += $escape(hotelAudit.hotelName), $out += '" placeholder="商家名称务必和营业执照名称一致，否则审核不通过"> <input name="hotelId" value="', 
            $line = 29, $out += $escape(hotelId), $out += '" type="hidden"> </div> </div> <div class="form-group"> <label class="col-xs-2 control-label no-padding-right"><span class="necessary">*</span>所在地区</label> <div class="col-xs-10"> <select class="col-xs-3" name="provinceId" style="margin-right:4px;height:24px !important;"> <option selected="selected" value="">未选择</option> </select> <select class="col-xs-3" name="cityId" style="margin-right:4px;height:24px !important;"> <option selected="selected" value="">未选择</option> </select> <select class="col-xs-3" name="districtId" style="height:24px !important;"> <option selected="selected" value="">未选择</option> </select> </div> </div> <div class="form-group"> <label class="col-xs-2 control-label no-padding-right"><span class="necessary">*</span>酒店地址</label> <div class="col-xs-10"> <input type="text" class="col-xs-10" name="street" value="', 
            $line = 51, $out += $escape(hotelAudit.street), $out += '" placeholder="商家地址务必和营业执照名称一致，否则审核不通过"> </div> </div> <div class="form-group"> <label class="col-xs-2 control-label no-padding-right">酒店星级</label> <div class="col-xs-10"> <select class="col-xs-10" name="level" style="margin-right:3px;height:24px !important;"> <option value="1" ', 
            $line = 59, 1 == hotelAudit.level && ($out += 'selected="selected"', $line = 59), 
            $out += '>三星以下</option> <option value="2" ', $line = 60, 2 == hotelAudit.level && ($out += 'selected="selected"', 
            $line = 60), $out += '>三星</option> <option value="3" ', $line = 61, 3 == hotelAudit.level && ($out += 'selected="selected"', 
            $line = 61), $out += '>准四星</option> <option value="4" ', $line = 62, 4 == hotelAudit.level && ($out += 'selected="selected"', 
            $line = 62), $out += '>四星</option> <option value="5" ', $line = 63, 5 == hotelAudit.level && ($out += 'selected="selected"', 
            $line = 63), $out += '>准五星</option> <option value="6" ', $line = 64, 6 == hotelAudit.level && ($out += 'selected="selected"', 
            $line = 64), $out += '>五星</option> <option value="7" ', $line = 65, 7 == hotelAudit.level && ($out += 'selected="selected"', 
            $line = 65), $out += '>五星以上</option> </select> </div> </div> <div class="form-group"> <label class="col-xs-2 control-label no-padding-right">责任联系人</label> <div class="col-xs-10"> <div class="col-xs-3"> <input type="text" class="col-xs-12" name="managerName" value="', 
            $line = 74, $out += $escape(hotelAudit.managerName), $out += '" style="margin-left:-12px" placeholder="姓名"> </div> <div class="col-xs-7"> <input type="text" class="col-xs-12" name="mobileNumber" value="', 
            $line = 77, $out += $escape(hotelAudit.mobileNumber), $out += '" style="margin-left:-20px" placeholder="手机号"> </div> </div> </div> <div class="form-group" > <label class="col-xs-2 control-label no-padding-right">上传营业执照</label> <div class="col-xs-8 T-imgContainer" data-id="businessLicensePic"> <label class="ace-file-input" style="height:170px;"> <input type="file" name="businessLicensePic" id="businessLicensePic" class="T-upimg" /> ', 
            $line = 87, hotelAudit.businessLicensePic && ($out += ' <div class="T-original" style="position:relative;top:0;z-index:99;margin-top:-123px;text-align:center;"> <img class="middle" src="', 
            $line = 89, $out += $escape(hotelAudit.businessLicensePic), $out += '" style="max-height:120px;max-width:185px;" /> </div> ', 
            $line = 91), $out += ' </label> </div> </div> <div class="form-group"> <label class="col-xs-2 control-label no-padding-right">纳税人资格证</label> <div class="col-xs-8 T-imgContainer" data-id="taxesCardPic"> <label class="ace-file-input" style="height:170px;"> <input type="file" name="taxesCardPic" id="taxesCardPic" class="T-upimg" /> ', 
            $line = 101, hotelAudit.taxesCardPic && ($out += ' <div class="T-original" style="position:relative;top:0;z-index:99;margin-top:-123px;text-align:center;"> <img class="middle" src="', 
            $line = 103, $out += $escape(hotelAudit.taxesCardPic), $out += '" style="max-height:120px;max-width:185px;" /> </div> ', 
            $line = 105), $out += ' </label> </div> </div> <div class="form-group" style="margin-top:-13px;"> <label class="col-xs-2 control-label no-padding-right"></label> <div class="col-xs-10"> <input type="checkbox" checked class="T-isAgree" style="margin-top:1px;" disabled>&nbsp; <span> <a class="">我已阅读并同意《火柴头用户协议》</a> </span> </div> </div> <div class="form-group"> <div class="col-xs-12"> <button class="btn btn-block btn-primary T-btn-save R-right guideSubmit"> <i class="ace-icon fa fa-check"></i> 提交信息 </button> </div> </div> </form> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12">\r\n    <div class="page-header">\r\n        <p>\r\n            <span class="hct-hotel-font-20 mar-t-3">\r\n                {{if isAuth == 2}}\r\n                    已通过认证审核\r\n                {{else}}\r\n                    认证审核失败\r\n                {{/if}}\r\n            </span>\r\n        </p> \r\n        <span class="hct-hotel-font-14">\r\n            {{if isAuth == 2}}\r\n                注&nbsp;:&nbsp;认证成功后,&nbsp;可以用借款与商家进行在线支付\r\n            {{else}}\r\n                原因&nbsp;:&nbsp;{{hotelAudit.refuseRemark}}\r\n            {{/if}}\r\n        </span>\r\n\r\n    </div>\r\n    <div class="row">\r\n        <div class="col-xs-12">\r\n            <form class="form-horizontal T-form" onsubmit="return false">\r\n                <div class="form-group">\r\n                    <label class="col-xs-2 control-label no-padding-right"><span class="necessary">*</span>酒店名称</label>\r\n                    <div class="col-xs-10">\r\n                        <input type="text" class="col-xs-10" name="hotelName" value="{{hotelAudit.hotelName}}" \r\n                               placeholder="商家名称务必和营业执照名称一致，否则审核不通过">\r\n                        <input name="hotelId" value="{{hotelId}}" type="hidden">\r\n                    </div>\r\n                </div>\r\n\r\n                <div class="form-group">\r\n                    <label class="col-xs-2 control-label no-padding-right"><span class="necessary">*</span>所在地区</label>\r\n                    <div class="col-xs-10">\r\n                        <select class="col-xs-3" name="provinceId" style="margin-right:4px;height:24px !important;">\r\n                            <option selected="selected" value="">未选择</option>\r\n                        </select>\r\n                        <select class="col-xs-3" name="cityId" style="margin-right:4px;height:24px !important;">\r\n                            <option selected="selected" value="">未选择</option>\r\n                        </select>\r\n                        <select class="col-xs-3" name="districtId" style="height:24px !important;">\r\n                            <option selected="selected" value="">未选择</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class="form-group">\r\n                    <label class="col-xs-2 control-label no-padding-right"><span class="necessary">*</span>酒店地址</label>\r\n                    <div class="col-xs-10">\r\n                        <input type="text" class="col-xs-10" name="street" value="{{hotelAudit.street}}" placeholder="商家地址务必和营业执照名称一致，否则审核不通过">\r\n                    </div>\r\n                </div>\r\n\r\n                <div class="form-group">\r\n                    <label class="col-xs-2 control-label no-padding-right">酒店星级</label>\r\n                    <div class="col-xs-10">\r\n                        <select class="col-xs-10" name="level" style="margin-right:3px;height:24px !important;">\r\n                            <option value="1" {{if hotelAudit.level == 1}}selected="selected"{{/if}}>三星以下</option>\r\n                            <option value="2" {{if hotelAudit.level == 2}}selected="selected"{{/if}}>三星</option>\r\n                            <option value="3" {{if hotelAudit.level == 3}}selected="selected"{{/if}}>准四星</option>\r\n                            <option value="4" {{if hotelAudit.level == 4}}selected="selected"{{/if}}>四星</option>\r\n                            <option value="5" {{if hotelAudit.level == 5}}selected="selected"{{/if}}>准五星</option>\r\n                            <option value="6" {{if hotelAudit.level == 6}}selected="selected"{{/if}}>五星</option>\r\n                            <option value="7" {{if hotelAudit.level == 7}}selected="selected"{{/if}}>五星以上</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class="form-group">\r\n                    <label class="col-xs-2 control-label no-padding-right">责任联系人</label>\r\n                    <div class="col-xs-10">\r\n                        <div class="col-xs-3">\r\n                            <input type="text" class="col-xs-12" name="managerName" value="{{hotelAudit.managerName}}" style="margin-left:-12px" placeholder="姓名">\r\n                        </div>\r\n                        <div class="col-xs-7">\r\n                            <input type="text" class="col-xs-12" name="mobileNumber" value="{{hotelAudit.mobileNumber}}" style="margin-left:-20px" placeholder="手机号">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                \r\n                <div class="form-group" >\r\n                    <label class="col-xs-2 control-label no-padding-right">上传营业执照</label>\r\n                    <div class="col-xs-8 T-imgContainer" data-id="businessLicensePic">\r\n                        <label class="ace-file-input" style="height:170px;">\r\n                            <input type="file" name="businessLicensePic" id="businessLicensePic" class="T-upimg" />\r\n                            {{if !!hotelAudit.businessLicensePic}}\r\n                                <div class="T-original" style="position:relative;top:0;z-index:99;margin-top:-123px;text-align:center;">\r\n                                    <img class="middle" src="{{hotelAudit.businessLicensePic}}" style="max-height:120px;max-width:185px;" />\r\n                                </div>\r\n                            {{/if}}\r\n                        </label>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class="form-group">\r\n                    <label class="col-xs-2 control-label no-padding-right">纳税人资格证</label>\r\n                    <div class="col-xs-8 T-imgContainer" data-id="taxesCardPic">\r\n                        <label class="ace-file-input" style="height:170px;">\r\n                            <input type="file" name="taxesCardPic" id="taxesCardPic" class="T-upimg" />\r\n                            {{if !!hotelAudit.taxesCardPic}}\r\n                                <div class="T-original" style="position:relative;top:0;z-index:99;margin-top:-123px;text-align:center;">\r\n                                    <img class="middle" src="{{hotelAudit.taxesCardPic}}" style="max-height:120px;max-width:185px;" />\r\n                                </div>\r\n                            {{/if}}\r\n                        </label>\r\n                    </div>\r\n                </div>\r\n                \r\n                <div class="form-group" style="margin-top:-13px;">\r\n                    <label class="col-xs-2 control-label no-padding-right"></label>\r\n                    <div class="col-xs-10">\r\n                        <input type="checkbox" checked class="T-isAgree" style="margin-top:1px;" disabled>&nbsp;\r\n                        <span>\r\n                            <a class="">我已阅读并同意《火柴头用户协议》</a>\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class="form-group">\r\n                    <div class="col-xs-12">\r\n                        <button class="btn btn-block btn-primary T-btn-save R-right guideSubmit"> <i class="ace-icon fa fa-check"></i> 提交信息 </button>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});