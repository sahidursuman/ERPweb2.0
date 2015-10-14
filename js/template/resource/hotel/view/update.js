/*TMODJS:{"debug":true,"version":45,"md5":"f446060069aa59232da83298dc09d366"}*/
define(function(require) {
    return require("../../../template")("resource/hotel/view/update", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, hotel = $data.hotel, $each = $utils.$each, $out = ($data.room, 
            $data.$index, $data.price, $data.i, "");
            return $out += '<div class="col-xs-12 updateHotelContainer globalAdd"> <form class="form-horizontal hotelMainForm formOneList" role="form" style="margin-top:10px" onsubmit="return false"> <div class=" ui-sortable-handle"> <h5 > <span class="badge badge-primary">1</span> <label class="title-size middle">酒店主体信息</label> </h5> <div class="widget-body"> <div class="widget-main"> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>酒店名称:</label> <div class="col-sm-3"> <input type="text" name="name" class="col-sm-12" value="', 
            $line = 13, $out += $escape(hotel.name), $out += '" maxlength="32"> <input type="text" name="id" hidden="hidden" value="', 
            $line = 14, $out += $escape(hotel.id), $out += '"> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>酒店星级:</label> <div class="col-sm-3"> <select name="level"> <option selected="selected" value="1" ', 
            $line = 21, 1 == hotel.level && ($out += 'selected="selected"', $line = 21), $out += '>三星以下</option> <option value="2" ', 
            $line = 22, 2 == hotel.level && ($out += 'selected="selected"', $line = 22), $out += '>三星</option> <option value="3" ', 
            $line = 23, 3 == hotel.level && ($out += 'selected="selected"', $line = 23), $out += '>准四星</option> <option value="4" ', 
            $line = 24, 4 == hotel.level && ($out += 'selected="selected"', $line = 24), $out += '>四星</option> <option value="5" ', 
            $line = 25, 5 == hotel.level && ($out += 'selected="selected"', $line = 25), $out += '>准五星</option> <option value="6" ', 
            $line = 26, 6 == hotel.level && ($out += 'selected="selected"', $line = 26), $out += '>五星</option> <option value="7" ', 
            $line = 27, 7 == hotel.level && ($out += 'selected="selected"', $line = 27), $out += '>五星以上</option> </select> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>联系人:</label> <div class="col-sm-3"> <input type="text" name="managerName" class="col-sm-12" value="', 
            $line = 34, $out += $escape(hotel.managerName), $out += '" maxlength="32"> </div> <label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>联系电话:</label> <div class="col-sm-3"> <input type="text" name="mobileNumber" class="col-sm-12" value="', 
            $line = 38, $out += $escape(hotel.mobileNumber), $out += '" maxlength="11"> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right">座机号码:</label> <div class="col-sm-3"> <input type="text" name="telNumber" class="col-sm-12" value="', 
            $line = 44, $out += $escape(hotel.telNumber), $out += '" maxlength="20" /> </div> <label class="col-sm-1 control-label no-padding-right">传真号码:</label> <div class="col-sm-3"> <input type="text" name="faxNumber" class="col-sm-12" value="', 
            $line = 48, $out += $escape(hotel.faxNumber), $out += '" maxlength="20" /> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right">酒店所在省市:</label> <div class="col-sm-8"> <select name="provinceId" style="margin-right:3px"> <option selected="selected" value="" >未选择</option> </select> <select name="cityId" style="margin-right:3px"> <option selected="selected" value="">未选择</option> </select> <select name="districtId" > <option selected="selected" value="">未选择</option> </select> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right">详细地址:</label> <div class="col-sm-6"> <input type="text" name="street" class="col-sm-12 addressMinute" placeholder="请输入街道地址" value="', 
            $line = 68, $out += $escape(hotel.street), $out += '" maxlength="100"/> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right">酒店设施:</label> <div class="col-sm-3"> <input type="text" name="facility" class="col-sm-12" value="', 
            $line = 74, $out += $escape(hotel.facility), $out += '" maxlength="1000"> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>是否启用:</label> <div class="col-sm-2 checkbox" style="margin-left:-10px"> <label> <input type="checkbox" class="ace hotel-status" value="1" name="status" ', 
            $line = 81, 1 == hotel.status && ($out += 'checked="checked"', $line = 81), $out += ' > <span class="lbl"> 启用 </span> </label> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right">酒店简介:</label> <div class="col-sm-8"> <textarea class="form-control" name="remark" class="col-sm-12" >', 
            $line = 92, $out += $escape(hotel.remark), $out += '</textarea> </div> </div> </div> </div> </div> </form> <form class="form-horizontal hotelMainForm" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class=" ui-sortable-handle"> <h5 > <span class="badge badge-primary">2</span> <label class="title-size middle">房间列表</label> <a href="javascript:void(0)" class="btn-hotel-standard-add"> <button class="btn btn-sm btn-success btn-busCompany-add " style="margin-left: 20px;"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </a> </h5> <div class="widget-body"> <div class="widget-main no-padding"> <table class="table table-striped table-bordered table-hover hotelRoomStandardList"> <thead> <tr> <th class="table-border" width="80"><span class="necessary">*</span>房型</th> <th class="table-border"><span class="necessary">*</span>时间范围</th> <th class="table-border" style="width:100px"><span class="necessary">*</span>市场价(元)</th> <th class="table-border" style="width:100px"><span class="necessary">*</span>旅行社价(元)</th> <th class="table-border" style="width: 75px">早餐</th> <th class="table-border" width="70">午餐</th> <th class="table-border" width="70">晚餐</th> <th class="table-border" width="70">宽带</th> <th class="table-border" style="width:110px">建筑面积(平方)</th> <th class="table-border" style="width:100px">最多入住人数</th> <th class="table-border" width="80">备注</th> <th class="table-border">操作</th> </tr> </thead> <tbody> ', 
            $line = 133, $each(hotel.hotelRoomList, function(room) {
                $out += ' <tr data-entity-id="', $line = 134, $out += $escape(room.id), $out += '"> <td><input name="type" type="text" class="col-sm-12" value="', 
                $line = 135, $out += $escape(room.type), $out += '" maxlength="32" /></td> <td class="time"> ', 
                $line = 137, $each(room.priceList, function(price, i) {
                    $out += ' <div data-index="', $line = 138, $out += $escape(i + 1), $out += '" data-entity-id="', 
                    $line = 138, $out += $escape(price.id), $out += '" class="clearfix ', $line = 138, 
                    i > 0 && ($out += "appendDiv", $line = 138), $out += " div-", $line = 138, $out += $escape(i + 1), 
                    $out += '" style="margin-top:2px"> <input name="startTime" type="text" class="datepicker" style="width:100px" value="', 
                    $line = 139, $out += $escape($helpers.dateFormat(price.startTime, "yyyy-MM-dd")), 
                    $out += '"/><label>&nbsp;至&nbsp;</label><input name="endTime" type="text" class="datepicker" style="width:100px" value="', 
                    $line = 139, $out += $escape($helpers.dateFormat(price.endTime, "yyyy-MM-dd")), 
                    $out += '"/> ', $line = 140, 0 == i ? ($out += ' <label class="timeArea" style="float:right;padding-top:3px;"> <button class="btn btn-success btn-sm btn-white add"> <i class="ace-icon fa fa-plus bigger-110 icon-only"></i> </button> </label> ', 
                    $line = 146) : ($out += ' <label class="timeArea" style="float:right;padding-top:3px;"> <button class="btn btn-danger btn-sm btn-white delete"> <i class="ace-icon fa fa-minus bigger-110 icon-only"></i> </button> </label> ', 
                    $line = 152), $out += " </div> ", $line = 154;
                }), $out += " </td> <td> ", $line = 157, $each(room.priceList, function(price, i) {
                    $out += ' <div data-index="', $line = 158, $out += $escape(i + 1), $out += '" class="clearfix div-', 
                    $line = 158, $out += $escape(i + 1), $out += '" style="margin-top:2px"> <input name="marketPrice" type="text" class="col-sm-12" value="', 
                    $line = 159, $out += $escape(price.marketPrice), $out += '" maxlength="7" /> </div> ', 
                    $line = 161;
                }), $out += " </td> <td> ", $line = 164, $each(room.priceList, function(price, i) {
                    $out += ' <div data-index="', $line = 165, $out += $escape(i + 1), $out += '" class="clearfix div-', 
                    $line = 165, $out += $escape(i + 1), $out += '" style="margin-top:2px"> <input name="contractPrice" type="text" class="col-sm-12" value="', 
                    $line = 166, $out += $escape(price.contractPrice), $out += '" maxlength="7" /> </div> ', 
                    $line = 168;
                }), $out += ' </td> <td> <select name="containBreakfast" class="col-sm-12 no-padding"> <option value="0" ', 
                $line = 172, 0 == room.containBreakfast && ($out += 'selected="selected"', $line = 172), 
                $out += '>不含</option> <option value="1" ', $line = 173, 1 == room.containBreakfast && ($out += 'selected="selected"', 
                $line = 173), $out += '>包含</option> </select> </td> <td> <select name="containLunch" class="col-sm-12 no-padding"> <option value="0" ', 
                $line = 178, 0 == room.containLunch && ($out += 'selected="selected"', $line = 178), 
                $out += '>不含</option> <option value="1" ', $line = 179, 1 == room.containLunch && ($out += 'selected="selected"', 
                $line = 179), $out += '>包含</option> </select> </td> <td> <select name="containDinner" class="col-sm-12 no-padding"> <option value="0" ', 
                $line = 184, 0 == room.containDinner && ($out += 'selected="selected"', $line = 184), 
                $out += '>不含</option> <option value="1" ', $line = 185, 1 == room.containDinner && ($out += 'selected="selected"', 
                $line = 185), $out += '>包含</option> </select> </td> <td> <input name="broadband" class="col-sm-12" type="text" value="', 
                $line = 189, $out += $escape(room.broadband), $out += '" maxlength="100" /> </td> <td> <input name="areaSize" class="col-sm-12" type="text" value="', 
                $line = 192, $out += $escape(room.areaSize), $out += '" maxlength="5" /> </td> <td> <input name="guestNumber" class="col-sm-12" type="text" value="', 
                $line = 195, $out += $escape(room.guestNumber), $out += '" maxlength="4" /> </td> <td> <input name="remark" class="col-sm-12" type="text" value="', 
                $line = 198, $out += $escape(room.remark), $out += '" maxlength="1000" /> </td> <td style="width:70px"> <a data-entity-id="" href="#" class=" btn-xs btn-hotel-standard-delete">删除</a> </td> </tr> ', 
                $line = 204;
            }), $out += ' </tbody> </table> </div> </div> </div> </div> </div> <div class="space-10"></div> <button class="btn btn-block btn-primary btn-submit-hotel guideSubmit"> <i class="ace-icon fa fa-check"></i> 提交信息 </button> <div class="space-20"></div> </form> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12 updateHotelContainer globalAdd">\r\n	<form class="form-horizontal hotelMainForm formOneList" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class=" ui-sortable-handle">\r\n				<h5 >\r\n					<span class="badge badge-primary">1</span>\r\n					<label class="title-size middle">酒店主体信息</label>\r\n				</h5>\r\n			<div class="widget-body">\r\n				<div class="widget-main">\r\n					<div class="form-group guideInterval">\r\n						<label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>酒店名称:</label>\r\n						<div class="col-sm-3">\r\n							<input type="text" name="name" class="col-sm-12" value="{{hotel.name}}" maxlength="32">\r\n							<input type="text" name="id" hidden="hidden" value="{{hotel.id}}">\r\n						</div>\r\n					</div>\r\n					<div class="form-group guideInterval">\r\n					    <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>酒店星级:</label>\r\n						<div class="col-sm-3">\r\n							<select name="level">\r\n								<option selected="selected" value="1" {{if hotel.level == 1}}selected="selected"{{/if}}>三星以下</option>\r\n								<option value="2" {{if hotel.level == 2}}selected="selected"{{/if}}>三星</option>\r\n								<option value="3" {{if hotel.level == 3}}selected="selected"{{/if}}>准四星</option>\r\n								<option value="4" {{if hotel.level == 4}}selected="selected"{{/if}}>四星</option>\r\n								<option value="5" {{if hotel.level == 5}}selected="selected"{{/if}}>准五星</option>\r\n								<option value="6" {{if hotel.level == 6}}selected="selected"{{/if}}>五星</option>\r\n								<option value="7" {{if hotel.level == 7}}selected="selected"{{/if}}>五星以上</option>\r\n							</select>\r\n						</div>\r\n					</div>\r\n					<div class="form-group guideInterval">\r\n					    <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>联系人:</label>\r\n						<div class="col-sm-3">\r\n							<input type="text" name="managerName" class="col-sm-12" value="{{hotel.managerName}}"  maxlength="32">\r\n						</div>\r\n						<label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>联系电话:</label>\r\n						<div class="col-sm-3">\r\n							<input type="text" name="mobileNumber" class="col-sm-12" value="{{hotel.mobileNumber}}" maxlength="11">\r\n						</div>\r\n					</div>\r\n					<div class="form-group guideInterval">\r\n						<label class="col-sm-2 control-label no-padding-right">座机号码:</label>\r\n						<div class="col-sm-3">\r\n							<input type="text" name="telNumber" class="col-sm-12" value="{{hotel.telNumber}}" maxlength="20" />\r\n						</div>\r\n						<label class="col-sm-1 control-label no-padding-right">传真号码:</label>\r\n						<div class="col-sm-3">\r\n							<input type="text" name="faxNumber" class="col-sm-12" value="{{hotel.faxNumber}}" maxlength="20" />\r\n						</div>\r\n					</div>\r\n					<div class="form-group guideInterval">\r\n						<label class="col-sm-2 control-label no-padding-right">酒店所在省市:</label>\r\n						<div class="col-sm-8">\r\n							<select name="provinceId" style="margin-right:3px">\r\n								<option selected="selected" value="" >未选择</option>\r\n							</select>\r\n							<select name="cityId"  style="margin-right:3px">\r\n								<option selected="selected" value="">未选择</option>\r\n							</select>\r\n							<select name="districtId" >\r\n								<option selected="selected" value="">未选择</option>\r\n							</select>\r\n						</div>\r\n					</div>\r\n					<div class="form-group guideInterval">\r\n						<label class="col-sm-2 control-label no-padding-right">详细地址:</label>\r\n						<div class="col-sm-6">\r\n							<input type="text" name="street" class="col-sm-12 addressMinute" placeholder="请输入街道地址" value="{{hotel.street}}" maxlength="100"/>\r\n						</div>\r\n					</div>\r\n					<div class="form-group guideInterval">\r\n						<label class="col-sm-2 control-label no-padding-right">酒店设施:</label>\r\n						<div class="col-sm-3">\r\n							<input type="text" name="facility" class="col-sm-12" value="{{hotel.facility}}" maxlength="1000">\r\n						</div>\r\n					</div>\r\n					<div class="form-group guideInterval">\r\n						<label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>是否启用:</label>\r\n						<div class="col-sm-2 checkbox" style="margin-left:-10px">\r\n							<label>\r\n								<input  type="checkbox" class="ace hotel-status" value="1" name="status"  {{if hotel.status == 1}}checked="checked"{{/if}} >\r\n								<span class="lbl">\r\n									启用\r\n								</span>\r\n							</label>\r\n						</div>\r\n					</div>\r\n\r\n					<div class="form-group guideInterval">\r\n						<label class="col-sm-2 control-label no-padding-right">酒店简介:</label>\r\n						<div class="col-sm-8">\r\n							<textarea class="form-control" name="remark" class="col-sm-12" >{{hotel.remark}}</textarea>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</form>\r\n	<form class="form-horizontal hotelMainForm" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class="form-group">\r\n			<div class="col-xs-12 col-sm-12 widget-container-col">\r\n				<div class=" ui-sortable-handle">\r\n						<h5 >\r\n							<span class="badge badge-primary">2</span>\r\n							<label class="title-size middle">房间列表</label>\r\n							<a href="javascript:void(0)" class="btn-hotel-standard-add">\r\n								<button class="btn btn-sm btn-success btn-busCompany-add " style="margin-left: 20px;">\r\n									<i class="ace-icon fa fa-plus"></i>\r\n									新增\r\n								</button>\r\n							</a>\r\n						</h5>\r\n					<div class="widget-body">\r\n						<div class="widget-main no-padding">\r\n							<table class="table table-striped table-bordered table-hover hotelRoomStandardList"> \r\n								<thead>\r\n								<tr>\r\n									<th class="table-border" width="80"><span class="necessary">*</span>房型</th>\r\n									<th class="table-border"><span class="necessary">*</span>时间范围</th>\r\n									<th class="table-border" style="width:100px"><span class="necessary">*</span>市场价(元)</th>\r\n									<th class="table-border" style="width:100px"><span class="necessary">*</span>旅行社价(元)</th>\r\n									<th class="table-border" style="width: 75px">早餐</th>\r\n									<th class="table-border" width="70">午餐</th>\r\n									<th class="table-border" width="70">晚餐</th>\r\n									<th class="table-border" width="70">宽带</th>\r\n									<th class="table-border" style="width:110px">建筑面积(平方)</th>\r\n									<th class="table-border" style="width:100px">最多入住人数</th>\r\n									<th class="table-border" width="80">备注</th>\r\n									<th class="table-border">操作</th>\r\n								</tr>\r\n								</thead>\r\n								<tbody>\r\n									{{each hotel.hotelRoomList as room}}\r\n									<tr data-entity-id="{{room.id}}">\r\n										<td><input name="type" type="text" class="col-sm-12" value="{{room.type}}" maxlength="32" /></td>\r\n										<td class="time">\r\n											{{each room.priceList as price i}}\r\n											<div data-index="{{i+1}}" data-entity-id="{{price.id}}" class="clearfix {{if i > 0}}appendDiv{{/if}} div-{{i+1}}" style="margin-top:2px">\r\n												<input name="startTime" type="text" class="datepicker" style="width:100px" value="{{price.startTime | dateFormat:\'yyyy-MM-dd\'}}"/><label>&nbsp;至&nbsp;</label><input name="endTime" type="text" class="datepicker" style="width:100px" value="{{price.endTime | dateFormat:\'yyyy-MM-dd\'}}"/>\r\n												{{if i == 0}}\r\n												<label class="timeArea" style="float:right;padding-top:3px;">\r\n													<button class="btn btn-success btn-sm btn-white add">\r\n														<i class="ace-icon fa fa-plus bigger-110 icon-only"></i>\r\n													</button>\r\n												</label>\r\n												{{else}}\r\n												<label class="timeArea" style="float:right;padding-top:3px;">\r\n													<button class="btn btn-danger btn-sm btn-white delete">\r\n														<i class="ace-icon fa fa-minus bigger-110 icon-only"></i>\r\n													</button>\r\n												</label>\r\n												{{/if}}\r\n											</div>\r\n											{{/each}}\r\n										</td>\r\n										<td> \r\n											{{each room.priceList as price i}}\r\n											<div data-index="{{i+1}}" class="clearfix div-{{i+1}}" style="margin-top:2px">\r\n												<input name="marketPrice" type="text" class="col-sm-12" value="{{price.marketPrice}}" maxlength="7" />\r\n											</div>\r\n											{{/each}}\r\n										</td>\r\n										<td>\r\n											{{each room.priceList as price i}}\r\n											<div data-index="{{i+1}}" class="clearfix div-{{i+1}}" style="margin-top:2px">\r\n												<input name="contractPrice" type="text" class="col-sm-12" value="{{price.contractPrice}}" maxlength="7" />\r\n											</div>\r\n											{{/each}}\r\n										</td>\r\n										<td>\r\n											<select name="containBreakfast" class="col-sm-12 no-padding">\r\n												<option value="0" {{if room.containBreakfast == 0}}selected="selected"{{/if}}>不含</option>\r\n												<option value="1" {{if room.containBreakfast == 1}}selected="selected"{{/if}}>包含</option>\r\n											</select>\r\n										</td>\r\n										<td>\r\n											<select name="containLunch" class="col-sm-12 no-padding">\r\n												<option value="0" {{if room.containLunch == 0}}selected="selected"{{/if}}>不含</option>\r\n												<option value="1" {{if room.containLunch == 1}}selected="selected"{{/if}}>包含</option>\r\n											</select>\r\n										</td>\r\n										<td> \r\n											<select name="containDinner" class="col-sm-12 no-padding">\r\n												<option value="0" {{if room.containDinner == 0}}selected="selected"{{/if}}>不含</option>\r\n												<option value="1" {{if room.containDinner == 1}}selected="selected"{{/if}}>包含</option>\r\n											</select>\r\n										</td>\r\n										<td>\r\n											<input name="broadband" class="col-sm-12" type="text" value="{{room.broadband}}" maxlength="100" />\r\n										</td>\r\n										<td>\r\n											<input name="areaSize" class="col-sm-12" type="text" value="{{room.areaSize}}" maxlength="5" />\r\n										</td>\r\n										<td>\r\n										 	<input name="guestNumber" class="col-sm-12" type="text" value="{{room.guestNumber}}" maxlength="4" />\r\n										 </td>\r\n										<td>\r\n											<input name="remark" class="col-sm-12" type="text" value="{{room.remark}}" maxlength="1000" />\r\n										</td>\r\n										<td style="width:70px">\r\n											<a data-entity-id="" href="#" class=" btn-xs  btn-hotel-standard-delete">删除</a>\r\n										</td>\r\n									</tr>	  \r\n									{{/each}} \r\n								</tbody>\r\n							</table>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n		<div class="space-10"></div>\r\n		<button class="btn btn-block btn-primary btn-submit-hotel guideSubmit">\r\n			<i class="ace-icon fa fa-check"></i>\r\n			提交信息\r\n		</button>\r\n		<div class="space-20"></div>\r\n	</form>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});