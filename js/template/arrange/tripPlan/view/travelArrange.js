/*TMODJS:{"debug":true,"version":21,"md5":"3a901051c9f9cc4a5929e32533b51562"}*/
define(function(require) {
    return require("../../../template")("arrange/tripPlan/view/travelArrange", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, lineProductDayList = $data.lineProductDayList, $escape = ($data.rs, 
            $data.$index, $utils.$escape), $out = "";
            return $line = 1, $each(lineProductDayList, function(rs) {
                $out += ' <tr> <td name="dateDays" data-which-day=', $line = 3, $out += $escape(rs.whichDay), 
                $out += '></td> <td><input type="text" class="col-xs-12" name="title" value="', 
                $line = 4, $out += $escape(rs.title), $out += '"></td> <td> <label class="control-label"> <input type="checkbox" name="repastDetailM" class="ace" ', 
                $line = 7, "1" == rs.m && ($out += "checked", $line = 7), $out += '> <span class="lbl">早餐</span> </label> <label class="control-label mar-l-10"> <input type="checkbox" name="repastDetailN" class="ace" ', 
                $line = 11, "1" == rs.n && ($out += "checked", $line = 11), $out += '> <span class="lbl">午餐</span> </label> <label class="control-label mar-l-10"> <input type="checkbox" name="repastDetailE" class="ace" ', 
                $line = 15, "1" == rs.e && ($out += "checked", $line = 15), $out += '> <span class="lbl">晚餐</span> </label> </td> <td><input type="text" class="col-xs-12" name="restPosition" value="', 
                $line = 19, $out += $escape(rs.restPosition), $out += '"></td> <td><input type="text" class="col-xs-12 T-action T-scenicItem" name="scenicItemNames" data-propover="', 
                $line = 20, $out += $escape(rs.scenicItemIds), $out += '" readonly value="', $line = 20, 
                $out += $escape(rs.roadScenic), $out += '"></td> <td> <a class="cursor T-action T-update-detail" title="编辑行程详情" data-detail="', 
                $line = 22, $out += $escape(rs.detail), $out += '"> 编辑行程详情 <label style="padding-left:10px;">|</label> </a> <a class="cursor T-action T-delete" title="删除"> 删除 </a> </td> </tr> ', 
                $line = 31;
            }), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '{{each lineProductDayList as rs}}\r\n<tr>\r\n	<td name="dateDays" data-which-day={{rs.whichDay}}></td>\r\n	<td><input type="text" class="col-xs-12" name="title" value="{{rs.title}}"></td>\r\n	<td>\r\n		<label class="control-label">\r\n			<input type="checkbox" name="repastDetailM" class="ace" {{if rs.m == "1"}}checked{{/if}}>\r\n			<span class="lbl">早餐</span>\r\n		</label>\r\n		<label class="control-label mar-l-10">\r\n			<input type="checkbox" name="repastDetailN" class="ace" {{if rs.n == "1"}}checked{{/if}}>\r\n			<span class="lbl">午餐</span>\r\n		</label>\r\n		<label class="control-label mar-l-10">\r\n			<input type="checkbox" name="repastDetailE" class="ace" {{if rs.e == "1"}}checked{{/if}}>\r\n			<span class="lbl">晚餐</span>\r\n		</label>\r\n	</td>\r\n	<td><input type="text" class="col-xs-12" name="restPosition" value="{{rs.restPosition}}"></td>\r\n	<td><input type="text" class="col-xs-12 T-action T-scenicItem" name="scenicItemNames" data-propover="{{rs.scenicItemIds}}" readonly value="{{rs.roadScenic}}"></td>\r\n	<td>\r\n		<a class="cursor T-action T-update-detail" title="编辑行程详情" data-detail="{{rs.detail}}">\r\n            编辑行程详情\r\n            <label style="padding-left:10px;">|</label>\r\n        </a>\r\n        <a class="cursor T-action T-delete" title="删除">\r\n            删除\r\n        </a>\r\n	</td>\r\n</tr>\r\n{{/each}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});