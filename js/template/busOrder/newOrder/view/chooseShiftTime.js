/*TMODJS:{"debug":true,"version":30,"md5":"6e91764781b117bf7688a81240e621ac"}*/
define(function(require) {
    return require("../../../template")("busOrder/newOrder/view/chooseShiftTime", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, stationList = $data.stationList, $escape = ($data.rs, 
            $data.index, $utils.$escape), $out = "";
            return $out += '<div class="T-chooseShiftTimeContent container-fulid col-xs-12 mar-t20"> <table class="table table-striped table-bordered table-hover table-text-center"> <thead> <tr class="T-tr-fixed"> <th>选择</th> <th>站名</th> <th>到站时间</th> <th>发车时间</th> <th>里程</th> </tr> </thead> <tbody> ', 
            $line = 13, $each(stationList, function(rs, index) {
                $out += ' <tr data-arrive="', $line = 14, 0 == index ? ($line = 14, $out += $escape(rs.startTime), 
                $line = 14) : ($line = 14, $out += $escape(rs.arriveTime), $line = 14), $out += '" data-start="', 
                $line = 14, index == stationList.length - 1 ? ($line = 14, $out += $escape(rs.arriveTime), 
                $line = 14) : ($line = 14, $out += $escape(rs.startTime), $line = 14), $out += '"> <td><label><input class="T-radio ace" name="form-chooseTime-radio" type="radio" checked=""><span class="lbl"></span></label></td> <td>', 
                $line = 16, $out += $escape(rs.stationName), $out += "</td> <td>", $line = 17, $out += $escape(rs.arriveTime), 
                $out += "</td> <td>", $line = 18, $out += $escape(rs.startTime), $out += "</td> <td>", 
                $line = 19, $out += $escape(rs.miles), $out += "</td> </tr> ", $line = 21;
            }), $out += ' </tbody> </table> <div class="mar-t20"> <button class="T-choose btn btn-sm btn-primary btn-block"><i class="ace-icon fa fa-check"></i> 确定 </button> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="T-chooseShiftTimeContent container-fulid col-xs-12 mar-t20">\r\n    <table class="table table-striped table-bordered table-hover table-text-center">\r\n        <thead>\r\n            <tr class="T-tr-fixed">\r\n                <th>选择</th>\r\n                <th>站名</th>\r\n                <th>到站时间</th>\r\n                <th>发车时间</th>\r\n                <th>里程</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            {{each stationList as rs index}}\r\n            <tr data-arrive="{{if index == 0}}{{rs.startTime}}{{else}}{{rs.arriveTime}}{{/if}}" data-start="{{if index == (stationList.length-1)}}{{rs.arriveTime}}{{else}}{{rs.startTime}}{{/if}}">\r\n                <td><label><input class="T-radio ace" name="form-chooseTime-radio" type="radio" checked=""><span class="lbl"></span></label></td>\r\n                <td>{{rs.stationName}}</td>\r\n                <td>{{rs.arriveTime}}</td>\r\n                <td>{{rs.startTime}}</td>\r\n                <td>{{rs.miles}}</td>\r\n            </tr>\r\n            {{/each}}\r\n        </tbody>\r\n    </table>\r\n    <div class="mar-t20">\r\n        <button class="T-choose btn btn-sm btn-primary btn-block"><i class="ace-icon fa fa-check"></i> 确定 </button>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});