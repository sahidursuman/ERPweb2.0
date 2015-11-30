/*TMODJS:{"debug":true,"version":13,"md5":"b8b283cc23d4c7080a24c6089039ee86"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeTransfer/view/editTransferIn", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, touristGroupTransfer = $data.touristGroupTransfer, $out = "";
            return $out += '<div class="col-xs-12" id="editTransfer-container"> <div class="col-xs-12 T-editTransferIn globalAdd" style="margin-top:25px;"> <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false"> <div class=" ui-sortable-handle"> <h5 class="cursor"> <label class="middle title-size">请选择线路产品信息</label> </h5> <div class="widget-body"> <div class="widget-main"> <div class="form-group"> <div class="search-area"> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>线路产品:</label> <input type="hidden" value="', 
            $line = 13, $out += $escape(touristGroupTransfer.lineProduct.id), $out += '" name="lineProductId" /> <input type="hidden" value="', 
            $line = 14, $out += $escape(touristGroupTransfer.id), $out += '" name="tourGroupTransferId"/> <div class="col-sm-8"> <input type="text" value="" name="lineProductIdName" class="col-sm-8" readonly="readonly" /> <button class="col-sm-2 btn btn-sm btn-primary T-searLineProtrsferIn-search" style="padding-bottom:5px;"> <i class="ace-icon fa fa-search "></i>搜索 </button> </div> </div> </div> <form class="form-horizontal col-sm-12" role="form" onsubmit="return false"> <div class="form-group" style="text-align: center;"> <button class="btn btn-sm btn-danger T-canceleditTransfer "> <i class="ace-icon fa fa-times"></i>取消 </button> <button class="btn btn-sm btn-primary T-editLineProInfo "> <i class="ace-icon fa fa-check"></i> 保存 </button> </div> </form> </div> </div> </div> </form> </div> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12" id="editTransfer-container">\r\n	<div class="col-xs-12 T-editTransferIn globalAdd" style="margin-top:25px;">\r\n		<form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false">\r\n			<div class=" ui-sortable-handle">\r\n					<h5 class="cursor">\r\n						<label class="middle title-size">请选择线路产品信息</label>\r\n					</h5>\r\n				<div class="widget-body">\r\n					<div class="widget-main">\r\n						<div class="form-group">\r\n							<div class="search-area">\r\n								<label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>线路产品:</label>\r\n								<input type="hidden" value="{{touristGroupTransfer.lineProduct.id}}" name="lineProductId" />\r\n								<input type="hidden" value="{{touristGroupTransfer.id}}" name="tourGroupTransferId"/>\r\n								<div class="col-sm-8">\r\n									<input type="text" value="" name="lineProductIdName" class="col-sm-8" readonly="readonly" /> \r\n								\r\n									<button class="col-sm-2 btn btn-sm btn-primary  T-searLineProtrsferIn-search" style="padding-bottom:5px;">\r\n										<i class="ace-icon fa fa-search "></i>搜索\r\n									</button>      \r\n								</div> \r\n							</div>\r\n						</div>\r\n						<form class="form-horizontal col-sm-12" role="form" onsubmit="return false">\r\n						       <div class="form-group" style="text-align: center;">\r\n						       		<button class="btn btn-sm btn-danger T-canceleditTransfer "> <i class="ace-icon fa fa-times"></i>取消 </button>\r\n						       		<button class="btn btn-sm btn-primary T-editLineProInfo "> <i class="ace-icon fa fa-check"></i> 保存 </button>\r\n						       </div>\r\n						</form>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</form>\r\n	</div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});