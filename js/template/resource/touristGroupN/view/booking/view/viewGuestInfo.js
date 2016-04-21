/*TMODJS:{"debug":true,"version":3,"md5":"26c5923f32ba1004c3cabd9d2537575f"}*/
define(function(require) {
    return require("../../../../../template")("resource/touristGroupN/view/booking/view/viewGuestInfo", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, adultCount = $data.adultCount, childCount = $data.childCount, touristRealname = $data.touristRealname, touristMobileNumber = $data.touristMobileNumber, $out = "";
            return $out += '<div class="container-fluid mar-t-20"> <div class="row"> <div class="col-xs-12 mar-t-20"> <div class="pull-left"> 人数：大人 ', 
            $line = 5, $out += $escape(adultCount), $out += " 小孩 ", $line = 5, $out += $escape(childCount), 
            $out += ' </div> </div> <div class="col-xs-12 mar-t-10"> <table class="table table-striped table-new table-bordered table-hover"> <thead> <tr> <th>姓名</th> <th>手机号码</th> </tr> </thead> <tbody class="T-addTouristTbody"> <tr> <td>', 
            $line = 18, $out += $escape(touristRealname), $out += "</td> <td>", $line = 19, 
            $out += $escape(touristMobileNumber), $out += '</td> </tr> </tbody> </table> </div> <div class="col-xs-12 mar-t-20 mar-b-10 text-center"> <button class="btn btn-xs btn-default T-btn-close btn-primary w100"> <i class="ace-icon fa fa-times"></i> 关闭 </button> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="container-fluid mar-t-20">\r\n    <div class="row">\r\n        <div class="col-xs-12 mar-t-20">\r\n            <div class="pull-left">\r\n                人数：大人 {{adultCount}} 小孩 {{childCount}}\r\n            </div>\r\n        </div>\r\n        <div class="col-xs-12 mar-t-10">\r\n            <table class="table table-striped table-new table-bordered table-hover">\r\n                <thead>\r\n                    <tr>\r\n                        <th>姓名</th>\r\n                        <th>手机号码</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody class="T-addTouristTbody">\r\n                    <tr>\r\n                        <td>{{touristRealname}}</td>\r\n                        <td>{{touristMobileNumber}}</td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        <div class="col-xs-12 mar-t-20 mar-b-10 text-center">\r\n            <button class="btn btn-xs btn-default T-btn-close btn-primary w100"> <i class="ace-icon fa fa-times"></i> 关闭 </button>\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});