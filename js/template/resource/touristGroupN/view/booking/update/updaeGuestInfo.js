/*TMODJS:{"debug":true,"version":9,"md5":"a7a5cee6d821407d9ff10700158e50e7"}*/
define(function(require) {
    return require("../../../../../template")("resource/touristGroupN/view/booking/update/updaeGuestInfo", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, adultCount = $data.adultCount, childCount = $data.childCount, touristRealname = $data.touristRealname, touristMobileNumber = $data.touristMobileNumber, $out = "";
            return $out += '<div class="container-fluid mar-t-20"> <div class="row"> <div class="col-xs-12 mar-t-20"> <div class="pull-left"> <span class="necessary">*</span>人数：大人 <span class="necessary">*</span> <input type="text" class="w-50" name="adultCount" value="', 
            $line = 5, $out += $escape(adultCount), $out += '"> 小孩 <input type="text" class="w-50" name="childCount" value="', 
            $line = 6, $out += $escape(childCount), $out += '"> </div> </div> <div class="col-xs-12 mar-t-10"> <table class="table table-striped table-new table-bordered table-hover"> <thead> <tr> <th>姓名</th> <th>手机号码</th> </tr> </thead> <tbody class="T-addTouristTbody"> <tr> <td><input type="text" class="col-xs-12" name="touristRealname" value="', 
            $line = 19, $out += $escape(touristRealname), $out += '"></td> <td><input type="text" class="col-xs-12" name="touristMobileNumber" value="', 
            $line = 20, $out += $escape(touristMobileNumber), $out += '"></td> </tr> </tbody> </table> </div> <div class="col-xs-12 mar-t-20 mar-b-10 text-center"> <button class="btn btn-sm btn-primary otherButton T-btn-save" style="height: auto;"> <i class="ace-icon fa fa-check"></i> 保存 </button> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="container-fluid mar-t-20">\r\n    <div class="row">\r\n        <div class="col-xs-12 mar-t-20">\r\n            <div class="pull-left">\r\n                <span class="necessary">*</span>人数：大人 <span class="necessary">*</span> <input type="text" class="w-50" name="adultCount" value="{{adultCount}}">\r\n                小孩 <input type="text" class="w-50" name="childCount" value="{{childCount}}">\r\n            </div>\r\n        </div>\r\n        <div class="col-xs-12 mar-t-10">\r\n            <table class="table table-striped table-new table-bordered table-hover">\r\n                <thead>\r\n                    <tr>\r\n                        <th>姓名</th>\r\n                        <th>手机号码</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody class="T-addTouristTbody">\r\n                    <tr>\r\n                        <td><input type="text" class="col-xs-12" name="touristRealname" value="{{touristRealname}}"></td>\r\n                        <td><input type="text" class="col-xs-12" name="touristMobileNumber" value="{{touristMobileNumber}}"></td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        <div class="col-xs-12 mar-t-20 mar-b-10 text-center">\r\n            <button class="btn btn-sm btn-primary otherButton T-btn-save" style="height: auto;"> <i class="ace-icon fa fa-check"></i> 保存 </button>\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});