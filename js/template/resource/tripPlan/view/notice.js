/*TMODJS:{"debug":true,"version":31,"md5":"c12566877d92e68d193d645f1533fa56"}*/
define(function(require) {
    return require("../../../template")("resource/tripPlan/view/notice", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), guideStatus = $data.guideStatus, busStatus = $data.busStatus, hotelStatus = $data.hotelStatus, restaurantStatus = $data.restaurantStatus, shopStatus = $data.shopStatus, selfPayStatus = $data.selfPayStatus, $out = "";
            return $out += '<div class="T-tripPlanNotice col-xs-12 globalAdd"> <div class="form-group mar-t-20 T-arrangeNotice"> <label class="pos-rel mar-l-10"><input type="checkbox" value="0" name="tourist" class="ace T-checked" checked><span class="lbl">游客</span></label> <label class="pos-rel mar-l-10"><input type="checkbox" value="1" name="guide" class="ace T-checked" ', 
            $line = 4, 3 == guideStatus && ($out += "checked", $line = 4), $out += '><span class="lbl">导</span></label> <label class="pos-rel mar-l-10"><input type="checkbox" value="2" name="bus" class="ace T-checked" ', 
            $line = 5, 3 == busStatus && ($out += "checked", $line = 5), $out += '><span class="lbl">车</span></label> <label class="pos-rel mar-l-10"><input type="checkbox" value="4" name="hotel" class="ace T-checked" ', 
            $line = 6, 3 == hotelStatus && ($out += "checked", $line = 6), $out += '><span class="lbl">房</span></label> <label class="pos-rel mar-l-10"><input type="checkbox" value="3" name="restaurant" class="ace T-checked" ', 
            $line = 7, 3 == restaurantStatus && ($out += "checked", $line = 7), $out += '><span class="lbl">餐</span></label> <label class="pos-rel mar-l-10"><input type="checkbox" value="5" name="shop" class="ace T-checked" ', 
            $line = 8, 3 == shopStatus && ($out += "checked", $line = 8), $out += '><span class="lbl">购</span></label> <label class="pos-rel mar-l-10"><input type="checkbox" value="9" name="selfPay" class="ace T-checked" ', 
            $line = 9, 3 == selfPayStatus && ($out += "checked", $line = 9), $out += '><span class="lbl">娱</span></label>  </div> <div class="form-group border T-touristCheckedShow"> <p class="mar-l-10">通知详细设置：</p> <label class="pos-rel mar-l-10"><input type="checkbox" name="rightNow" class="ace T-checked" checked><span class="lbl">立即发送</span></label> <label class="pos-rel mar-l-10"><input type="checkbox" name="timing" class="ace T-checked"><span class="lbl">短信定时发送</span><input type="text" name="sendDateTime" class="T-dateTimePicker mar-l-10 hidden T-timingShow" placeholder="定时发送时间"></label> <label class="pos-rel mar-l-10"><span class="lbl">短信签名</span><input type="text" name="smsSign" class=""></label> </div> <p class="mar-l-10">是否发送通知？</p> <div class="col-md-12 text-center mar-t-20"> <button class="btn btn-sm btn-primary T-cancel"> <i class="ace-icon fa fa-times-circle"></i> 取消 </button> <button class="btn btn-sm btn-primary T-btn-submit-notice"> <i class="ace-icon fa fa-check-circle"></i>确定 </button> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="T-tripPlanNotice col-xs-12 globalAdd">\r\n	<div class="form-group mar-t-20 T-arrangeNotice">\r\n		<label class="pos-rel mar-l-10"><input type="checkbox" value="0" name="tourist" class="ace T-checked" checked><span class="lbl">游客</span></label>\r\n		<label class="pos-rel mar-l-10"><input type="checkbox" value="1" name="guide" class="ace T-checked" {{if guideStatus == 3}}checked{{/if}}><span class="lbl">导</span></label>\r\n		<label class="pos-rel mar-l-10"><input type="checkbox" value="2" name="bus" class="ace T-checked" {{if busStatus == 3}}checked{{/if}}><span class="lbl">车</span></label>\r\n		<label class="pos-rel mar-l-10"><input type="checkbox" value="4" name="hotel" class="ace T-checked" {{if hotelStatus == 3}}checked{{/if}}><span class="lbl">房</span></label>\r\n		<label class="pos-rel mar-l-10"><input type="checkbox" value="3" name="restaurant" class="ace T-checked" {{if restaurantStatus == 3}}checked{{/if}}><span class="lbl">餐</span></label>\r\n		<label class="pos-rel mar-l-10"><input type="checkbox" value="5" name="shop" class="ace T-checked" {{if shopStatus == 3}}checked{{/if}}><span class="lbl">购</span></label>\r\n		<label class="pos-rel mar-l-10"><input type="checkbox" value="9" name="selfPay" class="ace T-checked" {{if selfPayStatus == 3}}checked{{/if}}><span class="lbl">娱</span></label>\r\n		<!-- <label class="pos-rel mar-l-10"><input type="checkbox" name="ticket" class="ace T-checked"><span class="lbl">票</span></label>\r\n		<label class="pos-rel mar-l-10"><input type="checkbox" name="other" class="ace T-checked"><span class="lbl">其他</span></label> -->\r\n	</div>\r\n	<div class="form-group border T-touristCheckedShow">\r\n		<p class="mar-l-10">通知详细设置：</p>\r\n		<label class="pos-rel mar-l-10"><input type="checkbox" name="rightNow" class="ace T-checked" checked><span class="lbl">立即发送</span></label>\r\n		<label class="pos-rel mar-l-10"><input type="checkbox" name="timing" class="ace T-checked"><span class="lbl">短信定时发送</span><input type="text" name="sendDateTime" class="T-dateTimePicker mar-l-10 hidden T-timingShow" placeholder="定时发送时间"></label>\r\n		<label class="pos-rel mar-l-10"><span class="lbl">短信签名</span><input type="text" name="smsSign" class=""></label>\r\n	</div>\r\n	<p class="mar-l-10">是否发送通知？</p>\r\n	<div class="col-md-12 text-center mar-t-20">\r\n		<button class="btn btn-sm btn-primary T-cancel">\r\n			<i class="ace-icon fa fa-times-circle"></i> 取消\r\n		</button>\r\n		<button class="btn btn-sm btn-primary T-btn-submit-notice">\r\n			<i class="ace-icon fa fa-check-circle"></i>确定\r\n		</button>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});