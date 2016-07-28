/*TMODJS:{"debug":true,"version":243,"md5":"a55d2749579f8bda452cfa03eeffe9f8"}*/
define(function(require) {
    return require("../../../template")("resource/hotel/view/audit", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), hotelAudit = $data.hotelAudit, $escape = $utils.$escape, businessLicensePic = $data.businessLicensePic, taxesCardPic = $data.taxesCardPic, $out = "";
            return $out += '<div class="col-xs-12"> <div class="page-header"> <div class="pull-left mar-r-10"> ', 
            $line = 6, 1 == hotelAudit.isAuth ? ($out += ' <img src="../../images/audit.png"> ', 
            $line = 8) : 2 == hotelAudit.isAuth && ($out += ' <img src="../../images/yes.png" style="width:40px;height:40px;"> ', 
            $line = 10), $out += " </div> <div> ", $line = 13, 1 == hotelAudit.isAuth ? ($out += ' <p class="hct-hotel-font-14" style="margin:0;">审核中</p> <p class="hct-hotel-font-12" style="margin:0;"> 1-2个工作日处理 并发布商家登录账号<span class="T-timeNum">10</span>秒后，自动关闭该页面。 </p> ', 
            $line = 18) : 2 == hotelAudit.isAuth && ($out += ' <p class="hct-hotel-font-14" style="margin:0;">已认证</p> <p class="hct-hotel-font-12" style="margin:0;"> 注&nbsp;:&nbsp;认证成功后,&nbsp;可以用借款与商家进行在线支付<span class="T-timeNum">10</span>秒后，自动关闭该页面。 </p> ', 
            $line = 23), $out += ' </div> </div> <div class=""></div> <div class="row"> <div class="col-xs-12"> <form class="form-horizontal T-form" onsubmit="return false"> <table class="whereQ" style="width: 97%"> <tr> <td class="style-myself">酒店名称</td> <td class="styleOne-self">', 
            $line = 35, $out += $escape(hotelAudit.hotelName), $out += '</td> </tr> <tr> <td class="style-myself">所在地区</td> <td class="styleOne-self"> ', 
            $line = 41, hotelAudit.province && hotelAudit.city && hotelAudit.district && ($out += " ", 
            $line = 42, $out += $escape(hotelAudit.province.name), $out += "-- ", $line = 43, 
            $out += $escape(hotelAudit.city.name), $out += "-- ", $line = 44, $out += $escape(hotelAudit.district.name), 
            $out += " ", $line = 45), $out += ' </td> </tr> <tr> <td class="style-myself">酒店地址</td> <td class="styleOne-self">', 
            $line = 51, $out += $escape(hotelAudit.street), $out += '</td> </tr> <tr> <td class="style-myself">酒店星级</td> <td class="styleOne-self"> ', 
            $line = 59, 1 == hotelAudit.level ? ($out += " 三星以下 ", $line = 61) : 2 == hotelAudit.level ? ($out += " 三星 ", 
            $line = 63) : 3 == hotelAudit.level ? ($out += " 准四星 ", $line = 65) : 4 == hotelAudit.level ? ($out += " 四星 ", 
            $line = 67) : 5 == hotelAudit.level ? ($out += " 准五星 ", $line = 69) : 6 == hotelAudit.level ? ($out += " 五星 ", 
            $line = 71) : 7 == hotelAudit.level && ($out += " 五星以上 ", $line = 73), $out += ' </td> </tr> <tr> <td class="style-myself">责任联系人</td> <td class="styleOne-self">', 
            $line = 78, $out += $escape(hotelAudit.managerName), $out += "&nbsp;&nbsp;", $line = 78, 
            $out += $escape(hotelAudit.mobileNumber), $out += '</td> </tr> <tr> <td class="style-myself">营业执照</td> <td class="styleOne-self"> ', 
            $line = 83, hotelAudit.businessLicensePic ? ($out += ' <img class="middle btn-view hct-cursor" url="', 
            $line = 84, $out += $escape(businessLicensePic), $out += '" src="', $line = 84, 
            $out += $escape(hotelAudit.businessLicensePic), $out += '" style="max-height:120px;max-width:185px;" /> ', 
            $line = 85) : ($out += " 暂无图片 ", $line = 87), $out += ' </td> </tr> <tr> <td class="style-myself">纳税人资格证</td> <td class="styleOne-self"> ', 
            $line = 94, hotelAudit.taxesCardPic ? ($out += ' <img class="middle btn-view hct-cursor" url="', 
            $line = 95, $out += $escape(taxesCardPic), $out += '" src="', $line = 95, $out += $escape(hotelAudit.taxesCardPic), 
            $out += '" style="max-height:120px;max-width:185px;" /> ', $line = 96) : ($out += " 暂无图片 ", 
            $line = 98), $out += " </td> </tr> </table> </form> </div> </div> </div>", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12">\r\n    <div class="page-header">\r\n        \r\n        \r\n        <div class="pull-left mar-r-10">\r\n            {{if hotelAudit.isAuth == 1}}\r\n                <img src="../../images/audit.png">\r\n            {{else if hotelAudit.isAuth == 2}}\r\n                <img src="../../images/yes.png" style="width:40px;height:40px;">\r\n            {{/if}}\r\n        </div>\r\n        <div>\r\n            {{if hotelAudit.isAuth == 1}}\r\n                <p class="hct-hotel-font-14" style="margin:0;">审核中</p>\r\n                <p class="hct-hotel-font-12" style="margin:0;">\r\n                    1-2个工作日处理 并发布商家登录账号<span class="T-timeNum">10</span>秒后，自动关闭该页面。\r\n                </p>\r\n            {{else if hotelAudit.isAuth == 2}}\r\n                <p class="hct-hotel-font-14" style="margin:0;">已认证</p>\r\n                <p class="hct-hotel-font-12" style="margin:0;">\r\n                    注&nbsp;:&nbsp;认证成功后,&nbsp;可以用借款与商家进行在线支付<span class="T-timeNum">10</span>秒后，自动关闭该页面。\r\n                </p>\r\n            {{/if}}\r\n            \r\n        </div>\r\n        \r\n    </div>\r\n    <div class=""></div>\r\n    <div class="row">\r\n        <div class="col-xs-12">\r\n            <form class="form-horizontal T-form" onsubmit="return false">\r\n                <table class="whereQ" style="width: 97%">\r\n                    <tr>\r\n                        <td class="style-myself">酒店名称</td>\r\n                        <td class="styleOne-self">{{hotelAudit.hotelName}}</td>\r\n                    </tr>\r\n\r\n                     <tr>\r\n                        <td class="style-myself">所在地区</td>\r\n                        <td class="styleOne-self">\r\n                            {{if !!hotelAudit.province && !!hotelAudit.city && !!hotelAudit.district}}\r\n                                {{hotelAudit.province.name}}--\r\n                                {{hotelAudit.city.name}}--\r\n                                {{hotelAudit.district.name}}\r\n                            {{/if}}\r\n                        </td>\r\n                    </tr>\r\n\r\n                    <tr>\r\n                        <td class="style-myself">酒店地址</td>\r\n                        <td class="styleOne-self">{{hotelAudit.street}}</td>\r\n                    </tr>\r\n\r\n                   \r\n\r\n                    <tr>\r\n                        <td class="style-myself">酒店星级</td>\r\n                        <td class="styleOne-self">\r\n                            {{if hotelAudit.level==1 }}\r\n                                三星以下\r\n                            {{else if hotelAudit.level==2 }}\r\n                                三星\r\n                            {{else if hotelAudit.level==3 }}\r\n                                准四星\r\n                            {{else if hotelAudit.level==4 }}\r\n                                四星\r\n                            {{else if hotelAudit.level==5 }}\r\n                                准五星\r\n                            {{else if hotelAudit.level==6 }}\r\n                                五星\r\n                            {{else if hotelAudit.level==7 }}\r\n                                五星以上\r\n                            {{/if}}\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td class="style-myself">责任联系人</td>\r\n                        <td class="styleOne-self">{{hotelAudit.managerName}}&nbsp;&nbsp;{{hotelAudit.mobileNumber}}</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td class="style-myself">营业执照</td>\r\n                        <td class="styleOne-self">\r\n                            {{if !!hotelAudit.businessLicensePic}}\r\n                                <img class="middle btn-view hct-cursor" url="{{businessLicensePic}}" src="{{hotelAudit.businessLicensePic}}" style="max-height:120px;max-width:185px;" />\r\n                            {{else}}\r\n                                暂无图片\r\n                            {{/if}}\r\n                        </td>\r\n                    </tr>\r\n\r\n                    <tr>\r\n                        <td class="style-myself">纳税人资格证</td>\r\n                        <td class="styleOne-self">\r\n                            {{if !!hotelAudit.taxesCardPic }}\r\n                                <img class="middle btn-view hct-cursor" url="{{taxesCardPic}}" src="{{hotelAudit.taxesCardPic}}" style="max-height:120px;max-width:185px;" />\r\n                            {{else}}\r\n                                暂无图片\r\n                            {{/if}}\r\n                        </td>\r\n                    </tr>\r\n                </table>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});