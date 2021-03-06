/*TMODJS:{"debug":true,"version":18,"md5":"b36aae2a411ffb6a299f4249f9ca0720"}*/
define(function(require) {
    return require("../../../template")("arrange/transitPlan/view/busnotice", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), isNoticeDriver = $data.isNoticeDriver, isNoticeTourist = $data.isNoticeTourist, $out = "";
            return $out += '<div class="T-transitNotice col-xs-12 globalAdd"> <div class="form-group mar-t-20"> <label class="pos-rel mar-l-10"><input type="checkbox" name="bus" class="ace T-checked" ', 
            $line = 3, (0 == isNoticeDriver || 1 == isNoticeDriver) && ($out += "checked", $line = 3), 
            $out += '><span class="lbl">司机</span></label> <label class="pos-rel mar-l-10"><input type="checkbox" name="tourist" class="ace T-checked" ', 
            $line = 4, (0 == isNoticeTourist || 1 == isNoticeTourist) && ($out += "checked", 
            $line = 4), $out += '><span class="lbl">游客</span></label> </div> <div class="form-group border hidden T-touristCheckedShow"> <p class="mar-l-10">游客通知设置：</p> <label class="pos-rel mar-l-10"><input type="checkbox" name="rightNow" class="ace T-checked" checked><span class="lbl">立即发送</span></label> <label class="pos-rel mar-l-10"><input type="checkbox" name="timing" class="ace T-checked"><span class="lbl">短信定时发送</span><input type="text" name="sendDateTime" class="T-dateTimePicker mar-l-10 hidden T-timingShow"></label> <label class="pos-rel mar-l-10"><span class="lbl">短信签名</span><input type="text" name="smsSign" class=""></label> </div> <p class="mar-l-10">是否发送通知？</p> <div class="col-md-12 text-center mar-t-20"> <button class="btn btn-sm btn-primary T-cancel"> <i class="ace-icon fa fa-times-circle"></i> 取消 </button> <button class="btn btn-sm btn-primary T-btn-submit-notice"> <i class="ace-icon fa fa-check-circle"></i>确定 </button> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="T-transitNotice col-xs-12 globalAdd">\r\n	<div class="form-group mar-t-20">\r\n	<label class="pos-rel mar-l-10"><input type="checkbox" name="bus" class="ace T-checked" {{if isNoticeDriver == 0 || isNoticeDriver == 1}}checked{{/if}}><span class="lbl">司机</span></label>\r\n	<label class="pos-rel mar-l-10"><input type="checkbox" name="tourist" class="ace T-checked" {{if isNoticeTourist == 0 || isNoticeTourist ==1}}checked{{/if}}><span class="lbl">游客</span></label>\r\n		\r\n	</div>\r\n	<div class="form-group border hidden T-touristCheckedShow">\r\n		<p class="mar-l-10">游客通知设置：</p>\r\n		<label class="pos-rel mar-l-10"><input type="checkbox" name="rightNow" class="ace T-checked" checked><span class="lbl">立即发送</span></label>\r\n		<label class="pos-rel mar-l-10"><input type="checkbox" name="timing" class="ace T-checked"><span class="lbl">短信定时发送</span><input type="text" name="sendDateTime" class="T-dateTimePicker mar-l-10 hidden T-timingShow"></label>\r\n		<label class="pos-rel mar-l-10"><span class="lbl">短信签名</span><input type="text" name="smsSign" class=""></label>\r\n	</div>\r\n	<p class="mar-l-10">是否发送通知？</p>\r\n	<div class="col-md-12 text-center mar-t-20">\r\n		<button class="btn btn-sm btn-primary T-cancel">\r\n			<i class="ace-icon fa fa-times-circle"></i> 取消\r\n		</button>\r\n		<button class="btn btn-sm btn-primary T-btn-submit-notice">\r\n			<i class="ace-icon fa fa-check-circle"></i>确定\r\n		</button>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});