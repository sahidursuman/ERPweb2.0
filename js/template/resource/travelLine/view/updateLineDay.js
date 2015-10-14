/*TMODJS:{"debug":true,"version":58,"md5":"0629a85232a1c0a4c671bb4f9cb83c3f"}*/
define(function(require) {
    return require("../../../template")("resource/travelLine/view/updateLineDay", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), lineDay = $data.lineDay, $escape = $utils.$escape, $out = "";
            return $out += '<div class="col-xs-12"> <form class="form-horizontal updateTravelLineDayForm" role="form" style="margin-top:10px" onsubmit="return false"> <div class="widget-box ui-sortable-handle"> <div class="widget-header"> <h5 class="widget-title"> <i class="ace-icon fa fa-info-circle"></i> 日程安排主体信息 </h5> </div> <div class="widget-body"> <div class="widget-main"> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>行程日期:</label> <div class="col-sm-3"> <select name="whichDay" class="col-sm-12"> <option ', 
            $line = 16, 1 == lineDay.whichDay && ($out += 'selected="selected"', $line = 16), 
            $out += ' value="1">第1天</option> <option ', $line = 17, 2 == lineDay.whichDay && ($out += 'selected="selected"', 
            $line = 17), $out += ' value="2">第2天</option> <option ', $line = 18, 3 == lineDay.whichDay && ($out += 'selected="selected"', 
            $line = 18), $out += ' value="3">第3天</option> <option ', $line = 19, 4 == lineDay.whichDay && ($out += 'selected="selected"', 
            $line = 19), $out += ' value="4">第4天</option> <option ', $line = 20, 5 == lineDay.whichDay && ($out += 'selected="selected"', 
            $line = 20), $out += ' value="5">第5天</option> <option ', $line = 21, 6 == lineDay.whichDay && ($out += 'selected="selected"', 
            $line = 21), $out += ' value="6">第6天</option> <option ', $line = 22, 7 == lineDay.whichDay && ($out += 'selected="selected"', 
            $line = 22), $out += ' value="7">第7天</option> <option ', $line = 23, 8 == lineDay.whichDay && ($out += 'selected="selected"', 
            $line = 23), $out += ' value="8">第8天</option> <option ', $line = 24, 9 == lineDay.whichDay && ($out += 'selected="selected"', 
            $line = 24), $out += ' value="9">第9天</option> <option ', $line = 25, 10 == lineDay.whichDay && ($out += 'selected="selected"', 
            $line = 25), $out += ' value="10">第10天</option> <option ', $line = 26, 11 == lineDay.whichDay && ($out += 'selected="selected"', 
            $line = 26), $out += ' value="11">第11天</option> <option ', $line = 27, 12 == lineDay.whichDay && ($out += 'selected="selected"', 
            $line = 27), $out += ' value="12">第12天</option> <option ', $line = 28, 13 == lineDay.whichDay && ($out += 'selected="selected"', 
            $line = 28), $out += ' value="13">第13天</option> <option ', $line = 29, 14 == lineDay.whichDay && ($out += 'selected="selected"', 
            $line = 29), $out += ' value="14">第14天</option> <option ', $line = 30, 15 == lineDay.whichDay && ($out += 'selected="selected"', 
            $line = 30), $out += ' value="15">第15天</option> <option ', $line = 31, 16 == lineDay.whichDay && ($out += 'selected="selected"', 
            $line = 31), $out += ' value="16">第16天</option> <option ', $line = 32, 17 == lineDay.whichDay && ($out += 'selected="selected"', 
            $line = 32), $out += ' value="17">第17天</option> <option ', $line = 33, 18 == lineDay.whichDay && ($out += 'selected="selected"', 
            $line = 33), $out += ' value="18">第18天</option> <option ', $line = 34, 19 == lineDay.whichDay && ($out += 'selected="selected"', 
            $line = 34), $out += ' value="19">第19天</option> <option ', $line = 35, 20 == lineDay.whichDay && ($out += 'selected="selected"', 
            $line = 35), $out += ' value="20">第20天</option> <option ', $line = 36, 21 == lineDay.whichDay && ($out += 'selected="selected"', 
            $line = 36), $out += ' value="21">第21天</option> <option ', $line = 37, 22 == lineDay.whichDay && ($out += 'selected="selected"', 
            $line = 37), $out += ' value="22">第22天</option> <option ', $line = 38, 23 == lineDay.whichDay && ($out += 'selected="selected"', 
            $line = 38), $out += ' value="23">第23天</option> <option ', $line = 39, 24 == lineDay.whichDay && ($out += 'selected="selected"', 
            $line = 39), $out += ' value="24">第24天</option> <option ', $line = 40, 25 == lineDay.whichDay && ($out += 'selected="selected"', 
            $line = 40), $out += ' value="25">第25天</option> <option ', $line = 41, 26 == lineDay.whichDay && ($out += 'selected="selected"', 
            $line = 41), $out += ' value="26">第26天</option> <option ', $line = 42, 27 == lineDay.whichDay && ($out += 'selected="selected"', 
            $line = 42), $out += ' value="27">第27天</option> <option ', $line = 43, 28 == lineDay.whichDay && ($out += 'selected="selected"', 
            $line = 43), $out += ' value="28">第28天</option> <option ', $line = 44, 29 == lineDay.whichDay && ($out += 'selected="selected"', 
            $line = 44), $out += ' value="29">第29天</option> <option ', $line = 45, 30 == lineDay.whichDay && ($out += 'selected="selected"', 
            $line = 45), $out += ' value="30">第30天</option> <option ', $line = 46, 31 == lineDay.whichDay && ($out += 'selected="selected"', 
            $line = 46), $out += ' value="31">第31天</option> </select> </div> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>酒店星级:</label> <div class="col-sm-3"> <select name="hotelLevel" class="col-sm-12"> <option ', 
            $line = 52, 1 == lineDay.hotelLevel && ($out += 'selected="selected"', $line = 52), 
            $out += ' value="0">未选择</option> <option ', $line = 53, 1 == lineDay.hotelLevel && ($out += 'selected="selected"', 
            $line = 53), $out += ' value="1">三星以下</option> <option ', $line = 54, 2 == lineDay.hotelLevel && ($out += 'selected="selected"', 
            $line = 54), $out += ' value="2">三星</option> <option ', $line = 55, 3 == lineDay.hotelLevel && ($out += 'selected="selected"', 
            $line = 55), $out += ' value="3">准四星</option> <option ', $line = 56, 4 == lineDay.hotelLevel && ($out += 'selected="selected"', 
            $line = 56), $out += ' value="4">四星</option> <option ', $line = 57, 5 == lineDay.hotelLevel && ($out += 'selected="selected"', 
            $line = 57), $out += ' value="5">准五星</option> <option ', $line = 58, 6 == lineDay.hotelLevel && ($out += 'selected="selected"', 
            $line = 58), $out += ' value="6">五星</option> <option ', $line = 59, 7 == lineDay.hotelLevel && ($out += 'selected="selected"', 
            $line = 59), $out += ' value="7">五星以上</option> </select> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>行程标题:</label> <div class="col-sm-3"> <input type="text" name="title" value="', 
            $line = 66, $out += $escape(lineDay.title), $out += '" class="col-sm-12"> </div> <label class="col-sm-2 control-label no-padding-right">住宿地点:</label> <div class="col-sm-3"> <input type="text" name="restPosition" value="', 
            $line = 70, $out += $escape(lineDay.restPosition), $out += '" class="col-sm-12"> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">沿途风景:</label> <div class="col-sm-3"> <input type="text" name="roadScenic" value="', 
            $line = 76, $out += $escape(lineDay.roadScenic), $out += '" class="col-sm-12"> </div> <label class="col-sm-2 control-label no-padding-right">含餐情况:</label> <div class="col-sm-3"> <input type="text" name="repastDetail" value="', 
            $line = 80, $out += $escape(lineDay.repastDetail), $out += '" class="col-sm-12"> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>行程详情:</label> <div class="clearfix"></div> <script id="detailEditor-update-travelLine" type="text/plain" style="width: 100%"></script> </div> </div> </div> </div> <div class="space-10"></div> <button class="btn btn-block btn-primary btn-submit-line-day"> <i class="ace-icon fa fa-check"></i> 提交信息 </button> <div class="space-20"></div> </form> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12">\r\n	<form class="form-horizontal updateTravelLineDayForm" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class="widget-box ui-sortable-handle">\r\n			<div class="widget-header">\r\n				<h5 class="widget-title">\r\n					<i class="ace-icon fa fa-info-circle"></i>\r\n					日程安排主体信息 \r\n				</h5>\r\n			</div>\r\n			<div class="widget-body">\r\n				<div class="widget-main">\r\n					<div class="form-group">\r\n						<label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>行程日期:</label>\r\n						<div class="col-sm-3">\r\n							<select name="whichDay" class="col-sm-12">\r\n								<option {{if lineDay.whichDay == 1}}selected="selected"{{/if}} value="1">第1天</option>\r\n								<option {{if lineDay.whichDay == 2}}selected="selected"{{/if}} value="2">第2天</option>\r\n								<option {{if lineDay.whichDay == 3}}selected="selected"{{/if}} value="3">第3天</option>\r\n								<option {{if lineDay.whichDay == 4}}selected="selected"{{/if}} value="4">第4天</option>\r\n								<option {{if lineDay.whichDay == 5}}selected="selected"{{/if}} value="5">第5天</option>\r\n								<option {{if lineDay.whichDay == 6}}selected="selected"{{/if}} value="6">第6天</option>\r\n								<option {{if lineDay.whichDay == 7}}selected="selected"{{/if}} value="7">第7天</option>\r\n								<option {{if lineDay.whichDay == 8}}selected="selected"{{/if}} value="8">第8天</option>\r\n								<option {{if lineDay.whichDay == 9}}selected="selected"{{/if}} value="9">第9天</option>\r\n								<option {{if lineDay.whichDay == 10}}selected="selected"{{/if}} value="10">第10天</option>\r\n								<option {{if lineDay.whichDay == 11}}selected="selected"{{/if}} value="11">第11天</option>\r\n								<option {{if lineDay.whichDay == 12}}selected="selected"{{/if}} value="12">第12天</option>\r\n								<option {{if lineDay.whichDay == 13}}selected="selected"{{/if}} value="13">第13天</option>\r\n								<option {{if lineDay.whichDay == 14}}selected="selected"{{/if}} value="14">第14天</option>\r\n								<option {{if lineDay.whichDay == 15}}selected="selected"{{/if}} value="15">第15天</option>\r\n								<option {{if lineDay.whichDay == 16}}selected="selected"{{/if}} value="16">第16天</option>\r\n								<option {{if lineDay.whichDay == 17}}selected="selected"{{/if}} value="17">第17天</option>\r\n								<option {{if lineDay.whichDay == 18}}selected="selected"{{/if}} value="18">第18天</option>\r\n								<option {{if lineDay.whichDay == 19}}selected="selected"{{/if}} value="19">第19天</option>\r\n								<option {{if lineDay.whichDay == 20}}selected="selected"{{/if}} value="20">第20天</option>\r\n								<option {{if lineDay.whichDay == 21}}selected="selected"{{/if}} value="21">第21天</option>\r\n								<option {{if lineDay.whichDay == 22}}selected="selected"{{/if}} value="22">第22天</option>\r\n								<option {{if lineDay.whichDay == 23}}selected="selected"{{/if}} value="23">第23天</option>\r\n								<option {{if lineDay.whichDay == 24}}selected="selected"{{/if}} value="24">第24天</option>\r\n								<option {{if lineDay.whichDay == 25}}selected="selected"{{/if}} value="25">第25天</option>\r\n								<option {{if lineDay.whichDay == 26}}selected="selected"{{/if}} value="26">第26天</option>\r\n								<option {{if lineDay.whichDay == 27}}selected="selected"{{/if}} value="27">第27天</option>\r\n								<option {{if lineDay.whichDay == 28}}selected="selected"{{/if}} value="28">第28天</option>\r\n								<option {{if lineDay.whichDay == 29}}selected="selected"{{/if}} value="29">第29天</option>\r\n								<option {{if lineDay.whichDay == 30}}selected="selected"{{/if}} value="30">第30天</option>\r\n								<option {{if lineDay.whichDay == 31}}selected="selected"{{/if}} value="31">第31天</option>\r\n							</select>\r\n						</div>\r\n						<label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>酒店星级:</label>\r\n						<div class="col-sm-3">\r\n							<select name="hotelLevel" class="col-sm-12">\r\n								<option {{if lineDay.hotelLevel == 1}}selected="selected"{{/if}} value="0">未选择</option>\r\n								<option {{if lineDay.hotelLevel == 1}}selected="selected"{{/if}} value="1">三星以下</option>\r\n								<option {{if lineDay.hotelLevel == 2}}selected="selected"{{/if}} value="2">三星</option>\r\n								<option {{if lineDay.hotelLevel == 3}}selected="selected"{{/if}} value="3">准四星</option>\r\n								<option {{if lineDay.hotelLevel == 4}}selected="selected"{{/if}} value="4">四星</option>\r\n								<option {{if lineDay.hotelLevel == 5}}selected="selected"{{/if}} value="5">准五星</option>\r\n								<option {{if lineDay.hotelLevel == 6}}selected="selected"{{/if}} value="6">五星</option>\r\n								<option {{if lineDay.hotelLevel == 7}}selected="selected"{{/if}} value="7">五星以上</option>\r\n							</select>\r\n						</div>\r\n					</div>\r\n					<div class="form-group">\r\n						<label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>行程标题:</label>\r\n						<div class="col-sm-3">\r\n							<input type="text" name="title" value="{{lineDay.title}}" class="col-sm-12">\r\n						</div>\r\n						<label class="col-sm-2 control-label no-padding-right">住宿地点:</label>\r\n						<div class="col-sm-3">\r\n							<input type="text" name="restPosition" value="{{lineDay.restPosition}}" class="col-sm-12">\r\n						</div>\r\n					</div>\r\n					<div class="form-group">\r\n						<label class="col-sm-2 control-label no-padding-right">沿途风景:</label>\r\n						<div class="col-sm-3">\r\n							<input type="text" name="roadScenic" value="{{lineDay.roadScenic}}" class="col-sm-12">\r\n						</div>\r\n						<label class="col-sm-2 control-label no-padding-right">含餐情况:</label>\r\n						<div class="col-sm-3">\r\n							<input type="text" name="repastDetail" value="{{lineDay.repastDetail}}" class="col-sm-12">\r\n						</div>\r\n					</div>\r\n					<div class="form-group">\r\n						<label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>行程详情:</label>\r\n						<div class="clearfix"></div>\r\n						<script id="detailEditor-update-travelLine" type="text/plain" style="width: 100%"></script>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n		<div class="space-10"></div>\r\n		<button class="btn btn-block btn-primary btn-submit-line-day">\r\n			<i class="ace-icon fa fa-check"></i>\r\n			提交信息\r\n		</button>\r\n		<div class="space-20"></div>\r\n	</form>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});