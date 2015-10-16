/*TMODJS:{"debug":true,"version":50,"md5":"0aa1b6f094d870e2b83e011420f925f6"}*/
define(function(require) {
    return require("../../../template")("financial/count/view/viewLog", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, financialTripPlanLogList = $data.financialTripPlanLogList, $escape = ($data.log, 
            $data.index, $utils.$escape), $out = "";
            return $out += '<div class="financialCountViewLog" > <div class="ticketList"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover" style="margin-top: 20px"> <thead> <tr> <th class="th-border">序号</th> <th class="th-border">操作时间</th> <th class="th-border">操作人</th> <th class="th-border">操作类型</th> <th class="th-border">操作详情</th> </tr> </thead> <tbody> ', 
            $line = 15, $each(financialTripPlanLogList, function(log, index) {
                $out += " <tr> <td>", $line = 17, $out += $escape(index + 1), $out += "</td> <td>", 
                $line = 18, $out += $escape(log.operationTime), $out += "</td> <td>", $line = 19, 
                $out += $escape(log.user.userName), $out += "(", $line = 19, $out += $escape(log.user.realName), 
                $out += ")</td> <td>", $line = 20, 1 == log.type ? ($out += "保存", $line = 20) : 2 == log.type ? ($out += "财务", 
                $line = 20) : 3 == log.type ? ($out += "计调", $line = 20) : 4 == log.type ? ($out += "退回计调", 
                $line = 20) : 5 == log.type ? ($out += "退回导游", $line = 20) : 6 == log.type && ($out += "web报账", 
                $line = 20), $out += "</td> <td>", $line = 21, $out += $escape(log.operateJson.info.message), 
                $out += '<span json="', $line = 21, $out += $escape(log.json), $out += '"></span></td> </tr> ', 
                $line = 23;
            }), $out += " </tbody> </table> </div> </div> </div>", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="financialCountViewLog" >\r\n    <div class="ticketList">\r\n        <div class="col-xs-12">\r\n            <table class="table table-striped table-bordered table-hover" style="margin-top: 20px">\r\n                <thead>\r\n                <tr>\r\n                	<th class="th-border">序号</th>\r\n                    <th class="th-border">操作时间</th>\r\n                   	<th class="th-border">操作人</th>\r\n                   	<th class="th-border">操作类型</th>\r\n                   	<th class="th-border">操作详情</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                {{each financialTripPlanLogList as log index}}\r\n                <tr>\r\n                	<td>{{index+1}}</td>\r\n                	<td>{{log.operationTime}}</td>\r\n                	<td>{{log.user.userName}}({{log.user.realName}})</td>\r\n                	<td>{{if log.type == 1}}保存{{else if log.type == 2}}财务{{else if log.type == 3}}计调{{else if log.type == 4}}退回计调{{else if log.type == 5}}退回导游{{else if log.type == 6}}web报账{{/if}}</td>\r\n                	<td>{{log.operateJson.info.message}}<span json="{{log.json}}"></span></td>\r\n                </tr>\r\n                {{/each}}\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});