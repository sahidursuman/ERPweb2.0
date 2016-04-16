/*TMODJS:{"debug":true,"version":1,"md5":"0c3a79032c589edea66173a6c0d7d38b"}*/
define(function(require) {
    return require("/js/template/template")("arrange/arrangeCenter/bookingView/busList", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, recordSize = $data.recordSize, $out = "";
            return $out += '<table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr class="bg-blur T-tr-fixed"> <th>待订单号</th> <th>用车时间</th> <th>要求</th> <th>安排结果</th> <th>外联销售</th> <th>状态</th> <th>操作</th> </tr> </thead> <tbody class="T-guide-list"> <tr data-id=""> <td>DJ2342222</td>  <td>2016-04-05 13:45</td>  <td>请安排3人使用的车辆</td> <td>-</td> <td>张也</td> <td><div class="fa fa-check green"></div>已安排</td> <td style="vertical-align:middle;width:200px"> <a class="cursor T-action T-send R-right" data-right="1140010" title="通知"> 通知 <label style="padding-left:10px;">|</label> </a> <a class="cursor T-action T-view" title="查看"> 查看 </a> <a billstatus="-1" class="cursor T-action T-plan R-right" data-right="1140007" title="安排"> <label class="padding-right20">|</label> 安排 </a> </td> </tr> </tbody> </table> <div class="clearfix"></div> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 38, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="T-pagenation text-right"> </div> </div> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<table class="table table-striped table-bordered table-hover T-showHighLight">\r\n    <thead>\r\n        <tr class="bg-blur T-tr-fixed">\r\n            <th>待订单号</th>\r\n            <th>用车时间</th>\r\n            <th>要求</th>\r\n            <th>安排结果</th>\r\n            <th>外联销售</th>\r\n            <th>状态</th>\r\n            <th>操作</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody class="T-guide-list">\r\n        <tr data-id="">\r\n            <td>DJ2342222</td>\r\n\r\n            <!-- 团期 -->\r\n            <td>2016-04-05 13:45</td>\r\n\r\n            <!-- 团队人数 -->\r\n            <td>请安排3人使用的车辆</td>\r\n            <td>-</td>\r\n            <td>张也</td>\r\n            <td><div class="fa fa-check green"></div>已安排</td>\r\n            <td style="vertical-align:middle;width:200px"> \r\n                <a class="cursor T-action T-send R-right" data-right="1140010" title="通知"> 通知 <label style="padding-left:10px;">|</label> </a> \r\n                <a class="cursor T-action T-view" title="查看"> 查看 </a>\r\n                <a billstatus="-1" class="cursor T-action T-plan R-right" data-right="1140007" title="安排">\r\n                    <label class="padding-right20">|</label> 安排 </a>\r\n            </td>\r\n\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n<div class="clearfix"></div>\r\n<div class="row pageMode">\r\n    <div class="col-xs-6">\r\n        <small>共计 {{recordSize}} 条记录</small>\r\n    </div>\r\n    <div class="col-xs-6">\r\n        <div class="T-pagenation text-right">\r\n        </div>\r\n    </div>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});