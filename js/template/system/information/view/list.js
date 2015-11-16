/*TMODJS:{"debug":true,"version":98,"md5":"55ca4f892905fc794fdcc4fa3c479f97"}*/
define(function(require) {
    return require("../../../template")("system/information/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, travelAgency = $data.travelAgency, userCount = $data.userCount, guideCount = $data.guideCount, $out = "";
            return $out += '<div class="row col-sm-12 " id="system_Info"> <div class="col-sm-12"> <div class="page-header"> <h1> <small style="color: black;"> <lable style="min-width:10%; display:inline-block; ">服务项目：', 
            $line = 6, $out += $escape(travelAgency.name), $out += ' </lable> </small> </h1> </div> </div> <div class="col-sm-12"> <div class="page-header"> <h1> <small style="color: black;"> <lable style="min-width:10%; display:inline-block;">操作号上限：<span class="maxUserCount">', 
            $line = 16, $out += $escape(travelAgency.maxUserCount), $out += '</span> </lable> <lable style="min-width:10%; display:inline-block;">使用：<span class="userCount">', 
            $line = 17, $out += $escape(userCount), $out += '</span></lable> <lable style="min-width:10%; display:inline-block;" >未使用：<span class="T-unUserCount"></span></lable> </small> </h1> </div> </div> <div class="col-sm-12"> <div class="page-header"> <h1> <small style="color: black;"> <lable style="min-width:10%; display:inline-block;" >导游账号上限：<span class="maxGuideCount">', 
            $line = 30, $out += $escape(travelAgency.maxGuideCount), $out += ' </span> </lable> <lable style="min-width:10%; display:inline-block;">已使用：<span class="guideCount">', 
            $line = 31, $out += $escape(guideCount), $out += '</span></lable> <lable style="min-width:10%; display:inline-block;" >未使用：<span class="T-unGuideCount"></span></lable> </small> </h1> </div> </div> <div class="col-sm-12"> <div class="page-header"> <h1> <small style="color: black;"> <lable style="min-width:10%; display:inline-block; ">短信剩余：', 
            $line = 43, $out += $escape(travelAgency.availableSmsCount), $out += '</lable> </small> </h1> </div> </div> <div class="col-sm-12"> <div class="page-header"> <h1> <small style="color: red;"> <lable style="min-width:10%; display:inline-block; ">系统信息</lable> <lable style="min-width:20%; display:inline-block; ">使用期限：2015年1月1日至2020年12月31日</lable> <lable style="min-width:10%; display:inline-block; ">技术支持：成都景触科技</lable> </small> </h1> </div> </div>      </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row col-sm-12 " id="system_Info">\r\n   <div class="col-sm-12"> \r\n	    <div class="page-header">\r\n			<h1>\r\n				<small style="color: black;"> \r\n					<lable style="min-width:10%; display:inline-block;  ">服务项目：{{travelAgency.name}} </lable>  \r\n				</small>\r\n			</h1>\r\n		</div>\r\n    </div>   \r\n    \r\n    <div class="col-sm-12"> \r\n	    <div class="page-header">\r\n			<h1>\r\n				<small style="color: black;"> \r\n					<lable style="min-width:10%; display:inline-block;">操作号上限：<span  class="maxUserCount">{{travelAgency.maxUserCount}}</span> </lable>  \r\n				    <lable style="min-width:10%; display:inline-block;">使用：<span class="userCount">{{userCount}}</span></lable> \r\n				     <lable style="min-width:10%; display:inline-block;" >未使用：<span class="T-unUserCount"></span></lable> \r\n				</small>\r\n			</h1>   \r\n		</div>\r\n    </div>\r\n    \r\n    \r\n    \r\n    <div class="col-sm-12"> \r\n	    <div class="page-header">\r\n			<h1>\r\n				<small style="color: black;"> \r\n					<lable style="min-width:10%; display:inline-block;" >导游账号上限：<span class="maxGuideCount">{{travelAgency.maxGuideCount}} </span>  </lable>  \r\n				    <lable style="min-width:10%; display:inline-block;">已使用：<span class="guideCount">{{guideCount}}</span></lable> \r\n				     <lable style="min-width:10%; display:inline-block;" >未使用：<span class="T-unGuideCount"></span></lable> \r\n				</small>\r\n			</h1>\r\n		</div>\r\n    </div>\r\n    \r\n\r\n    <div class="col-sm-12"> \r\n	    <div class="page-header">\r\n			<h1>\r\n				<small style="color: black;">    \r\n					<lable style="min-width:10%; display:inline-block;  ">短信剩余：{{travelAgency.availableSmsCount}}</lable>  \r\n				    \r\n				</small>  \r\n			</h1>\r\n		</div>\r\n    </div>\r\n    \r\n    \r\n    \r\n   <div class="col-sm-12"> \r\n	    <div class="page-header">\r\n			<h1>\r\n				<small style="color: red;"> \r\n					<lable style="min-width:10%; display:inline-block;  ">系统信息</lable>  \r\n				    <lable style="min-width:20%; display:inline-block;  ">使用期限：2015年1月1日至2020年12月31日</lable> \r\n				    <lable style="min-width:10%; display:inline-block;  ">技术支持：成都景触科技</lable> \r\n				    \r\n				</small>\r\n			</h1>\r\n		</div>\r\n    </div>\r\n    \r\n    \r\n<!-- 	<div style="width:500px;margin: 0px auto;text-align: center;color:#E20E0E;"> -->\r\n<!-- 		<div style="font-size:18px;font-weight: bold;margin-top:20px;">系统信息</div> -->\r\n<!-- 		<div style="font-size:14px;margin-top:20px;">使用期限：2015年1月1日至2020年12月31日</div> -->\r\n<!-- 		<div style="font-size:14px;">技术支持：成都景触科技</div> -->\r\n<!--     </div> -->\r\n   \r\n</div>\r\n\r\n\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});