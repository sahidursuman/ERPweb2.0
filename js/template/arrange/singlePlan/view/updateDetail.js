/*TMODJS:{"debug":true,"version":10,"md5":"bde44a29fa3fd89259e75d8fd2b17826"}*/
define(function(require) {
    return require("../../../template")("arrange/singlePlan/view/updateDetail", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $string = $utils.$string, detail = $data.detail, $out = "";
            return $out += '<div class="hct-update-detail globalAdd"> <div class="detail-content"> <script class="T-editor" id="tripPlanUpdateDetail" type="text/plain" style="width:100%"> ', 
            $line = 4, $out += $string(detail), $out += ' </script> </div> <div class="detail-footer"> <button class="btn btn-sm btn-danger T-cancel otherButton"> <i class="ace-icon fa fa-times"></i> 取消 </button> <button class="btn btn-sm btn-primary T-save otherButton marginLeft-30"> <i class="ace-icon fa fa-check"></i> 保存 </button> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="hct-update-detail globalAdd">\r\n	<div class="detail-content">\r\n		<script class="T-editor" id="tripPlanUpdateDetail" type="text/plain" style="width:100%">\r\n			{{#detail}}\r\n		</script>\r\n	</div>\r\n	<div class="detail-footer">\r\n		<button class="btn btn-sm btn-danger T-cancel otherButton">\r\n			<i class="ace-icon fa fa-times"></i>\r\n			取消\r\n		</button>\r\n\r\n		<button class="btn btn-sm  btn-primary T-save otherButton marginLeft-30">\r\n			<i class="ace-icon fa fa-check"></i>\r\n			保存\r\n		</button>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});