/*TMODJS:{"debug":true,"version":106,"md5":"925541faadd9e05ab8f0c3c8a9ce76f4"}*/
define(function(require) {
    return require("../../../template")("resource/travelLine/view/update", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, clipboardMode = $data.clipboardMode, $escape = $utils.$escape, travelLine = $data.travelLine, $each = $utils.$each, $out = ($data.line, 
            $data.$index, "");
            return $out += '<div class="col-xs-12 globalAdd"> <form class="form-horizontal travelLineUpdateMainForm" role="form" style="margin-top:10px" onsubmit="return false"> ', 
            $line = 3, 0 == clipboardMode && ($out += ' <input name="id" type="hidden" value="', 
            $line = 4, $out += $escape(travelLine.id), $out += '"/> ', $line = 5), $out += ' <div class=" ui-sortable-handle"> <div class="margin-top"> <h5 class="widget-title"> <span class="badge badge-primary">1</span> <a class="middle"> 线路主体信息</a> </h5> </div> <div class="widget-body"> <div class="widget-main"> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>线路名称:</label> <div class="col-sm-3"> <input type="text" name="name" value="', 
            $line = 18, $out += $escape(travelLine.name), $out += '" class="col-sm-12" maxLength="80" /> </div> <label class="col-sm-1 control-label no-padding-right">是否启用:</label> <div class="col-sm-2 checkbox" style="margin-left:-10px"> <label style="vertical-align: middle"> <input ', 
            $line = 23, 1 == travelLine.status && ($out += 'checked="checked" ', $line = 23), 
            $out += ' type="checkbox" class="ace travelLine-status" value="1"> <span class="lbl" style="margin-top: -25px"></span> </label> </div> </div> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right">费用包含:</label> <div class="col-sm-8"> <textarea class="form-control" name="includeFee" class="col-sm-12" maxLength="1000" >', 
            $line = 31, $out += $escape(travelLine.includeFee), $out += '</textarea> </div> </div> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right">费用不包含:</label> <div class="col-sm-8"> <textarea class="form-control" name="excludeFee" class="col-sm-12" maxLength="1000" >', 
            $line = 37, $out += $escape(travelLine.excludeFee), $out += '</textarea> </div> </div> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right">行程特色:</label> <div class="col-sm-8"> <textarea class="form-control" name="lineFeature" class="col-sm-12" maxLength="1000" >', 
            $line = 43, $out += $escape(travelLine.lineFeature), $out += '</textarea> </div> </div> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right">行程须知:</label> <div class="col-sm-8"> <textarea class="form-control" name="lineNotice" class="col-sm-12" maxLength="1000" >', 
            $line = 49, $out += $escape(travelLine.lineNotice), $out += '</textarea> </div> </div> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right">备注:</label> <div class="col-sm-8"> <textarea class="form-control" name="remark" class="col-sm-12" maxLength="1000" >', 
            $line = 55, $out += $escape(travelLine.remark), $out += '</textarea> </div> </div> </div> </div> </div> </form> <form class="form-horizontal travelLineDayList" role="form" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class=" ui-sortable-handle"> <div class=""> <h5 class="widget-title"> <span class="badge badge-primary">2</span> <a class="middle">日程列表</a> <a href="javascript:void(0)" class="btn-line-day-add"> <button class="btn btn-sm btn-success btn-travelLine-add" style="margin-left: 20px"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </a> </h5> </div> <div class="widget-body"> <div class="widget-main no-padding"> <table class="table table-striped table-bordered table-hover lineDayList " style="border: 1px solid #ccc"> <thead> <tr> <th class="table-border">行程日期</th> <th class="table-border">含餐情况</th> <th class="table-border">住宿地点</th> <th class="table-border">酒店星级</th> <th class="table-border">行程标题</th> <th class="table-border">操作</th> </tr> </thead> <tbody> ', 
            $line = 94, $each(travelLine.travelLineDayList, function(line) {
                $out += " <tr> <td>第", $line = 96, $out += $escape(line.whichDay), $out += '天<input name="whichDay" value="', 
                $line = 96, $out += $escape(line.whichDay), $out += '" type="hidden"/></td> <td>', 
                $line = 97, $out += $escape(line.repastDetail), $out += "</td> <td>", $line = 98, 
                $out += $escape(line.restPosition), $out += "</td> <td> ", $line = 100, 1 == line.hotelLevel ? ($out += " 三星以下 ", 
                $line = 102) : 2 == line.hotelLevel ? ($out += " 三星 ", $line = 104) : 3 == line.hotelLevel ? ($out += " 准四星 ", 
                $line = 106) : 4 == line.hotelLevel ? ($out += " 四星 ", $line = 108) : 5 == line.hotelLevel ? ($out += " 准五星 ", 
                $line = 110) : 6 == line.hotelLevel ? ($out += " 五星 ", $line = 112) : 7 == line.hotelLevel && ($out += " 五星以上 ", 
                $line = 114), $out += " </td> <td>", $line = 116, $out += $escape(line.title), $out += '</td> <td style="width:120px"> <div class="btn-group"> <a ', 
                $line = 119, 0 == clipboardMode && ($out += 'data-entiy-id="', $line = 119, $out += $escape(line.id), 
                $out += '"', $line = 119), $out += ' class="btn-line-day-edit cursor"> 修改 | </a> <a ', 
                $line = 122, 0 == clipboardMode && ($out += 'data-entiy-id="', $line = 122, $out += $escape(line.id), 
                $out += '"', $line = 122), $out += ' class="btn-line-day-delete cursor"> 删除 </a> </div> <input type="hidden" name="hotelLevel" value="', 
                $line = 126, $out += $escape(line.hotelLevel), $out += '"/> <input type="hidden" name="roadScenic" value="', 
                $line = 127, $out += $escape(line.roadScenic), $out += '"/> <input type="hidden" name="detail" value="', 
                $line = 128, $out += $escape($helpers.encode(line.detail)), $out += '"/> </td> </tr> ', 
                $line = 131;
            }), $out += ' </tbody> </table> </div> </div> </div> </div> </div> <div class="space-10"></div> <button class="btn btn-block btn-primary btn-submit-travelLine guideSubmit"> <i class="ace-icon fa fa-check"></i> 提交信息 </button> <div class="space-20"></div> </form> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12 globalAdd">\r\n	<form class="form-horizontal travelLineUpdateMainForm" role="form" style="margin-top:10px" onsubmit="return false">\r\n		{{if clipboardMode == false}}\r\n			<input name="id" type="hidden" value="{{travelLine.id}}"/>\r\n		{{/if}}\r\n		<div class=" ui-sortable-handle">\r\n			<div class="margin-top">\r\n				<h5 class="widget-title">   \r\n					<span class="badge badge-primary">1</span>\r\n					<a class="middle"> 线路主体信息</a>\r\n				</h5>\r\n			</div>\r\n			<div class="widget-body">\r\n				<div class="widget-main">\r\n					<div class="form-group">\r\n						<label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>线路名称:</label>\r\n						<div class="col-sm-3">\r\n							<input type="text" name="name" value="{{travelLine.name}}" class="col-sm-12" maxLength="80" />\r\n						</div>\r\n						<label class="col-sm-1 control-label no-padding-right">是否启用:</label>\r\n						<div class="col-sm-2 checkbox" style="margin-left:-10px">\r\n							<label style="vertical-align: middle">\r\n								<input {{if travelLine.status == 1}}checked="checked" {{/if}} type="checkbox" class="ace travelLine-status" value="1">\r\n								<span class="lbl" style="margin-top: -25px"></span>\r\n							</label>\r\n						</div>\r\n					</div>\r\n					<div class="form-group">\r\n						<label class="col-sm-1 control-label no-padding-right">费用包含:</label>\r\n						<div class="col-sm-8">\r\n							<textarea class="form-control" name="includeFee" class="col-sm-12" maxLength="1000"  >{{travelLine.includeFee}}</textarea>\r\n						</div>\r\n					</div>\r\n					<div class="form-group">\r\n						<label class="col-sm-1 control-label no-padding-right">费用不包含:</label>\r\n						<div class="col-sm-8">\r\n							<textarea class="form-control" name="excludeFee" class="col-sm-12" maxLength="1000"  >{{travelLine.excludeFee}}</textarea>\r\n						</div>\r\n					</div>\r\n					<div class="form-group">   \r\n						<label class="col-sm-1 control-label no-padding-right">行程特色:</label>\r\n						<div class="col-sm-8">\r\n							<textarea class="form-control" name="lineFeature" class="col-sm-12"  maxLength="1000" >{{travelLine.lineFeature}}</textarea>\r\n						</div>\r\n					</div>\r\n					<div class="form-group">\r\n						<label class="col-sm-1 control-label no-padding-right">行程须知:</label>\r\n						<div class="col-sm-8">\r\n							<textarea class="form-control" name="lineNotice" class="col-sm-12" maxLength="1000" >{{travelLine.lineNotice}}</textarea>\r\n						</div>\r\n					</div>\r\n					<div class="form-group">\r\n						<label class="col-sm-1 control-label no-padding-right">备注:</label>\r\n						<div class="col-sm-8">\r\n							<textarea class="form-control" name="remark" class="col-sm-12" maxLength="1000"  >{{travelLine.remark}}</textarea>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</form>\r\n	<form class="form-horizontal travelLineDayList" role="form"  onsubmit="return false">\r\n		<div class="form-group">\r\n			<div class="col-xs-12 col-sm-12 widget-container-col">\r\n				<div class=" ui-sortable-handle">\r\n					<div class="">\r\n						<h5 class="widget-title">\r\n							<span class="badge badge-primary">2</span>\r\n							<a class="middle">日程列表</a>\r\n							<a href="javascript:void(0)" class="btn-line-day-add">\r\n								<button class="btn btn-sm btn-success btn-travelLine-add" style="margin-left: 20px">\r\n									<i class="ace-icon fa fa-plus"></i>\r\n									新增\r\n								</button>\r\n							</a>\r\n						</h5>\r\n\r\n					</div>\r\n\r\n					<div class="widget-body">\r\n						<div class="widget-main no-padding">\r\n							<table class="table table-striped table-bordered table-hover lineDayList " style="border: 1px solid #ccc">\r\n								<thead>\r\n									<tr>\r\n										<th class="table-border">行程日期</th>\r\n										<th class="table-border">含餐情况</th>\r\n										<th class="table-border">住宿地点</th>\r\n										<th class="table-border">酒店星级</th>\r\n										<th class="table-border">行程标题</th>\r\n										<th class="table-border">操作</th>\r\n									</tr>\r\n								</thead>\r\n								<tbody> \r\n									{{each travelLine.travelLineDayList as line}}\r\n									<tr>\r\n										<td>第{{line.whichDay}}天<input name="whichDay" value="{{line.whichDay}}" type="hidden"/></td>\r\n										<td>{{line.repastDetail}}</td>\r\n										<td>{{line.restPosition}}</td>\r\n										<td>\r\n											{{if line.hotelLevel == 1}}\r\n												三星以下\r\n											{{else if line.hotelLevel == 2}}\r\n												三星\r\n											{{else if line.hotelLevel == 3}}\r\n												准四星\r\n											{{else if line.hotelLevel == 4}}\r\n												四星\r\n											{{else if line.hotelLevel == 5}}\r\n												准五星\r\n											{{else if line.hotelLevel == 6}}\r\n												五星\r\n											{{else if line.hotelLevel == 7}}\r\n												五星以上\r\n											{{/if}}\r\n										</td>\r\n										<td>{{line.title}}</td>\r\n										<td style="width:120px">\r\n											<div class="btn-group">\r\n												<a {{if clipboardMode == false}}data-entiy-id="{{line.id}}"{{/if}} class="btn-line-day-edit cursor">\r\n													修改 |\r\n												</a>\r\n												<a {{if clipboardMode == false}}data-entiy-id="{{line.id}}"{{/if}} class="btn-line-day-delete cursor">\r\n													删除\r\n												</a>\r\n											</div>\r\n										<input type="hidden" name="hotelLevel" value="{{line.hotelLevel}}"/>\r\n										<input type="hidden" name="roadScenic" value="{{line.roadScenic}}"/>\r\n										<input type="hidden" name="detail" value="{{line.detail | encode}}"/>\r\n										</td>\r\n									</tr>\r\n									{{/each}}\r\n								</tbody>\r\n							</table>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n		<div class="space-10"></div>\r\n			<button class="btn btn-block btn-primary btn-submit-travelLine guideSubmit">\r\n				<i class="ace-icon fa fa-check"></i>\r\n				提交信息\r\n			</button>\r\n		<div class="space-20"></div>\r\n	</form>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});